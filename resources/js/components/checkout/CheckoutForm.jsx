import React, { Fragment, useState, useEffect} from 'react'
import classes from './checkout.module.css'
import {Col, Row} from 'react-bootstrap'
import FormInput from '../UI/forminput/FormInput'
import SubmitButton from '../UI/button/submitbutton/SubmitButton'
import FormSelect, { SelectOptions } from '../UI/formselect/FormSelect'
import FormTextArea from '../UI/textarea/FormTextArea'
import CartButton from '../UI/button/cartbutton/CartButton'
import CartItem from '../cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import bkash from '../../assets/payment/bkash.png'
import stripe from '../../assets/payment/stripe.png'
import paypal from '../../assets/payment/paypal.svg'
import sslcommerz from '../../assets/payment/SSLCOMMERZ.png'
import { fetchAllDistricts, fetchAllDivision, fetchAllStates } from '../../store/checkout/checkoutActions'
const CheckoutForm = () => {

    //define all states
    const [values, setValues]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        post_code:"",
        division_id:1,
        district_id:1,
        state_id:1,
        payment_method:""
    })

    const [validationErrors, setValidationErrors]=useState({})

    const inputs=[
        {
            id:1,
            type:"text",
            name:"name",
            placeholder:"Enter your name",
            label:"Name",
            // errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
            errorMessage:validationErrors.name,
            pattern:"^[A-Za-z0-9]{3,16}$",
            // required:true
        },
        {
            id:2,
            type:"email",
            name:"email",
            placeholder:"Enter Email",
            label:"Email",
            // errorMessage:"It should be a valid email address",
            errorMessage:validationErrors.email,
            pattern:"/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i",
            // required:true
        },
        {
            id:3,
            type:"text",
            name:"phone",
            placeholder:"Enter Phone Number",
            label:"Phone Number",
            // errorMessage:"Enter phone number",
            errorMessage:validationErrors.phone,
            // pattern:values.phone_number,
            // required:true
        },
        {
            id:4,
            type:"text",
            name:"post_code",
            placeholder:"Enter PostCode",
            label:"Post Code",
            // errorMessage:"Enter phone number",
            errorMessage:validationErrors.post_code,
            // pattern:values.phone_number,
            // required:true
        },
    ]


    const districts=useSelector((state)=>state.checkout.districts)
    const states=useSelector((state)=>state.checkout.states)
    const divisions=useSelector((state)=>state.checkout.divisions)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    useEffect(() => {
        dispatch(fetchAllDivision())
        dispatch(fetchAllDistricts({division_id:values.division_id}))
        dispatch(fetchAllStates({district_id:values.district_id}))
    }, [values.division_id,values.district_id])


    const handleInputChange=(e,option)=>{

        setValues({...values, [e.target.name]:e.target.value, payment_method:option})
    }

    const options=[
        {
            name:"bkash",
            src:bkash
        },
        {
            name:"stripe",
            src:stripe
        },
        {
            name:"paypal",
            src:paypal
        },
        {
            name:"sslcommerz",
            src:sslcommerz
        },
    ]

    const onSelect=(option)=>{
        setValues({...values,payment_method:option});
    }


    const paymentOptionView=options?.map((option,i)=>{
        const {name,src}=option
        return  <div key={i.toString()} className="col-lg-4 col-md-4 col-sm-12 d-flex flex-row flex-wrap justify-content-center align-items-center">
                    <img
                        src={src}
                        className={classes.payment__image}
                    />
                    <input
                        type='radio'
                        name='payment_method'
                        className='form-check-input'
                        value={name}
                        checked={values.payment_method===name?values.payment_method:''}
                        onChange={()=>onSelect(name)}
                    />
                </div>
    })



    //validation rules
    const validate=(values)=>{
        const errors={};
        const usernameRegex= /^[A-Za-z0-9]{3,16}$/;
        const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if(!values.name){
            errors.name="Username is required";
        }else if(!usernameRegex.test(values.username)){
            errors.name="Username should be 3-16 characters and shouldn't include any special character"
        }
        if(!values.email){
            errors.email="Email is required";
        }else if(!emailRegex.test(values.email)){
            errors.email="It should be a valid email address";
        }

        if(!values.phone){
            errors.phone="Phone Number is required"
        }
        if(!values.address){
            errors.address="Address is required"
        }
        if(!values.post_code){
            errors.post_code="Post Code is required"
        }

        if(!values.division_id){
            errors.division="Division is required"
        }

        if(!values.district_id){
            errors.district="District is required"
        }
        if(!values.payment_method){
            errors.payment_method="Payment Method is required"
        }

        return errors
    }

    //check empty validationError objects
    const isObjectEmpty = (objectName) => {
        return (
          objectName &&
          Object.keys(objectName).length === 0 &&
          objectName.constructor === Object
        );

    };


    const handleSubmit=(event)=>{
        event.preventDefault()

        let sendBtn=document.getElementById("sendBtn")

        //client-side validation
        const errors=validate(values)

        console.log("[errors]",errors)

        setValidationErrors(errors)

        if(!isObjectEmpty(errors)){
            //if any errors occur return null and do not submit the input values
            return
        }else{
            //if no errors occur then input values submit in the backend
            const{payment_method}=values

            if(payment_method==="stripe"){
                return navigate('/payment/stripe',{
                    state:{
                        checkout:values
                    }
                    }
                )
            }else if(payment_method==="sslcommerz"){
                return navigate('/payment/sslcommerz',{
                    state:{
                        checkout:values
                    }
                    }
                )
            }

            //create an instance FormData
            // const formData=new FormData()

            //send input value in the backend
            // formData.append("name",name)
            // formData.append("email",email)
            // formData.append("phone",phone)
            // formData.append("address",address)
            // formData.append("post_code",post_code)
            // formData.append("division_id",division_id)
            // formData.append("district_id",district_id)
            // formData.append("state_id",state_id)
            // formData.append("payment_method",payment_method)

            //change submit button value
            sendBtn.innerHTML="Submitting.....";

            //console
            // console.log("Form Data");
            // for (let obj of formData) {
            //     console.log(obj);
            // }
            //configure api url and axios


            //reset form
            setValues({
                name:"",
                email:"",
                phone_number:"",
                address:"",
                post_code:"",

            })
        }

    }



  return (
    <Fragment>
        <Row>
            <h2 className={classes.checkout__hero__title}>CHECKOUT</h2>
            <p className={classes.checkout__hero__description}>START YOUR ORDER AND STAY WITH US</p>
        </Row>
        <div className={classes.checkout__container}>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={7} md={7} sm={12}>
                        <div className={classes.form__container}>
                            <div className="form_errors">
                                <h5 className='text-center'>Billing Address</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                {
                                inputs.map((input)=>{
                                    return <FormInput
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                className="mb-2"
                                                onChange={handleInputChange}
                                            />
                                })
                                }
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                <FormTextArea
                                    label="Address"
                                    name='address'
                                    value={values.address}
                                    className='mb-1'
                                    rows={3}
                                    placeholder="Enter Address"
                                    onChange={handleInputChange}
                                    errorMessage={validationErrors.address}
                                />
                                <FormSelect
                                    name="division_id"
                                    label="Division"
                                    className='mb-1'
                                    onChange={handleInputChange}
                                    errorMessage={validationErrors.division}
                                    >

                                {
                                    divisions.map((division)=>{
                                        return <SelectOptions value={division.id} option_name={division.name}/>
                                    })
                                }
                                </FormSelect>
                                <FormSelect
                                    name="district_id"
                                    label="District"
                                    className='mb-1'
                                    onChange={handleInputChange}
                                    errorMessage={validationErrors.district}
                                >
                                    {
                                        districts.map((district)=>{
                                            return <SelectOptions value={district.id} option_name={district.name}/>
                                        })
                                    }
                                </FormSelect>
                                <FormSelect
                                    name="state_id"
                                    label="State"
                                    className='mb-1'
                                    onChange={handleInputChange}
                                    errorMessage={validationErrors.district}
                                >
                                    {
                                        states.map((state)=>{
                                            return <SelectOptions value={state.id} option_name={state.name}/>
                                        })
                                    }
                                </FormSelect>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <div className={classes.order__container}>
                            <Row className='mb-1'>

                            </Row>
                            <Row className='d-flex justify-content-between align-content-center mb-1'>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>Cart Totals</h4>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>$900</h4>
                                </Col>
                            </Row>
                            <hr/>
                            <h2>Choose Payment Method</h2>
                            <Row className='p-1'>
                                {/* <Col lg={4} md={4} sm={12} className='d-flex flex-column justify-content-between'> */}
                                   {paymentOptionView}
                                   <div className='text-danger'><p>{validationErrors.payment_method}</p></div>
                                {/* </Col> */}
                            </Row>
                            <Row>
                                <CartButton
                                    id='sendBtn'
                                    type='submit'
                                >Place Order</CartButton>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
    </Fragment>
  )
}

export default CheckoutForm
