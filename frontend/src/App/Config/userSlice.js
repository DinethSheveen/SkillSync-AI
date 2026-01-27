import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthInit : false,
    isAuthenticated : false,
    token : null,
    user : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        login : (state,action)=>{
            state.isAuthInit = true
            state.isAuthenticated = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout : (state)=>{
            state.isAuthInit = false
            state.isAuthenticated = false
            state.token = null
            state.user = null 
        },
        setUser : (state,action)=>{
            state.user = action.payload
        },
        initAuth : (state)=>{
            state.isAuthInit = true
        }
    }
})


export const {login,logout,setUser,initAuth} = userSlice.actions
export default userSlice.reducer