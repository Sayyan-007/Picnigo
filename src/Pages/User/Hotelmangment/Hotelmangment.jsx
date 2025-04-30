import { Link } from "react-router-dom"


const Hotelmangment = () => {
    return (
        <div>
            <div>
                <div style={{ backgroundColor: "#f7f7f7" }}>
                    <div className="container">
                        <div className="row align-items-center p-5">
                            <div className="col-lg-6">
                                <h1 className='explanation-h1 fw-bold'>Rooms</h1>
                                <p className='explanation-h5'>Experience comfort and convenience with our selection of premium and budget-friendly rooms. Whether you seek luxury with top-tier amenities or a cozy, affordable stay, we have options to suit every traveler. Enjoy spacious accommodations, modern facilities, and excellent service—all designed to enhance your journey. Book now and find the perfect stay for your adventure! </p>
                                <Link to={'rooms'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                            </div>
                            <div className="col-lg-6  d-flex justify-content-center">
                                <img src="roooms.jpg" className="rounded-3 mw-100" alt="img required" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#fffff" }}>
                    <div className="container">
                        <div className="row align-items-center p-5">
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src="resortss.jpg" alt="img required" className="rounded-3 mw-100"/>
                            </div>
                            <div className="col-lg-6">
                                <h1 className='explanation-h1 fw-bold'>Resort</h1>
                                <p className='explanation-h5'>Escape to a serene resort in a picturesque hill station, where cool breezes and misty landscapes create the perfect retreat. Enjoy cozy rooms with stunning valley views, warm hospitality, and modern amenities. Indulge in local delicacies, bonfire nights, and nature walks or simply relax in the peaceful surroundings. Experience the charm of a perfect hillside getaway! .</p>
                                <Link to={'resort'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#f7f7f7" }}>
                    <div className="container">
                        <div className="row align-items-center p-5">
                            <div className="col-lg-6">
                                <h1 className='explanation-h1 fw-bold'>Dormitory Room</h1>
                                <p className='explanation-h5'>Our budget-friendly dormitory rooms offer a comfortable and affordable stay, perfect for solo travelers and groups. Enjoy free WiFi to stay connected, a tea maker for your convenience, and a secure lock shelf to keep your belongings safe. With cozy beds and a welcoming atmosphere, it's the ideal choice for a hassle-free and relaxing stay!.</p>
                                <Link to={'dormitory'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                            </div>
                            <div className="col-lg-6  d-flex justify-content-center">
                                <img src="dormitory rooms.jpg" alt="img required" className="rounded-3 mw-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotelmangment