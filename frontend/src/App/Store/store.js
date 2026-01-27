import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../Config/userSlice"

export const store = configureStore({
    reducer : {
        user : userReducer
    }
})