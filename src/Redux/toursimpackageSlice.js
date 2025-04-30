import { createSlice } from "@reduxjs/toolkit";

const tourismPackageSlice = createSlice({
  name: 'tourismPackage',
  initialState: {
    id: "",
    Destination_Name: "",
    Destination_Image: "",
    Duration: "",
    Category: "",
    Climate: "",
    Location: "",
    District: "",
    State: "",
    Country: "",
    Status: "",
    Near_Locations: "",
    Prize: "",
    Disabled: "",
    Agency_id:"",
    Agency_name:""
  },
  reducers: {
    createTourismPackage: (state, action) => {
      state.id = action.payload._id;
      state.Destination_Name = action.payload.Destination_Name;
      state.Destination_Image = action.payload.Destination_Image;
      state.Duration = action.payload.Duration;
      state.Category = action.payload.Category;
      state.Climate = action.payload.Climate;
      state.Location = action.payload.Location;
      state.District = action.payload.District;
      state.State = action.payload.State;
      state.Country = action.payload.Country;
      state.Status = action.payload.Status;
      state.Near_Locations = action.payload.Near_Locations;
      state.Prize = action.payload.Prize;
      state.Disabled = action.payload.Disabled;
      state.Agency_id = action.payload.Agency_id;
      state.Agency_name = action.payload.Agency_name
    },
    resetTourismPackage:(state)=>{
    state.id=""
    state.Destination_Name=""
    state.Destination_Image=""
    state.Duration=""
    state.Category=""
    state.Climate=""
    state.Location=""
    state.District=""
    state.State=""
    state.Country=""
    state.Status=""
    state.Near_Locations=""
    state.Prize=""
    state.Disabled=""
    state.Agency_id=""
    state.Agency_name=""
    }
  }
});

export const { createTourismPackage,resetTourismPackage } = tourismPackageSlice.actions;
export const { reducer: tourismPackageReducer } = tourismPackageSlice;
