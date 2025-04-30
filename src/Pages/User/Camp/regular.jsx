import { useEffect, useState } from "react"
import { Axios } from "../../../axios"
import Footter from "../Footter"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import HeroCamp from "./Hero"
import toast from "react-hot-toast"

const Reugular = () => {

    const { username, id: userId } = useSelector(store => store.user)

    const [data, setData] = useState([])

    const fetch = async () => {

        try {
            const { data } = await Axios.get(`user/camppackages/display`)
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
    console.log(data);

    const handlelogin = () => {
        toast.error("Login for Booking")
    }


    return (
        <div>
            <Navbar />
            <div className="pb-5" style={{ backgroundColor: "#F4F4F9" }}>
                <HeroCamp />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div>
                            <p className="text-dark fw-bold fs-3">Available Regular Camps</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {data.filter((data) => data.type === "Regular_camp" && data.Status === "accept" && data.Disabled === false).map((data) => (
                            <div key={data._id} className="col-lg-3 col-md-4 shadow mx-lg-4 mt-3 p-3 bg-transparent card">
                                <div style={{ width: "", overflow: "hidden" }} className="w-100">
                                    <img className="rounded-4 w-100" src={data.campIcon} style={{ objectFit: "cover", height: "350px", width: "100%" }} alt="" />
                                </div>
                                <div className="d-flex flex-column text-dark p-3">
                                    <div className="fw-bold fs-6">
                                        <p className="m-1">Camp Name : {data.campName}</p>
                                        <p className="m-1">Contact Number : {data.contactNumber}</p>
                                        <p className="m-1">Location : {data.location}</p>
                                        <p className="m-1">Date : {data.date}</p>
                                        <p className="m-1">Duration : {data.duration}</p>
                                    </div>
                                    <div>
                                        {userId ?
                                            <div>
                                                <Link to={`/booknowcamp/${data._id}`}><button className="opp-btn p-2 fw-bold px-3">Book Now</button></Link>
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

            <Footter />
        </div>
    )

}

export default Reugular
