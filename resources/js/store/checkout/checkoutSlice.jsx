import { createSlice} from "@reduxjs/toolkit";
import { fetchAllDistricts, fetchAllDivision, fetchAllStates } from "./checkoutActions";
const initialState={
    divisions:[],
    districts:[],
    states:[],
    loading:false,
    error:null
}
const checkoutSlice=createSlice({
    name:"checkout",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAllDivision.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchAllDivision.fulfilled]:(state,action)=>{
            state.loading=false,
            state.divisions=action.payload
        },
        [fetchAllDivision.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [fetchAllDistricts.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchAllDistricts.fulfilled]:(state,action)=>{
            state.loading=false,
            state.districts=action.payload
        },
        [fetchAllDistricts.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [fetchAllStates.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchAllStates.fulfilled]:(state,action)=>{
            state.loading=false,
            state.states=action.payload
        },
        [fetchAllStates.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export default checkoutSlice.reducer
