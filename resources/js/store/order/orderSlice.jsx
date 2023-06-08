import { createSlice} from "@reduxjs/toolkit";
import { confirmOrder, OrderWithSslcommerz, getAllOrderFormUser, getOrderDetails } from "./orderActions";

const initialState={
    message:"",
    loading:false,
    error:null,
    orders:[],
    orderDetails:{},
    redirectGatewayURL:""
}
const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:{
        [confirmOrder.pending]:(state,action)=>{
            state.loading=true
        },
        [confirmOrder.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.message=action.payload
        },
        [confirmOrder.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [OrderWithSslcommerz.pending]:(state,action)=>{
            state.loading=true
        },
        [OrderWithSslcommerz.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.redirectGatewayURL=action.payload
        },
        [OrderWithSslcommerz.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [getAllOrderFormUser.pending]:(state,action)=>{
            state.loading=true
        },
        [getAllOrderFormUser.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.orders=action.payload
        },
        [getAllOrderFormUser.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [getOrderDetails.pending]:(state,action)=>{
            state.loading=true
        },
        [getOrderDetails.fulfilled]:(state,action)=>{
            console.log("[state]",state.user);
            console.log("[action]",action);
            state.loading=false,
            state.orderDetails=action.payload
        },
        [getOrderDetails.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export default orderSlice.reducer
