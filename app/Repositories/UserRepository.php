<?php

namespace App\Repositories;

use App\Models\User;
use App\Interfaces\UserInterface;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserInterface
{
    public function getAllOrderFromUser()
    {
        return Order::where('user_id',Auth::id())->orderBy('id','DESC')->get();
    }

}
?>
