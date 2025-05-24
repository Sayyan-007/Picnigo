import { Fragment } from "react"
import TravelPackage from "../Pages/User/Travelpackage/TravelPackage"
import Navbar from "../Pages/User/Navbar"
import Footter from "../Pages/User/Footter"

const UserTravelPackage=()=>{
    return(
        <Fragment>
            <Navbar/>
            <TravelPackage/>
            <Footter/>
        </Fragment>
    )
}

export default UserTravelPackage
