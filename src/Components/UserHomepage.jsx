import { Fragment } from "react"
import Navbar from "../Pages/User/Navbar"
import Content from "../Pages/User/Content"
import Cards from "../Pages/User/Cards"
import Reviews from "../Pages/User/Reviews"
import ContactUs from "../Pages/User/ContactUs"
import Footter from "../Pages/User/Footter"
import { Hero } from "../Pages/User/hero"

const UserHomePage=()=>{

    return(

        <Fragment>
            <Navbar/>
            <Hero/>
            <Cards/>
            <Content/>
            <Reviews/>
            <ContactUs/>
            <Footter/>
        </Fragment>

    )
}

export default UserHomePage
