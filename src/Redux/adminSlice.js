import {createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name:'admin',
    initialState:{
        id:"",
        adminname:""
    },
    reducers:{
        createAdmin:(state,action)=>{
            state.id=action.payload._id
            state.adminname=action.payload.adminname
        },
        logoutAdmin:(state)=>{
            state.id=""
            state.adminname=""
        }
    }
})

export const {createAdmin,logoutAdmin} = adminSlice.actions
export const {reducer:adminReducer} = adminSlice