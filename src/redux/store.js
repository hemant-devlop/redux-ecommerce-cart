import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./app/cartSlice";
import productSlice from "./app/productSlice";
export const store=configureStore({
    reducer:{ 
        cart:cartSlice,
        productData:productSlice
    }
})