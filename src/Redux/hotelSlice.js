import { createSlice } from "@reduxjs/toolkit";

const hotelSlice=createSlice({
    name:"hotel",
    initialState:{
        id:"",
        username:"",
        email:"",
        phone_Number:"",
        isBlocked:""
    },
    reducers:{
        createHotel:(state,action)=>{
            state.id=action.payload._id
            state.username=action.payload.username
            state.email=action.payload.email
            state.phone_Number=action.payload.phone_Number
            state.isBlocked=action.payload.isBlocked
        },
        logooutHotel:(state)=>{
            state.id=""
            state.username=""
            state.email=""
            state.phone_Number=""
            state.isBlocked=""
        }
    }
})


export const {createHotel,logooutHotel} = hotelSlice.actions
export const {reducer:hotelReducer} = hotelSlice