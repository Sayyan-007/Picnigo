import { Fragment } from "react"
import Camp from "../Pages/User/Camp/camp"
import Navbar from "../Pages/User/Navbar"
import Footter from "../Pages/User/Footter"

const UserCampPackage=()=>{
    return(
        <Fragment>
            <Navbar/>
            <Camp/>
            <Footter/>
        </Fragment>
    )
}
export default UserCampPackage