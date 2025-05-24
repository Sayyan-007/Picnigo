import { useEffect, useState } from "react"
import { MdCurrencyRupee,MdAssignmentTurnedIn } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Axios } from "../../../axios"
import toast from "react-hot-toast"
import { FaGlobeAsia } from 'react-icons/fa'


const Hotelmangment = () => {

    const { id: userId } = useSelector(store => store.user)

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

    const handlelogin = () => {
        toast.error("Login for Booking")
    }


    return (
        <div className=''>
            <div style={{ backgroundColor: "#FEF7F4" }}>
                <div className="container py-4">
                   
                    <div className="row mt-4">
                        <h1 className='explanation-h1 fw-bold'>Available Rooms</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                            {data.filter((data) => data.Type === "Rooms" && data.Status === "accept" && data.Disabled === false).map((data) => (
                                <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{ fontFamily: "Inter, sans-serif" }}>
                                    <img className=' w-100 rounded-top-4' style={{ width: "1270px", height: "350px" }} src={data.Hotel_Image} alt="" />
                                    <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{ backgroundColor: "rgba(255, 255, 255, 0.77)" }}>
                                        <p className='text-center m-0' style={{ color: "#717171" }}>{data.Hotel_Name},{data.State}</p>
                                        <p className='text-start m-0' style={{ color: "black", fontFamily: "" }}>Mangment Name - {data.Mangment_name}</p>
                                        <hr className='mt-3' />
                                        <div className='d-flex justify-content-center mx-2'>
                                            <div>{data.Duration}</div>
                                            <div>From <MdCurrencyRupee className='mb-1' />{data.Prize}</div>
                                        </div>
                                    </div>
                                    {userId ?

                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <Link className='nav-link' to={`/booknowhotel/${data._id}`}><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </Link>
                                        </div>
                                        :
                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <button onClick={handlelogin} className='bg-transparent text-light border-0'><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </button>
                                        </div>

                                    }


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h1 className='explanation-h1 fw-bold'>Resort Packages</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                            {data.filter((data) => data.Type === "resort" && data.Status === "accept" && data.Disabled === false).map((data) => (
                                <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{ fontFamily: "Inter, sans-serif" }}>
                                    <img className=' w-100 rounded-top-4' style={{ width: "1270px", height: "350px" }} src={data.Hotel_Image} alt="" />
                                    <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{ backgroundColor: "rgba(255, 255, 255, 0.77)" }}>
                                        <p className='text-center m-0' style={{ color: "#717171" }}>{data.Hotel_Name},{data.State}</p>
                                        <p className='text-start m-0' style={{ color: "black", fontFamily: "" }}>Mangment Name - {data.Mangment_name}</p>
                                        <hr className='mt-3' />
                                        <div className='d-flex justify-content-center mx-2'>
                                            <div>{data.Duration}</div>
                                            <div>From <MdCurrencyRupee className='mb-1' />{data.Prize}</div>
                                        </div>
                                    </div>
                                    {userId ?

                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <Link className='nav-link' to={`/booknowhotel/${data._id}`}><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </Link>
                                        </div>
                                        :
                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <button onClick={handlelogin} className='bg-transparent text-light border-0'><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </button>
                                        </div>

                                    }


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h1 className='explanation-h1 fw-bold'>Dormitory Room</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                            {data.filter((data) => data.Type === "dormitory_room" && data.Status === "accept" && data.Disabled === false).map((data) => (
                                <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{ fontFamily: "Inter, sans-serif" }}>
                                    <img className=' w-100 rounded-top-4' style={{ width: "1270px", height: "350px" }} src={data.Hotel_Image} alt="" />
                                    <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{ backgroundColor: "rgba(255, 255, 255, 0.77)" }}>
                                        <p className='text-center m-0' style={{ color: "#717171" }}>{data.Hotel_Name},{data.State}</p>
                                        <p className='text-start m-0' style={{ color: "black", fontFamily: "" }}>Mangment Name - {data.Mangment_name}</p>
                                        <hr className='mt-3' />
                                        <div className='d-flex justify-content-center mx-2'>
                                            <div>{data.Duration}</div>
                                            <div>From <MdCurrencyRupee className='mb-1' />{data.Prize}</div>
                                        </div>
                                    </div>
                                    {userId ?

                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <Link className='nav-link' to={`/booknowhotel/${data._id}`}><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </Link>
                                        </div>
                                        :
                                        <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                            <button onClick={handlelogin} className='bg-transparent text-light border-0'><MdAssignmentTurnedIn className='mb-1 ' /> Book your stay </button>
                                        </div>

                                    }


                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
        // <div id='home'>
        //     <div>
        //         <div style={{ backgroundColor: "#f7f7f7" }}>
        //             <div className="container">
        //                 <div className="row align-items-center p-5">
        //                     <div className="col-lg-6">
        //                         <h1 className='explanation-h1 fw-bold'>Rooms</h1>
        //                         <p className='explanation-h5'>Experience comfort and convenience with our selection of premium and budget-friendly rooms. Whether you seek luxury with top-tier amenities or a cozy, affordable stay, we have options to suit every traveler. Enjoy spacious accommodations, modern facilities, and excellent service—all designed to enhance your journey. Book now and find the perfect stay for your adventure! </p>
        //                         <Link to={'rooms'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
        //                     </div>
        //                     <div className="col-lg-6  d-flex justify-content-center">
        //                         <img src={`https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className="rounded-3 mw-100" alt="img required" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div style={{ backgroundColor: "#fffff" }}>
        //             <div className="container">
        //                 <div className="row align-items-center p-5">
        //                     <div className="col-lg-6 d-flex justify-content-center">
        //                         <img src={`https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="img required" className="rounded-3 mw-100"/>
        //                     </div>
        //                     <div className="col-lg-6">
        //                         <h1 className='explanation-h1 fw-bold'>Resort</h1>
        //                         <p className='explanation-h5'>Escape to a serene resort in a picturesque hill station, where cool breezes and misty landscapes create the perfect retreat. Enjoy cozy rooms with stunning valley views, warm hospitality, and modern amenities. Indulge in local delicacies, bonfire nights, and nature walks or simply relax in the peaceful surroundings. Experience the charm of a perfect hillside getaway! .</p>
        //                         <Link to={'resort'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div style={{ backgroundColor: "#f7f7f7" }}>
        //             <div className="container">
        //                 <div className="row align-items-center p-5">
        //                     <div className="col-lg-6">
        //                         <h1 className='explanation-h1 fw-bold'>Dormitory Room</h1>
        //                         <p className='explanation-h5'>Our budget-friendly dormitory rooms offer a comfortable and affordable stay, perfect for solo travelers and groups. Enjoy free WiFi to stay connected, a tea maker for your convenience, and a secure lock shelf to keep your belongings safe. With cozy beds and a welcoming atmosphere, it's the ideal choice for a hassle-free and relaxing stay!.</p>
        //                         <Link to={'dormitory'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
        //                     </div>
        //                     <div className="col-lg-6  d-flex justify-content-center">
        //                         <img src={`https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="img required" className="rounded-3 mw-100"/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Hotelmangment