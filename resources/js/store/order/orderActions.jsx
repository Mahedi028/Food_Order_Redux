import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const confirmOrder=createAsyncThunk("order/confirmOrder",
async({
    stripeToken,
    user_id,
    name,
    email,
    phone,
    address,
    post_code,
    division_id,
    district_id,
    state_id,
    total_amount,
},{rejectWithValue})=>{
    //define data
    const formData=new FormData()
    formData.append("stripeToken",stripeToken)
    formData.append("user_id",user_id)
    formData.append("name",name)
    formData.append("email",email)
    formData.append("phone",phone)
    formData.append("address",address)
    formData.append("postal_code",post_code)
    formData.append("division_id",division_id)
    formData.append("district_id",district_id)
    formData.append("state_id",state_id)
    formData.append("total_amount",total_amount)
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
        const url=AppUrl.confirmOrder
        console.log(url)
        const response=await axios.post(url,formData,config)

        if(response.status===200){
            console.log("[order]",response.data)
            return response.data.data
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

export const OrderWithSslcommerz=createAsyncThunk("order/OrderWithSslcommerz",
async({
    user_id,
    name,
    email,
    phone,
    address,
    post_code,
    division_id,
    district_id,
    state_id,
    total_amount,
},{rejectWithValue})=>{
    //define data
    const formData=new FormData()
    formData.append("user_id",user_id)
    formData.append("name",name)
    formData.append("email",email)
    formData.append("phone",phone)
    formData.append("address",address)
    formData.append("postal_code",post_code)
    formData.append("division_id",division_id)
    formData.append("district_id",district_id)
    formData.append("state_id",state_id)
    formData.append("total_amount",total_amount)
    //console
    console.log("Form Data");
    for (let obj of formData) {
        console.log(obj);
    }
    //define config
    const config={
        // Headers:{'Content-type':'multipart/form-data'}
        Headers:{
            // 'Content-type':'multipart/form-data',
            // "Content-Type": "application/octet-stream",
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }
    try{
        //define url
        const url=AppUrl.OrderWithSslCommerz
        console.log("redirectURL",url)
        const response=await axios.post(url,formData,config)

        if(response.status===200){
            console.log("[order]",response.data)
            return response.data.data
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


export const getAllOrderFormUser=createAsyncThunk("order/getAllOrderFormUser",async({id},rejectWithValue)=>{

    try{
        //define url
    const url=AppUrl.GetAllOrderFromUser(id)
    console.log("[url]",url)

    const response=await axios.get(url)

    // if(response.status===200){
        return response.data.data
    // }
    }catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }

})

export const getOrderDetails=createAsyncThunk("order/getOrderDetails",async({order_id},rejectWithValue)=>{

    try{
        //define url
    const url=AppUrl.OrderDetails(order_id)
    console.log("[url]",url)

    const response=await axios.get(url)


    // if(response.status===200){
        console.log("[order-response]",response.data)
        return response.data
    // }
    }catch(error){
        // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }

})



