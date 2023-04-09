import React, { useState, useEffect} from 'react'
import classes from './loginform.module.css'
import FormInput from '../../UI/forminput/FormInput'
import SubmitButton from '../../UI/button/submitbutton/SubmitButton'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [values, setValues]=useState({
        email:"",
        password:"",
    })

    const [validationErrors, setValidationErrors]=useState({})

    useEffect(() => {
        handleSubmit
    }, [])



    const inputs=[
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
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required:true
        },
    ]

    const handleInputChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    const validate=(values)=>{
        const errors={};
        const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        const passwordRegex= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


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
            return
        }else{
            const{email,password}=values

            //create an instance FormData
            const formData=new FormData()

            //send input value in the backend
            formData.append("email",email)
            formData.append("password",password)


            //change submit button value
            sendBtn.innerHTML="Submitting....."

            //console
            console.log("Form Data");
            for (let obj of formData) {
                console.log(obj);
            }

            //configure api url and axios
        }




    }




  return (
    <div className={classes.form__container}>
        <div className="form_errors">
            <h5 className='text-center'>Login</h5>
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
        >login</SubmitButton>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center mb-2">
            <Link to='/register' className='mb-2'>Do not have an account?</Link>
            <Link to='/forgetpassword' >forget password?</Link>
        </div>
    </div>
  )
}

export default LoginForm
