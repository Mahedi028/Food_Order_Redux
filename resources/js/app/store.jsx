import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/category/categorySlice";
import menuSlice from "../store/menu/menuSlice";





const store=configureStore({
    reducer:{
        category:categorySlice,
        menu:menuSlice
    }
})

export default store;
