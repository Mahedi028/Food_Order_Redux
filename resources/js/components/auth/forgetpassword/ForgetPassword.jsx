import React, { useState, useEffect} from 'react'
import classes from './forgetpassword.module.css'
import FormInput from '../../UI/forminput/FormInput'
import SubmitButton from '../../UI/button/submitbutton/SubmitButton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../../store/auth/authActions'

const ForgetPassword = () => {

    const dispatch=useDispatch()



    const [values, setValues]=useState({
        email:"",
    })

    const [validationErrors, setValidationErrors]=useState({})

    useEffect(() => {
        handleSubmit
    }, [])



    const inputs=[
        {
            id:1,
            type:"email",
            name:"email",
            placeholder:"Enter Email",
            label:"Email",
            // errorMessage:"It should be a valid email address",
            errorMessage:validationErrors.email,
            pattern:"/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i",
            required:true
        },

    ]

    const handleInputChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    const validate=(values)=>{
        const errors={};
        const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if(!values.email){
            errors.email="Email is required";
        }else if(!emailRegex.test(values.email)){
            errors.email="It should be a valid email address";
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

            // dispatch action
            dispatch(forgetPassword(values))

            // const{email}=values

            //create an instance FormData
            // const formData=new FormData()

            //send input value in the backend
            // formData.append("email",email)

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

            })

            sendBtn.innerHTML="Send"
        }




    }




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
        >Forget Password</SubmitButton>
        </form>
        <div className="d-flex flex-column justify-content-center align-items-center mb-2">
            <Link to='/login' className='mb-2'>Already have an account?</Link>
        </div>
    </div>
  )
}

export default ForgetPassword

