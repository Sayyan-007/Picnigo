import './Style.css'

const Cards = () => {

    return (

        <div id='letsgo'>
            <div className="container my-5">
                <div className="row">
                    <div className="my-3 fw-bold text-center">
                        <h1>Our Service</h1>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="package-card m-4">
                            <img src={"https://i.ibb.co/C3DdsG37/travel-package.jpg"} className="w-100 package-image" alt="image missing"/>
                            <h4 className="fw-bolder p-2 package-title">Travel Packages</h4>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="package-card m-4">
                            <img src={"https://i.ibb.co/SD98MrP0/hotel-booking.jpg"} className="w-100 package-image" alt="image missing"/>
                            <h4 className="fw-bolder p-2 package-title">Hotel Booking</h4>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="package-card m-4">
                            <img src={"https://i.ibb.co/WWSdrsQj/camp.jpg"} className="w-100 package-image" alt="image missing" />
                            <h4 className="fw-bolder p-2 package-title">Camping</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards 