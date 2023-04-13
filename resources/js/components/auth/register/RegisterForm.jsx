import cogoToast from 'cogo-toast'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpWithGoogle from '../../UI/button/sociallogin/SignUpWithGoogle'
import SubmitButton from '../../UI/button/submitbutton/SubmitButton'
import FormInput from '../../UI/forminput/FormInput'
import classes from './registerform.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../store/auth/authActions'
const RegisterForm = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {loading,user,token,error,success,message}=useSelector((state)=>state.auth)

    useEffect(() => {
        //redirect successful if user registered successful
        if(success){
            cogoToast.success(message)
            return navigate('/login')
        }
    }, [success])

    //define all states
    const [values, setValues]=useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        phone_number:""
    })

    const [validationErrors, setValidationErrors]=useState({})

    const inputs=[
        {
            id:1,
            type:"text",
            name:"name",
            placeholder:"Enter Username",
            label:"Username",
            // errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
            errorMessage:validationErrors.username,
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
            type:"password",
            name:"password",
            placeholder:"Enter Password",
            label:"Password",
            // errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            errorMessage:validationErrors.password,
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            // required:true
        },
        {
            id:4,
            type:"password",
            name:"password_confirmation",
            placeholder:"Enter Confirm Password",
            label:"Confirm Password",
            // errorMessage:"Password don't match",
            errorMessage:validationErrors.password_confirmation,
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            // required:true
        },
        {
            id:5,
            type:"text",
            name:"phone_number",
            placeholder:"Enter Phone Number",
            label:"Phone Number",
            // errorMessage:"Enter phone number",
            errorMessage:validationErrors.phone_number,
            // pattern:values.phone_number,
            // required:true
        },
    ]

    const handleInputChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    //validation rules
    const validate=(values)=>{
        const errors={};
        const nameRegex= /^[A-Za-z0-9]{3,16}$/;
        const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        const passwordRegex= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.name){
            errors.name="Username is required";
            cogoToast.warn( errors.username)
        }else if(!nameRegex.test(values.username)){
            errors.name="Username should be 3-16 characters and shouldn't include any special character"
            cogoToast.warn( errors.username)
        }
        if(!values.email){
            errors.email="Email is required";
        }else if(!emailRegex.test(values.email)){
            errors.email="It should be a valid email address";
        }

        if(!values.password){
            errors.password="Password is required";
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters";
        }else if(values.password.length > 15){
            errors.password="Password cannot exceed more than 10 characters";
        }else if(!passwordRegex.test(values.password)){
            errors.password="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character"
        }

        if(values.password_confirmation!=values.password){
            errors.password_confirmation="Password do not matched"
        }

        if(!values.phone_number){
            errors.phone_number="Phone Number is required"
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

        setValidationErrors(errors)

        if(!isObjectEmpty(errors)){
            //if any errors occur return null and do not submit the input values
            return
        }else{
            //if no errors occur then input values submit in the backend
            // const{username,email,password,password_confirmation,phone_number}=values

            //dispatch action
            dispatch(registerUser(values))


            //create an instance FormData
            // const formData=new FormData()

            //send input value in the backend
            // formData.append("name",username)
            // formData.append("email",email)
            // formData.append("password",password)
            // formData.append("password_confirmation",password_confirmation)
            // formData.append("phone_number",phone_number)

            //change submit button value
            // sendBtn.innerHTML="Submitting....."

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
                password:"",
                password_confirmation:"",
                phone_number:""
            })

            sendBtn.innerHTML="send"

        }
    }



  return (
    <div className={classes.form__container}>
        <div className="form_errors">
            <h5 className='text-center'>Register</h5>
        </div>
        <form onSubmit={handleSubmit} className={classes.register__form}>
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
        <SubmitButton
            type="submit"
            id="sendBtn"
        >Register</SubmitButton>
        </form>
        <div className="">
            <Link to='/login' >Already have an account?</Link>
        </div>
        <hr/>
        <div className={classes.social__login}>
            <SignUpWithGoogle>SIGN UP WITH GOOGLE</SignUpWithGoogle>
        </div>
    </div>
  )
}

export default RegisterForm
