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


export const forgetPassword=createAsyncThunk("auth/forgetPassword",
async({
    email,
},{rejectWithValue})=>{

    //define data
    const formData=new FormData()

    formData.append("email",email)

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
        const url=AppUrl.PostForgetPassword
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



export const resetPassword=createAsyncThunk("auth/resetPassword",
async({
    email,
    token,
    password,
    password_confirmation
},{rejectWithValue})=>{

    //define data
    const formData=new FormData()

    formData.append("email",email)
    formData.append("token",token)
    formData.append("password",password)
    formData.append("password_confirmation",password_confirmation)

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
        const url=AppUrl.PostResetPassword
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

export const googleLoginRedirect=createAsyncThunk("auth/googleLoginRedirect",
async(rejectWithValue)=>{

    try{
        //define url
        const url=AppUrl.ProviderLoginRedirect("google")
        const response=await axios.get(url)

    // if(response.status===200){
        // console.log('response-cate',response.data)
        return response.data.data
    // }
    }
    catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
})
export const googleLoginCallback=createAsyncThunk("auth/googleLoginCallback",
async({callback_url},{rejectWithValue})=>{

    try{
        //define url
        const url=AppUrl.ProviderLoginCallback("google")
        const response=await axios.get(`${url}${callback_url}`)

    // if(response.status===200){
        // console.log('response-cate',response.data)
        return response.data
    // }
    }
    catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
})
