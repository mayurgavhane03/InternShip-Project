import { configureStore } from "@reduxjs/toolkit";
//reduces are use to update the things 
import cartSlice from "./slices/cartSlice";
import userslice from "./slices/userslice";


const store =  configureStore(
    {
        reducer: {
            cart: cartSlice,
            user :  userslice,
        }
    }
)

export default store;
