import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    try {
        const response=await axios.get('http://localhost:8080/products')
        return response.data
   } catch (error) {
    throw Error(error.response?.data?.message || error.message);
   }
});

const initialState={
    products:[],
    loading:false,
    error:null
};

export const productSlice=createSlice({
    name:'productData',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading=false;
        })
    }
})

export default productSlice.reducer;