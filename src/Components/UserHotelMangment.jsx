import { Fragment } from "react"
import Navbar from "../Pages/User/Navbar"
import Hotelmangment from "../Pages/User/Hotelmangment/Hotelmangment"
import Footter from "../Pages/User/Footter"

const UserHotelMangment=()=>{
    return(
        <Fragment>
            <Navbar/>
            <Hotelmangment/>
            <Footter/>
        </Fragment>
    )
}

export default UserHotelMangment
