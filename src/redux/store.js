import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./app/cartSlice";
export const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})