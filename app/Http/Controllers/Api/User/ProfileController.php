<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseTrait;
use App\Interfaces\UserInterface;

class ProfileController extends Controller
{
    use ResponseTrait;

    protected $user;

    public function __construct(UserInterface $userInterface,)
    {
        $this->user=$userInterface;
    }

    public function Profile()
    {
        try{
            $user=Auth::user();
            return $this->responseSuccess($user,'Authenticate user',200);
        }catch(\Exception $e){
            return $this->responseError($e->getMessage(),'Error',401);
        }
    }//end of method

}
