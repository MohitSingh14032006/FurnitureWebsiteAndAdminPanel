"use client"
import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  if (typeof window === "undefined") return [];

  try {
    const storedCart = window.localStorage.getItem("Cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const mycart = createSlice({
  name: "cart",
  initialState: {
    cart: getInitialCart(),
  },
  reducers: {
    addToCart: (state, reqData) => {
      const { cartObj } = reqData.payload;
      state.cart = [cartObj, ...state.cart];
      if (typeof window !== "undefined") {
        window.localStorage.setItem("Cart", JSON.stringify(state.cart));
      }
    },
    deleteCart: (state, reqData) => {
      const { id } = reqData.payload;
      state.cart = state.cart.filter((obj) => obj.id !== id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("Cart", JSON.stringify(state.cart));
      }
    },
    changeQty: (state, reqData) => {
      const { id, finalQty } = reqData.payload;
      state.cart = state.cart.map((obj) => {
        if (obj.id === id) {
          return { ...obj, quantity: finalQty };
        }
        return obj;
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("Cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const { addToCart, deleteCart, changeQty } = mycart.actions;
export default mycart.reducer;