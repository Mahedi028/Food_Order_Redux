<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Interfaces\AuthInterface;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    protected $auth;
    public function __construct(AuthInterface $authInterface)
    {
        $this->auth=$authInterface;
    }

    // LOGIN API URL:http://127.0.0.1:8000/api/v1/login
    public function Login(LoginRequest $request)
    {
        try{
            if(Auth::attempt($request->only('email','password'))){
                $user=Auth::user();
                $token=$user->createToken('app')->accessToken;

                return response()->json([
                    'message'=>"User successfully loggedIn",
                    'user'=>$user,
                    'token'=>$token
                    ], 200);
            }
        }catch(\Exception $e){
            return response()->json([
                'error'=>$e->getMessage()
            ]);
        }

        return response()->json([
            'message'=>'Invalid email and password'
        ],201);

    }//end of method
}
