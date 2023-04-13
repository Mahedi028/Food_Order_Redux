<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Interfaces\AuthInterface;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ResetPasswordRequest;

class ResetPasswordController extends Controller
{
    use ResponseTrait;

    protected $auth;

    public function __construct(AuthInterface $authInterface)
    {
        $this->auth=$authInterface;
    }//end of method

    // LOGIN API URL:http://127.0.0.1:8000/api/v1/resetpassword
    public function ResetPassword(ResetPasswordRequest $request)
    {
        $email=$request->input('email');
        $token=$request->input('token');
        $password=Hash::make($request->input('password'));

        //check email
        $emailCheck=$this->auth->emailCheck($email);
        //check token
        $tokenCheck=$this->auth->tokenCheck($token);

        if(!$emailCheck){
            return response()->json([
                'message'=>'Email not found'
            ]);
        }
        if(!$tokenCheck){
            return response()->json([
                'message'=>'Invalid token'
            ]);
        }

        try{
            //update password
            $this->auth->updatePassword($email,$password);
            //delete email
            $this->auth->deleteEmail($email);

            return response()->json([
                'statusCode'=>true,
                'message'=>'Password reset successful'
            ]);

        }catch(\Exception $e){
            return response()->json([
                'error'=>$e->getMessage(),
            ]);
        }

    }//end of method



}
