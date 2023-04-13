import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/category/categorySlice";
import menuSlice from "../store/menu/menuSlice";
import checkoutSlice from "../store/checkout/checkoutSlice";
import authSlice from "../store/auth/authSlice"
import userSlice from "../store/user/userSlice";


const store=configureStore({
    reducer:{
        category:categorySlice,
        menu:menuSlice,
        checkout:checkoutSlice,
        auth:authSlice,
        user:userSlice
    }
})

export default store;
