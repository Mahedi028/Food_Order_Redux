<?php

namespace App\Http\Controllers\Api\Auth;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Mail\EmailVerification;
use App\Interfaces\AuthInterface;
use App\Mail\EmailVerificationMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{
    use ResponseTrait;
    protected $auth;

    public function __construct(AuthInterface $authInterface)
    {
        $this->auth=$authInterface;
    }

    //REGISTER API URL:http://127.0.0.1:8000/api/v1/register
    public function Register(RegisterRequest $request)
    {

        $data=[];
        $email=$request->email;
        $data['name']=$request->input('name');
        $data['email']=$request->input('email');
        $data['password']=Hash::make($request->input('password'));
        $data['phone_number']=$request->input('phone_number');
        $data['email_verification_token']=uniqid(time().$request->input('email').Str::random(16));

        try{
            $user=$this->auth->RegisterUser($data);

            //create token
            $token=$user->createToken('app')->accessToken;

            //send mail for email verification
            Mail::to($email)->send(new EmailVerificationMail($user));

            return response()->json([
                'message'=>'User registered successfully.please check your email for account activation',
                'token'=>$token,
                'user'=>$user,
                'email_verification_token'=>$user->email_verification_token
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'error'=>$e->getMessage(),
                'message'=>'Invaild user and password',
                'user'=>null
            ], 400);
        }
    }//end of method

    public function ActiveAccount($token=null)
    {
        if($token=null){
            return response()->json([
                'account_active_status'=>false,
                'message'=>'Invalid token'
            ]);
        }

        try{
            $user=$this->auth->VerifyToken($token);
            if($user){
                return response()->json([
                    'account_active_status'=>true,
                    'message'=>'Account Active successful'
                ]);
            }else{
                return response()->json([
                    'account_active_status'=>false,
                    'message'=>'Invalid token'
                ]);
            }
        }catch(\Exception $e){
            return response()->json([
                'account_active_status'=>false,
                'message'=>'Invalid token',
                'error'=>$e->getMessage()
            ]);
        }
    }//end of method

    public function UpdateToken($token)
    {

        try{
            $data=$this->auth->updateUser($token);
            return response()->json([
                'message'=>'Account Activate successful please login now',
                'data'=>$data
            ]);
        }catch(\Exception $e){
            return response()->json([
                'message'=>'Invalid token',
                'error'=>$e->getMessage()
            ]);
        }

    }//end of method
}
