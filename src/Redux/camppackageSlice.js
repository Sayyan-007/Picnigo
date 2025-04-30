import { createSlice } from "@reduxjs/toolkit";

const camppackageSlice = createSlice({
  name: 'camppackage',
  initialState: {
    id: "",
    campName: "",
    campIcon: "",
    location: "",
    contactNumber: "",
    date: "",
    duration: "",
    type: "",
    Status: "",
    Prize: "",
    Disabled: "",
    organization_id:"",
    organization_name:""
  },
  reducers: {
    createcamppackage: (state, action) => {
      state.id = action.payload._id;
      state.campName = action.payload.campName;
      state.campIcon = action.payload.campIcon;
      state.location = action.payload.location;
      state.contactNumber = action.payload.contactNumber;
      state.date = action.payload.date;
      state.duration = action.payload.duration;
      state.type = action.payload.type;
      state.Status = action.payload.Status;
      state.Prize = action.payload.Prize;
      state.Disabled = action.payload.Disabled;
      state.organization_id = action.payload.organization_id;
      state.organization_name = action.payload.organization_name
    },
    resetcamppackage:(state)=>{
    state.id=""
    state.campName=""
    state.campIcon=""
    state.location=""
    state.contactNumber=""
    state.date=""
    state.duration=""
    state.State=""
    state.Status=""
    state.Prize=""
    state.Disabled=""
    state.organization_id=""
    state.organization_name=""
    }
  }
});

export const { createcamppackage,resetcamppackage } = camppackageSlice.actions;
export const { reducer: camppackageReducer } = camppackageSlice;
