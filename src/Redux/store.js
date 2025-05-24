import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { agencyReducer } from "./agencySlice";
import { tourismPackageReducer } from "./toursimpackageSlice";
import { hotelReducer } from "./hotelSlice";
import { campReducer } from "./campSlice";
import { hotelPackageReducer } from "./hotelpackageSlice";
import { camppackageReducer } from "./camppackageSlice";
import { adminReducer } from "./adminSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        agency: agencyReducer,
        tourismPackage: tourismPackageReducer,
        hotel:hotelReducer,
        hotelpackage:hotelPackageReducer,
        camp:campReducer,
        camppackage:camppackageReducer
    }
});

export default store;
