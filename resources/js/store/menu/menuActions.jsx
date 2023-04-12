import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const fetchMenus=createAsyncThunk("menu/fetchMenus",async(rejectedWithValue)=>{

    try{
        //define url
    const url=AppUrl.GetMenus
    const response=await axios.get(url)

    return response.data.data

    }catch(error){
        return rejectedWithValue(error)
    }
});

export const fetchMenu=createAsyncThunk("menu/fetchMenu",async({id},rejectedWithValue)=>{
    try{
        //define url
        const url=AppUrl.GetMenu(id)
        const response=await axios.get(url)

        return response.data.data
    }catch(error){
        return rejectedWithValue(error)
    }
})



