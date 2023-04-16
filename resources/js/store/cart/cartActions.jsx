import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const addToCart=createAsyncThunk("cart/addToCart",
async({
    id,
    email,
    quantity
},{rejectWithValue})=>{


    
    //define data
    const formData=new FormData()
    formData.append("id",id)
    formData.append("email",email)
    formData.append("quantity",quantity)
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
        const url=AppUrl.AddToCart
        console.log(url)
        const response=await axios.post(url,formData,config)

        if(response.status===200){
            console.log("[cartAction]",response.data.data)
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




export const fetchCartItems=createAsyncThunk("cart/fetchCartItems",async({email},rejectWithValue)=>{

    try{
        //define url
    const url=AppUrl.CartList(email)

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

export const removeCartItem=createAsyncThunk("cart/removeCartItem",async({id},rejectWithValue)=>{

    //define url
    const url=AppUrl.RemoveCartList(id)

    const response=await axios.get(url)

    return response.data.data
})


export const countCartItem=createAsyncThunk("cart/countCartItem",async({email},rejectWithValue)=>{

    //define url
    const url=AppUrl.CartCount(email)

    const response=await axios.get(url)

    return response.data.data
})
