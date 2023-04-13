import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const fetchUser=createAsyncThunk("user/fetchUser",async(rejectedWithValue)=>{

    try{

        //define url
    const url=AppUrl.LoginUserData

    const response=await axios.get(url)

    console.log('user',response.data.data)

    if(response.status===200){
        return response.data.data;
    }

    }catch(error){
        return rejectedWithValue(error)
    }
});
