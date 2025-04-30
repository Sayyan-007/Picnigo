import { createSlice } from "@reduxjs/toolkit";

const agencySlice=createSlice({
    name:"agency",
    initialState:{
        id:"",
        Agency_Name:"",
        email:"",
        phone_Number:"",
        District:"",
        State:"",
        isBlocked:""
    },
    reducers:{
        createAgency:(state,action)=>{
            state.id=action.payload._id
            state.Agency_Name=action.payload.Agency_Name
            state.email=action.payload.email
            state.phone_Number=action.payload.phone_Number
            state.District=action.payload.District
            state.State=action.payload.State
            state.isBlocked=action.payload.isBlocked
        },
        logooutAgency:(state)=>{
            state.id=""
            state.Agency_Name=""
            state.email=""
            state.phone_Number=""
            state.District=""
            state.State=""
            state.isBlocked=""
        }
    }
})


export const {createAgency,logooutAgency} = agencySlice.actions
export const {reducer:agencyReducer} = agencySlice