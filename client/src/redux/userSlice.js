import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("user/login", async (user) => {
    const response = await axios.post("auth/login", user);
    return response.data;
})

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("user")) || null,
    pending: null,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogout: (state) => {
            state.userInfo = null;
            localStorage.removeItem("user");
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.pending = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        [userLogin.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
