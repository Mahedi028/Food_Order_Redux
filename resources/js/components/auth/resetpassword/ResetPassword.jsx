import React, {useEffect, useState} from 'react'
import classes from './resetpassword.module.css'
import FormInput from '../../UI/forminput/FormInput'
import SubmitButton from '../../UI/button/submitbutton/SubmitButton'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { resetPassword } from '../../../store/auth/authActions'
import cogoToast from 'cogo-toast'

const ResetPassword = () => {

    const navigate=useNavigate()

    const dispatch=useDispatch()

    const {message,success}=useSelector((state)=>state.auth);


    const [values, setValues]=useState({
        email:"",
        token:null,
        password:"",
        password_confirmation:"",
    })

    const [validationErrors, setValidationErrors]=useState({})

    useEffect(() => {
        handleSubmit
    }, [])



    const inputs=[
        {
            id:1,
            type:"number",
            name:"token",
            placeholder:"Enter PinCode",
            label:"PinCode",
            // errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            errorMessage:validationErrors.token,
            // pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
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
            required:true
        },
        {
            id:3,
            type:"password",
            name:"password",
            placeholder:"Enter Password",
            label:"Password",
            // errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            errorMessage:validationErrors.password,
            // pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            // required:true
        },
        {
            id:4,
            type:"password",
            name:"password_confirmation",
            placeholder:"Enter Current Password",
            label:"Confirm Password",
            // errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            errorMessage:validationErrors.password_confirmation,
            // pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            // required:true
        },

    ]

    const handleInputChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    const validate=(values)=>{
        const errors={};
        const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        const passwordRegex= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/


        if(!values.email){
            errors.email="Email is required";
        }else if(!emailRegex.test(values.email)){
            errors.email="It should be a valid email address";
        }
        if(!values.token){
            errors.token="Token is required";
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

        return errors
    }

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
             //resetform
             setValues({
                password:""
            })
            return
        }else{

            // dispatch action
            dispatch(resetPassword(values))

            // const{token,password, password_confirmation}=values

            //create an instance FormData
            // const formData=new FormData()

            //send input value in the backend
            // formData.append("token",token)
            // formData.append("password",password)
            // formData.append("password_confirmation",password_confirmation)

            //change submit button value
            sendBtn.innerHTML="Submitting....."

            //console
            // console.log("Form Data");
            // for (let obj of formData) {
            //     console.log(obj);
            // }

            //configure api url and axios

            //resetform
            setValues({
                email:"",
                token:"",
                password:"",
                password_confirmation:""
            })

            sendBtn.innerHTML="Send"

        }

    }

    if(success){
        cogoToast.success(message)
        return navigate('/login')
    }else{
        return (
            <div className={classes.form__container}>
                <div className="form_errors">
                    <h5 className='text-center'>Forget Password</h5>
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
                >Reset Password</SubmitButton>
                </form>
                <div className="d-flex flex-column justify-content-center align-items-center mb-2">
                    <Link to='/login' className='mb-2'>Already have an account?</Link>
                </div>
            </div>
          )
    }


}

export default ResetPassword
