import React,{ Fragment,useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import classes from './stripe.module.css'
import CartButton from '../UI/button/cartbutton/CartButton'
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MxMYHG38ZhpEoQxxoqqWmE4cekOsunY9zR03bfLDKJvAVnjkLY003pFGO8fD6D63qfc25qrbLqupM6W16mIXQAu002MZZnw6J');



const Payment=(props)=>{
    const [paymentError,setPaymentError]=useState(null);



    const stripe=useStripe()
    const elements=useElements()
    const navigate=useNavigate()
    const dispatch=useDispatch()


    const {message}=useSelector((state)=>state.order)
    let {cartItems}=useSelector((state)=>state.cart)
    const {name,email,phone,address,post_code,division_id,district_id,state_id}=props.checkout

    const cartTotal=cartItems.reduce((sum,curr)=>sum+parseInt(curr.total_price),0)

    useEffect(() => {

    }, [props.checkout])


    async function stripeTokenHandler(token) {
        const paymentData = {token: token.id};

        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

        // console.log("[pament]",paymentData.token)

        const stripeToken=paymentData.token

        //dispatch action order
        dispatch(confirmOrder({
            stripeToken,
            user_id:id,
            name,
            email,
            phone,
            address,
            post_code,
            division_id,
            district_id,
            state_id,
            total_amount:cartTotal
        }))

        // const response = await fetch('/charge', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(paymentData),
        // });

        // Return and display the result of the charge.
        // return response.json();
    }

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make  sure to disable form submission until Stripe.js has loaded.
          return;
        }

        const card = elements.getElement(CardElement);
        console.log("[card]",card)
        const result = await stripe.createToken(card);

        console.log("[card]",result)
        if (result.error) {
          // Show error to your customer.
          console.log(result.error.message);
          setPaymentError(result.error.message);
        } else {
          // Send the token to your server.
          // This function does not exist yet; we will define it in the next step.
          stripeTokenHandler(result.token);
        }
      };


      if(message==="succeeded"){
        return navigate('/')
      }else{

        return(
            <div className={classes.form__container}>
                <form onSubmit={handleSubmit} className={classes.register__from}>
                <div className="row mb-2">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h5>Card Number</h5>
                        <CardNumberElement/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <CardCvcElement/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <CardExpiryElement/>
                    </div>
                </div>
                    <button disabled={!stripe}>Confirm order</button>
                </form>
                {
                    paymentError && (<p className='text-danger'>{paymentError}</p>)
                }
            </div>
        )
    }






}



const StripePayment = (props) => {

    useEffect(() => {

    }, [props.checkout])


  return (
    <Fragment>
        <div className={classes.checkout__container}>
                <Row>
                    <Col lg={7} md={7} sm={12}>
                        <div className={classes.form__container}>
                            <div className="form_errors">
                                <h5 className='text-center'>Order Summary</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className={classes.order__container}>
                            <div className="form_errors">
                                <h5 className='text-center'>Payment Details</h5>
                            </div>
                           <Elements stripe={stripePromise}>
                                <Payment checkout={props.checkout}/>
                           </Elements>
                        </div>
                    </Col>
                </Row>
        </div>
    </Fragment>
  )
}

export default StripePayment
