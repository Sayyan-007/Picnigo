import { Fragment } from "react"
import Homepage from "../Pages/Agency/TourismPackages/Homepage"
import Navbar from "../Pages/Agency/TourismPackages/Navbar"
import Footter from "../Pages/User/Footter"

const AgencyHomePage=()=>{
    return(
        <Fragment>
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Footter></Footter>
        </Fragment>
    )
}

export default AgencyHomePage