import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
export let userSlice = createSlice({
    name: "user",
    initialState: {
        token: Cookies.get("token") || "",
    },
    reducers: {
        setToken: (state, reqData) => {
            const { token } = reqData.payload; //{token:data.token}
            state.token = token;
            Cookies.set("token", state.token);
        },
        logout: (state) => {
            state.token = "";
            Cookies.remove("token");
        }
    }


})

export const { setToken, logout } = userSlice.actions;
export default userSlice.reducer;