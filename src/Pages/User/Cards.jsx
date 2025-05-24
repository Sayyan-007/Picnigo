import { Link } from 'react-router-dom';
import './Style.css'
import { IoAirplane } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GiCampingTent } from 'react-icons/gi';
const Cards = () => {

    return (

        <div className="container-fluid py-5" id='letsgo'>
            <h1 className=' fw-bold text-center'>Our Service</h1>
            <div className="row border p-4 mx-5 justify-content-center align-items-center text-center">
                <div className="col-lg-2  ">
                    <IoAirplane size={50} />
                </div>
                <div className="col-lg-7 ">
                    <h5 className='fw-bold'>
                        Travel package
                    </h5>
                    <h5 className="explanation-h5 pb-2 d-none d-md-block px-4 border-3 border-start border-end">
                        "At <span className='fw-bold' style={{ color: '#fbaf3f' }}>PicniGO</span>, explore, discover, and create unforgettable memories with travel packages tailored to your needs."
                    </h5>
                </div>
                <div className="col-lg-3  ">
                    <Link to={'travelpackage'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                </div>
            </div>
            <div className="row mt-3 border p-4 mx-5 justify-content-center align-items-center text-center">
                <div className="col-lg-2  ">
                    <FaRegCalendarAlt size={50} />
                </div>
                <div className="col-lg-7">
                    <h5 className='fw-bold'>
                        Hotel Booking
                    </h5>
                    <h5 className="d-none d-md-block px-4 border-3 border-start border-end explanation-h5 pb-2">
                        "Browse available rooms, pick your amenities, select dates, and book easily with <span className='fw-bold' style={{ color: '#fbaf3f' }}>PicniGO</span> — your trusted hotel partner."
                    </h5>
                </div>
                <div className="col-lg-3  ">
                    <Link to={'hotelpackage'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                </div>
            </div>
            <div className="row mt-3 border p-4 mx-5 justify-content-center align-items-center text-center">
                <div className="col-lg-2  ">
                    <GiCampingTent size={50} />
                </div>
                <div className="col-lg-7 ">
                    <h5 className='fw-bold'>
                        Camping
                    </h5>
                    <h5 className="d-none d-md-block px-4 border-3 border-start border-end explanation-h5 pb-2">
                        "At <span className='fw-bold' style={{ color: '#fbaf3f' }}>PicniGO</span>, discover exciting camping and create unforgettable memories — your next adventure starts here!"
                    </h5>
                </div>
                <div className="col-lg-3  ">
                    <Link to={'camp'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Cards 