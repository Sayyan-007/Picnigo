import { createSlice } from "@reduxjs/toolkit";

const hotelPackageSlice = createSlice({
  name: 'hotelPackage',
  initialState: {
    id: "",
    Hotel_Name: "",
    Hotel_Image: "",
    Duration: "",
    Contact_Number: "",
    Type: "",
    Location: "",
    District: "",
    State: "",
    Status: "",
    Prize: "",
    Disabled: "",
    Mangment_id:"",
    Mangment_name:""
  },
  reducers: {
    createhotelPackage: (state, action) => {
      state.id = action.payload._id;
      state.Hotel_Name = action.payload.Hotel_Name;
      state.Hotel_Image = action.payload.Hotel_Image;
      state.Duration = action.payload.Duration;
      state.Contact_Number = action.payload.Contact_Number;
      state.Type = action.payload.Type;
      state.Location = action.payload.Location;
      state.District = action.payload.District;
      state.State = action.payload.State;
      state.Status = action.payload.Status;
      state.Prize = action.payload.Prize;
      state.Disabled = action.payload.Disabled;
      state.Mangment_id = action.payload.Mangment_id;
      state.Mangment_name = action.payload.Mangment_name
    },
    resethotelPackage:(state)=>{
    state.id=""
    state.Hotel_Name=""
    state.Hotel_Image=""
    state.Duration=""
    state.Contact_Number=""
    state.Type=""
    state.Location=""
    state.District=""
    state.State=""
    state.Status=""
    state.Prize=""
    state.Disabled=""
    state.Mangment_id=""
    state.Mangment_name=""
    }
  }
});

export const { createhotelPackage,resethotelPackage } = hotelPackageSlice.actions;
export const { reducer: hotelPackageReducer } = hotelPackageSlice;
