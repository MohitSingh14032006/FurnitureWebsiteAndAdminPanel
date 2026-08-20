"use client"
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import wishlistSlice from './wishlistSlice'


export let store = configureStore(
    {
        reducer:{
            cartStore: cartSlice,
            wishlistStore: wishlistSlice
        }
    }
)