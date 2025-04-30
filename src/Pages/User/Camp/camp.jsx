import { Link } from "react-router-dom"

const Camp=()=>{
    return(
        <div className=''>
            <div style={{ backgroundColor: "#f7f7f7" }} className=''>
                <div className="container">
                    <div className="row align-items-center p-5">
                        <div className="col-lg-6">
                            <h1 className='explanation-h1 fw-bold'>Strangers Camp</h1>
                            <p className='explanation-h5'>Discover the thrill of the Strangers Camp Package—a unique camping experience for adventurous souls seeking new friendships and unforgettable memories. Connect with like-minded, inspiring fellow travelers under starlit skies, share engaging stories around crackling campfires, and boldly embrace adventure. Experience breathtaking nature’s wonders while building bonds that last a lifetime.</p>
                            <Link to={'stranger'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                        </div>
                        <div className="col-lg-6  d-flex justify-content-center">
                            <img src="stangerscamp.jpg" alt="img required"  className="rounded-3 mw-100"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ backgroundColor: "#fffff" }}>
                <div className="container">
                    <div className="row align-items-center p-5">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src="regularcamp.jpg" alt="img required"  className="rounded-3 mw-100"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className='explanation-h1 fw-bold'>Regular Camp</h1>
                            <p className='explanation-h5'>Experience the timeless charm of our Regular Camp Package, where you reconnect with nature in its purest form. Enjoy serene landscapes, comfortable camp amenities, and a peaceful environment perfect for relaxation. Unwind by the campfire, explore scenic trails, and create lasting memories with friends in a tranquil setting. Savor nature.</p>
                            <Link to={'regular'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Camp