import { Fragment } from "react"
import Camp from "../Pages/User/Camp/camp"
import Navbar from "../Pages/User/Navbar"

const UserCampPackage=()=>{
    return(
        <Fragment>
            <Navbar/>
            <Camp/>
        </Fragment>
    )
}
export default UserCampPackage