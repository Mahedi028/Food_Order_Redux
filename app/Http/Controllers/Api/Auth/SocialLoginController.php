<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Interfaces\AuthInterface;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use GuzzleHttp\Exception\ClientException;


class SocialLoginController extends Controller
{
    use ResponseTrait;

    protected $auth;

    public function __construct(AuthInterface $authInterface)
    {
        $this->auth=$authInterface;
    }
    public function redirectToProvider($provider)
    {
        $validated=$this->validateProvider($provider);
        if(!is_null($validated)){
            return $validated;
        }

        $redirect_url=Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();

        return $this->responseSuccess($redirect_url,'User redirect to provider',200);

    }//end of method

    public function handleProviderCallback($provider)
    {
        $validated=$this->validateProvider($provider);
        if(!is_null($validated)){
            return $validated;
        }
        try{
            $userSocial=Socialite::driver($provider)->stateless()->user();

            //social user email
            $email=$userSocial->getEmail();

            $user = $this->auth->checkSocialUserEmail($email);

            if($user){
                //check if user exist
                Auth::login($user);
                $loginUser=Auth::user();

                //assign access token and user data
                $token=$user->createToken('app')->accessToken;

                return response()->json([
                    'user'=>$loginUser,
                    'token'=>$token
                ]);
            }else{
                //check if user are not exist
                $data=[];
                $data['email']=$userSocial->getEmail();
                $data['email_verified_at']=now();
                $data['name']=$userSocial->getName();
                $data['password']='12345';
                $data['phone_number']=null;
                $data['profile_photo_path']=$userSocial->getAvatar();

                //create user in user table
                $userCreated=$this->auth->createUser($data);

                //create provider in provider table
                $userCreated->providers()->updateOrCreate(
                    [
                        'provider'=>$provider,
                        'provider_id'=>$userSocial->getId(),
                    ],
                    [
                        'avatar'=>$userSocial->getAvatar()
                    ]
                    );

              //check if social user provider record is stored
              $userSocialAccount=$this->auth->socialUser($userCreated->id,$provider);

              if($userSocialAccount){
                //retrieve the user from users store
                $user=$this->auth->findSocialUser($userSocialAccount->user_id);

                //assign access token and user data
                $token=$user->createToken('app')->accessToken;

                //return access token and user data
                return response()->json([
                    'token'=>$token,
                    'user'=>$user,
                    'status'=>true
                ],200);
              }

            }

        }catch(ClientException $e){
            return $this->responseError($e->getMessage(),'Error',400);
        }



    }//end of method

    protected function validateProvider($provider)
    {
        if(!in_array($provider,['facebook','google','github'])){
            return $this->responseError(null,'Please login using facebook, google, github',422);
        }
    }//end of method




}
