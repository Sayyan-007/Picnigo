

import { useEffect, useState } from "react"
import { Axios } from "../../../axios"
import Navbar from "../Navbar"
import Footter from "../Footter"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import HeroHotel from "./hero"

const Dormitory = () => {


    const { username, id: userId } = useSelector(store => store.user)

    const [data, setData] = useState([])

    const fetch = async () => {

        try {
            const { data } = await Axios.get(`user/hotelpackages/display`)
            console.log(data.displayedData);
            setData(data.displayedData)
        }
        catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        fetch()

    }, [])

    const handlelogin=()=>{
        toast.error("Login for Booking")
    }

    return (
        <div>
            <Navbar/>
            <div className="pb-5" style={{backgroundColor:"#F4F4F9"}}>
            <HeroHotel/>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div>
                            <p className="text-dark fw-bold fs-3">Available Dormitory Rooms</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                            {data.filter((data)=>data.Type === "dormitory_room" && data.Status === "accept" && data.Disabled === false).map((data)=>(
                            <div key={data._id} className="col-lg-3 col-md-4 shadow mx-lg-4 mt-3 p-3 bg-transparent card">
                                <div  style={{ width: "", overflow: "hidden" }} className="w-100">
                                   <img className="rounded-4 w-100" src={data.Hotel_Image} style={{ objectFit: "cover" ,height:"350px",width:"100%"}} alt="" />
                                </div>
                                <div className="d-flex flex-column text-dark p-3">
                                    <div className="fw-bold fs-6">
                                        <p className="m-1">Hotel Name : <span className="fw-light">{data.Hotel_Name}</span></p>
                                        <p className="m-1">Contact Number : <span className="fw-light">{data.Contact_Number}</span></p>
                                        <p className="m-1">Location : <span className="fw-light">{data.Location}</span></p> 
                                        <p className="m-1">Amount : <span className="fw-light">{data.Prize}</span></p>
                                    </div>
                                    <div>
                                        {userId ?
                                         <div>
                                            <Link to={`/booknowhotel/${data._id}`}><button className="btn btn-success">Book Now</button></Link>
                                         </div>
                                        : 
                                        <div>
                                            <button className="opp-btn p-2 fw-bold px-3" onClick={handlelogin}>Book Now</button>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        ))}</div>
                </div>

            </div>
            
            <Footter/>
        </div>
    )

}

export default Dormitory