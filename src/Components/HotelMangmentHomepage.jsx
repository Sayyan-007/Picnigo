import { Fragment } from "react"
import Homepage from "../Pages/Agency/HotelMangment/Homapage"
import Navbar from "../Pages/Agency/HotelMangment/Navbar"
import Footter from "../Pages/User/Footter"

const HotelMangmentHomepage = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <Homepage/>
            <Footter/>
        </Fragment>
    )
}

export default HotelMangmentHomepage