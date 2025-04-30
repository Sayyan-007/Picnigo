import { createSlice } from "@reduxjs/toolkit";

const campSlice=createSlice({
    name:"camp",
    initialState:{
        id:"",
        username:"",
        email:"",
        phone_Number:"",
        isBlocked:""
    },
    reducers:{
        createcamp:(state,action)=>{
            state.id=action.payload._id
            state.username=action.payload.username
            state.email=action.payload.email
            state.phone_Number=action.payload.phone_Number
            state.isBlocked=action.payload.isBlocked
        },
        logooutcamp:(state)=>{
            state.id=""
            state.username=""
            state.email=""
            state.phone_Number=""
            state.isBlocked=""
        }
    }
})


export const {createcamp,logooutcamp} = campSlice.actions
export const {reducer:campReducer} = campSlice