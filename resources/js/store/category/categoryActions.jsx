import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const fetchCategory=createAsyncThunk("category/fetchCategory",async(rejectedWithValue)=>{
    try{
        //define url
    const url=AppUrl.GetCategories
    const response=await axios.get(url)

    // if(response.status===200){
        // console.log('response-cate',response.data)
        return response.data.data
    // }
    }catch(error){
        return rejectedWithValue(error)
    }
});


export const fetchMenuListByCategory=createAsyncThunk("category/fetchMenuListByCategory",async(rejectedWithValue)=>{
    try{
        //define url
        const url=AppUrl.GetMenuListByCategory
        const response=await axios.get(url)

        // if(response.status===200){
            return response.data.data
        // }

    }catch(error){
        return rejectedWithValue(error)
    }
})

