import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/category/categorySlice";





const store=configureStore({
    reducer:{
        category:categorySlice,
    }
})

export default store;
