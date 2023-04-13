import React, { Fragment, useState, useEffect} from 'react'
import FormInput from '../UI/forminput/FormInput'
import classes from './profile.module.css'
import SubmitButton from '../UI/button/submitbutton/SubmitButton'
import cogoToast from 'cogo-toast'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUser } from '../../store/user/userActions'
const ProfileEdit = (props) => {

    const user=useSelector((state)=>state.user.userData || {})

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])



    const [values, setValues]=useState({
        username:"",
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

        if(!values.name){
            errors.name="Username is required";
            cogoToast.warn( errors.name)
        }else if(!nameRegex.test(values.name)){
            errors.name="Username should be 3-16 characters and shouldn't include any special character"
            cogoToast.warn( errors.name)
        }
        if(!values.email){
            errors.email="Email is required";
        }else if(!emailRegex.test(values.email)){
            errors.email="It should be a valid email address";
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
            const{username,email,phone_number}=values

            //create an instance FormData
            const formData=new FormData()

            //send input value in the backend
            formData.append("name",username)
            formData.append("email",email)
            formData.append("phone_number",phone_number)

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
                username:"",
                email:"",
                phone_number:""
            })
        }
    }




  return (
    <Fragment>
    <div className={classes.edit__form}>
        <h2 className='text-center'>Profile Edit</h2>
        <form onSubmit={handleSubmit}>
        {
            inputs.map((input)=>{
                return <FormInput
                            key={input.id}
                            {...input}
                            value={user?user[input.name]:values[input.name]}
                            className="mb-2"
                            onChange={handleInputChange}
                        />
            })
        }
        <SubmitButton
            type="submit"
            id="sendBtn"
        >Edit</SubmitButton>
        </form>
    </div>
    </Fragment>
  )
}

export default ProfileEdit
