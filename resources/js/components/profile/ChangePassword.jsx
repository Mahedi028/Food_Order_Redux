import React, { Fragment, useState} from 'react'
import FormInput from '../UI/forminput/FormInput'
import classes from './profile.module.css'
import SubmitButton from '../UI/button/submitbutton/SubmitButton'
import cogoToast from 'cogo-toast'
const ChangePassword = () => {


    const [values, setValues]=useState({
        password:"",
        password_confirmation:"",
    })

    const [validationErrors, setValidationErrors]=useState({})


    const inputs=[
        {
            id:1,
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
            id:2,
            type:"password",
            name:"password_confirmation",
            placeholder:"Enter Confirm Password",
            label:"Confirm Password",
            // errorMessage:"Password don't match",
            errorMessage:validationErrors.password_confirmation,
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            // required:true
        },

    ]

    const handleInputChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

     //validation rules
     const validate=(values)=>{
        const errors={};
        const passwordRegex= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

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
            const{password,password_confirmation}=values

            //create an instance FormData
            const formData=new FormData()

            //send input value in the backend

            formData.append("password",password)
            formData.append("password_confirmation",password_confirmation)


            //change submit button value
            sendBtn.innerHTML="Submitting....."

            //console
            console.log("Form Data");
            for (let obj of formData) {
                console.log(obj);
            }
            //configure api url and axios


            //reset form
            setValues({
                password:"",
                password_confirmation:"",
            })
        }
    }







  return (
    <Fragment>
    <div className={classes.edit__form}>
        <h2 className='text-center'>Change Password</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
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
        >Change Password</SubmitButton>
        </form>
    </div>
    </Fragment>
  )
}

export default ChangePassword
