import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AppUrl from "../../api/AppUrl";


export const fetchAllDivision=createAsyncThunk("checkout/fetchAllDivision",async(rejectedWithValue)=>{
    try{
        //define url
        const url=AppUrl.getAllDivitions
        const response=await axios.get(url)

        // if(response.status===200){
            return response.data.data
        // }

    }catch(error){
        return rejectedWithValue(error)
    }
})
export const fetchAllDistricts=createAsyncThunk("checkout/fetchAllDistricts",async({division_id},rejectedWithValue)=>{
    try{
        //define url
        const url=AppUrl.DivisionWiseDistrict(division_id)
        // console.log("[district]",url)
        const response=await axios.get(url)

        // if(response.status===200){
            return response.data.data
        // }

    }catch(error){
        return rejectedWithValue(error)
    }
})
export const fetchAllStates=createAsyncThunk("checkout/fetchAllStates",async({district_id},rejectedWithValue)=>{
    try{
        //define url
        const url=AppUrl.DistrictWiseState(district_id)
        // console.log("[state]",url)

        const response=await axios.get(url)

        // if(response.status===200){
            return response.data.data
        // }

    }catch(error){
        return rejectedWithValue(error)
    }
})
