import { createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
import { addToCart, countCartItem, fetchCartItems,removeCartItem} from "./cartActions";

const initialState={
    cartItems:[],
    quantity:0,
    totalAmount:0,
    loading:false,
    cartLength:0,
    error:null,
    success:false,
    deleteSuccess:false,
    message:null,
    pageRefreshStatus:false
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state,action)=>{
            // {id,title,quantity,price,totalAmount}
            //get new item
            const newItem=action.payload;
            console.log("[cart]",newItem)
            const exitingItem=state.cartItems.find((item)=>item.id === newItem.id);
            console.log("exitingItem",exitingItem)
            if(!exitingItem){
                state.cartItems.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:newItem.quantity,
                    totalPrice:newItem.price,
                    title:newItem.title
                });
            }else{
                exitingItem.quantity++,
                exitingItem.totalPrice=exitingItem.totalPrice+newItem.price
            }

        },
        removeItemFromCart:(state,action)=>{
            const id=action.payload
            const exitingItem=state.cartItems.find((item)=>item.id===id)
            if(exitingItem.quantity===1){
                state.cartItems=state.cartItems.filter((cartItem)=>cartItem.id!==id)
            }else{
                exitingItem.quantity--;
                exitingItem.totalPrice=exitingItem.totalPrice-exitingItem.price
            }
        },
    },
    extraReducers:{
        [addToCart.pending]:(state,action)=>{
            state.loading=true
        },
        [addToCart.fulfilled]:(state,action)=>{
            console.log("[state]",state);
            console.log("[action]",action);
            state.loading=false,
            state.success=true,
            state.pageRefreshStatus=true
        },
        [addToCart.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [fetchCartItems.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchCartItems.fulfilled]:(state,action)=>{
            console.log("[state]",state);
            console.log("[action]",action);
            state.loading=false,
            // state.success=true,
            state.cartItems=action.payload
            // state.pageRefreshStatus=true
        },
        [fetchCartItems.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [removeCartItem.pending]:(state,action)=>{
            state.loading=true
        },
        [removeCartItem.fulfilled]:(state,action)=>{
            console.log("[state]",state);
            console.log("[action]",action);
            state.loading=false,
            state.deleteSuccess=true,
            // state.cartItems=action.payload
            state.pageRefreshStatus=true

        },
        [removeCartItem.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
        [countCartItem.pending]:(state,action)=>{
            state.loading=true
        },
        [countCartItem.fulfilled]:(state,action)=>{
            console.log("[state]",state);
            console.log("[action]",action.payload);
            state.loading=false,
            state.cartLength=parseInt(JSON.stringify(action.payload)),
            // state.cartItems=action.payload
            state.pageRefreshStatus=true

        },
        [countCartItem.rejected]:(state,action)=>{
            state.loading=true,
            state.error=action.payload
        },
    }
})

export const {addCartItem,removeItemFromCart}=cartSlice.actions

export default cartSlice.reducer
