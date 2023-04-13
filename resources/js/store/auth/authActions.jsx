import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";



// initialize userToken from local storage
const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null


export const registerUser=createAsyncThunk("auth/register",
async({
    name,
    email,
    password,
    password_confirmation,
    phone_number
},{rejectWithValue})=>{

    //define data
    const formData=new FormData()
    formData.append("name",name)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("password_confirmation",password_confirmation)
    formData.append("phone_number",phone_number)

    //console
    console.log("Form Data");
    for (let obj of formData) {
        console.log(obj);
    }
    //define config
    const config={
        // Headers:{'Content-type':'multipart/form-data'}
        Headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }
    try{
        //define url
        const url=AppUrl.PostRegister
        console.log(url)
        const response=await axios.post(url,formData,config)

        if(response.status===200){
            return response.data
        }
        

    }catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
})

export const loginUser=createAsyncThunk("auth/login",
async({
    email,
    password,
},{rejectWithValue})=>{

    //define data
    const formData=new FormData()
    formData.append("email",email)
    formData.append("password",password)

    //console
    console.log("Form Data");
    for (let obj of formData) {
        console.log(obj);
    }
    //define config
    const config={
        // Headers:{'Content-type':'multipart/form-data'}
        Headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }
    try{
        //define url
        const url=AppUrl.PostLogin
        console.log(url)
        const response=await axios.post(url,formData,config)

        if(response.status===200){
            // store user's token in local storage
            localStorage.setItem('token', response.data.token)
            return response.data
        }

    }catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
})
