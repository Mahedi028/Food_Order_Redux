<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Mail\OrderMail;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Interfaces\OrderInterface;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Interfaces\MenuCartInterface;
use App\Http\Requests\StripePaymentRequest;

class StripePaymentController extends Controller
{
    use ResponseTrait;

    private $stripe;
    protected $order, $cart;
    public function __construct(
        OrderInterface $orderInterface,
    MenuCartInterface $menuCartInterface
    )
    {
        $this->cart=$menuCartInterface;
        $this->order=$orderInterface;
        $this->stripe=new \Stripe\StripeClient(config('services.stripe.stripe_secret'));
    }
    public function StripePayment(StripePaymentRequest $request)
    {
        $data=[];
        // Set your secret key. Remember to switch to your live secret key in production.
        // See your keys here: https://dashboard.stripe.com/apikeys
        // \Stripe\Stripe::setApiKey('sk_test_51MjmMDHuiuKxVmBRLKIQjVc0WfuxGhG7yoNrTUJ490J6y88gWKYE5YFw00FDdhGLa4isSc2yRoYBVslX6hsF0Daa00CpAJW6LN');
        \Stripe\Stripe::setApiKey(config('services.stripe.stripe_secret'));

        // Token is created using Checkout or Elements!
        // Get the payment token ID submitted by the form:
        // $token = $_POST['stripeToken'];
        $token = $request->input('stripeToken');
        $amount= $request->input('total_amount');
        $charge = \Stripe\Charge::create([
            'amount' =>$amount*100,
            'currency' => 'usd',
            'description' => 'FoodOrderApp',
            'source' => $token,
            'metadata' => ['order_id'=> uniqid()],
        ]);

        $data['user_id']=$request->input('user_id');
        $data['name']=$request->input('name');
        $data['email']=$request->input('email');
        $data['phone']=$request->input('phone');
        $data['address']=$request->input('address');
        $data['postal_code']=$request->input('postal_code');
        $data['division_id']=$request->input('division_id');
        $data['district_id']=$request->input('district_id');
        $data['state_id']=$request->input('state_id');
        $data['total_amount']=$amount;
        $data['discount_amount']=20;

        $data['payment_type']='stripe';
        $data['payment_method']=$charge->payment_method;
        $data['payment_status']=$charge->status;
        $data['status']=$charge->status;
        $data['transaction_id']=$charge->balance_transaction;
        $data['currency']=$charge->currency;
        $data['amount']=$charge->amount;
        $data['order_number']=$charge->metadata->order_id;
        $data['invoice_no']='FOD'.mt_rand(10000000,99999999);
        $data['order_date']=Carbon::now()->format('d F Y');
        $data['order_month']=Carbon::now()->format('d F Y');
        $data['order_year']=Carbon::now()->format('d F Y');
        $data['confirmed_date']=null;
        $data['shipped_date']=null;
        $data['delivered_date']=null;
        $data['cancel_date']=null;
        $data['return_date']=null;
        $data['return_reason']=null;
        $data['payment_details']=null;
        $data['operational_status']='pending';
        $data['processed_by']=null;

        try{
            $orderItems=[];
            $order_id=$this->order->postOrder($data);
            $menu_carts=$this->cart->getCartListByEmail($data['email']);

            foreach($menu_carts as $menu_cart){
                $orderItems['order_id']=$order_id;
                $orderItems['menu_id']=$menu_cart->menu_id;
                $orderItems['quantity']=$menu_cart->quantity;
                $orderItems['price']=$menu_cart->total_price;
                $this->order->postAllItem($orderItems);
            }

            //remove all from cartItems
            $this->cart->removeAllFromCart($data['email']);

            //send order mail
            $invoice=$this->order->findOrderbyId($order_id);
            $mailData=[
                'invoice_no'=>$invoice->invoice_no,
                'amount'=>$amount,
                'name'=>$invoice->name,
                'email'=>$invoice->email
            ];

            Mail::to($request->email)->send(new OrderMail($mailData));

            return $this->responseSuccess($charge->status,'Order place successfully',200);

        }catch(\Exception $e){
            return $this->responseError($e->getMessage(),'Order Error',401);
        }
    }//end of method

}
