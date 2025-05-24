import { createSlice } from "@reduxjs/toolkit";

const contactusSlice=createSlice({
    name:"contactus",
    initialState:{
        id:"",
        username:"",
        email:"",
        number:"",
        message:""
    },
    reducers:{
        createmessgae:(state,action)=>{
            state.id=action.payload._id
            state.email=action.payload.email
            state.username=action.payload.username
            state.number=action.payload.number
            state.message=action.payload.message
        },
        resetmessage:(state)=>{
            state.id=""
            state.email=""
            state.username=""
            state.number=""
            state.message=""
        }
    }
})


export const {createmessgae,resetmessage} = contactusSlice.actions
export const {reducer:messageReducer} = contactusSlice