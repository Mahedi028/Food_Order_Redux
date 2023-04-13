<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MenuCartController;
use App\Http\Controllers\Backend\MenuController;
use App\Http\Controllers\Api\User\UserController;
use App\Http\Controllers\Backend\StateController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Backend\BannerController;
use App\Http\Controllers\Backend\CouponController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DistrictController;
use App\Http\Controllers\Backend\DivisionController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\StripePaymentController;
use App\Http\Controllers\Api\Auth\SocialLoginController;
use App\Http\Controllers\Api\Auth\ResetPasswordController;
use App\Http\Controllers\Api\Auth\ForgetPasswordController;
use App\Http\Controllers\Api\User\ProfileController;
use App\Http\Controllers\Api\User\UserOrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function(){
    //-----------------Authentication starts-----------------------------//

    //----login api
    Route::post('/login', [LoginController::class, 'Login']);
    //----register api
    Route::post('/register', [RegisterController::class, 'Register']);
    //----account activation by email
    Route::get('/active/{token}', [RegisterController::class, 'ActiveAccount']);
    //----update token
    Route::put('/updatetoken/{token}', [RegisterController::class,'UpdateToken']);
    //forget-password
    Route::post('/forgetpassword',[ForgetPasswordController::class,'ForgetPassword']);
    //reset-password
    Route::post('/resetpassword', [ResetPasswordController::class,'ResetPassword']);
    //social login
    Route::get('/login/{provider}',[SocialLoginController::class, 'redirectToProvider']);
    Route::get('/login/{provider}/callback',[SocialLoginController::class, 'handleProviderCallback']);


    //-------------------protected route-------------------------------------//

    Route::controller(ProfileController::class)->middleware('auth:api')->group(function(){
        //authenticate user
        Route::get('/user','Profile');

    });

    Route::controller(UserOrderController::class)->middleware('auth:api')->group(function(){
        //authenticate user
        Route::get('/{user_id}/orders','UserOrder');
        Route::get('/{order_id}/order_details','OrderDetails');
        Route::get('/{order_id}/invoice_download','InvoiceDownload');
    });
    //-------------------protected route-------------------------------------//



    //-----------------Authentication ends-----------------------------//

    //--------------------Category api starts-----------------------------//
    Route::get('/allcategory', [CategoryController::class, 'ShowAllCategories']);
    Route::get('/menulistbycategory',[CategoryController::class, 'MenuListByCategory']);
    //--------------------Category api starts-----------------------------//


    //--------------------Menus api starts-----------------------------//
    Route::get('/allmenu', [MenuController::class, 'ShowAllMenus']);
    Route::get('/menu/{id}', [MenuController::class, 'MenuDetails']);
    //--------------------Menus api starts-----------------------------//


    //-------------Cart api starts------------------------------------//
    Route::controller(MenuCartController::class)->group(function(){
        //add cart
        Route::post('/addtocart','AddToCart');
        //cart count
        Route::get('/cartcount/{email}','CartCount');
        //cart list
        Route::get('/cartlist/{email}','CartList');
        //remove cart item
        Route::get('/removecartlist/{id}','RemoveCartList');
        //cartitem plus
        Route::get('/cartitemplus/{id}/{quantity}/{price}','CartItemPlus');
        //cartitem minus
        Route::get('/cartitemminus/{id}/{quantity}/{price}','CartItemMinus');
        //cart order
        Route::post('/cartorder','CartOrder');
        //orderlist bi user
        Route::get('/orderlistbyuser/{email}','OrderListByUser');
       });

       //--------------------Coupon api starts-----------------------------//
       Route::controller(CouponController::class)->group(function(){
        Route::get('/coupon/apply', [CouponController::class, 'applyCoupon']);
        Route::get('/coupon/remove', [CouponController::class, 'removeCoupon']);
       });
       //--------------------Coupon api starts-----------------------------//

       //-----------------------Divition-----------------------------------//
       Route::get('/alldivitions',[DivisionController::class,'getAllDivitions']);
       //-----------------------Divition-----------------------------------//
       //-----------------------District-----------------------------------//
    //    Route::get('/alldistricts',[DistrictController::class,'getAllDistricts']);
       Route::get('/district-get/{division_id}', [DistrictController::class, 'DivisionWiseDistrict']);
       //-----------------------Divition-----------------------------------//
       //-----------------------District-----------------------------------//
    //    Route::get('/allstates',[StateController::class,'getAllStates']);
       Route::get('/state-get/{district_id}', [StateController::class, 'DistrictWiseState']);
       //-----------------------District-----------------------------------//


       //-----------------------Banner-----------------------------------//
       Route::get('/allbanners',[BannerController::class,'getAllBanners']);
       //-----------------------Banner-----------------------------------//




       //-----------------------Stripe-payment-----------------------------------//
       Route::post('/stripe/order',[StripePaymentController::class,'StripePayment']);
       //-----------------------Stripe-payment-----------------------------------//

       //-----------------------SSL-Commerce--------------------------------------//
       Route::post('/sslcommerce/order',[SslCommerzPaymentController::class,'SSLCommercePayment']);
       //-----------------------SSL-Commerce--------------------------------------//

});

