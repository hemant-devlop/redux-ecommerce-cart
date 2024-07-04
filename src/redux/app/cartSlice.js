import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:[]
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{

        //conditionally add product to cart and increase by one 
        addToCart:(state,action)=>{
           const isData=state.count.findIndex(ele=>ele.id===action.payload.id)
            if(isData>=0){
                state.count[isData].quantity +=1;
            }else{
                state.count.push(action.payload)
            }
        },

        //remove product from cart 
        removeToCart:(state,action)=>{
            state.count=state.count.filter(item=>item.id!==action.payload)
        },

        //remove  product quantity by 1
        removeSingleCart:(state,action)=>{
            const isData=state.count.findIndex(ele=>ele.id===action.payload.id)
            if(isData>=0){
                state.count[isData].quantity -=1;
            }
        }
    }
})

export const {addToCart,removeToCart,removeSingleCart} = counterSlice.actions;
export default counterSlice.reducer;