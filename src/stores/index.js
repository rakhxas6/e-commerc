import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart.js"



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: ,
    }
})