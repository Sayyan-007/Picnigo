import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        id:"",
        fullName:"",
        email:"",
        username:"",
        phone_Number:"",
        isBlocked:""
    },
    reducers:{
        createUser:(state,action)=>{
            state.id=action.payload._id
            state.fullName=action.payload.fullName
            state.email=action.payload.email
            state.username=action.payload.username
            state.phone_Number=action.payload.phone_Number
            state.isBlocked=action.payload.isBlocked
        },
        logoutUser:(state)=>{
            state.id=""
            state.fullName=""
            state.email=""
            state.username=""
            state.phone_Number=""
            state.isBlocked=""
        }
    }
})

export const {createUser,logoutUser} = userSlice.actions
export const {reducer:userReducer} = userSlice