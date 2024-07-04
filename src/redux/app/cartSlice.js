import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:[]
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        cartInc:(state,action)=>{
            
        },
        addToCart:(state,action)=>{
                state.count=[...state.count,action.payload]
        },
        removeToCart:(state,action)=>{
            state.count=[]
        }
    }
})

export const {addToCart} = counterSlice.actions;
export default counterSlice.reducer;