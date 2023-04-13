<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Mail\ForgetPasswordMail;
use App\Interfaces\AuthInterface;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ForgetPasswordRequest;

class ForgetPasswordController extends Controller
{
    use ResponseTrait;

    protected $auth;

    public function __construct(AuthInterface $authInterface)
    {
        $this->auth=$authInterface;
    }

    // LOGIN API URL:http://127.0.0.1:8000/api/v1/forgetpassword
    public function ForgetPassword(ForgetPasswordRequest $request)
    {
        $email=$request->input('email');

        if($this->auth->emailNotMatch($email)){
            return $this->responseError(null,'Email not found',401);
        }

        //generate random token
        $token=rand(10,100000);

        try{
            $this->auth->insertToken($email,$token);
            //send mail for forget password
            Mail::to($email)->send(new ForgetPasswordMail($token));
            return $this->responseSuccess(null,'Reset password link sent your inbox',200);
        }catch(\Exception $e){
            return $this->responseError($e->getMessage(),'Something error',401);
        }
    }//end of method
}

