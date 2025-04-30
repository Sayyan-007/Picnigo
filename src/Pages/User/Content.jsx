import { Link } from 'react-router-dom'
import './Style.css'

const Content = () => {

    return (

        <div id='explanation'>
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-6 explanation-card">
                        <img src="travelpackage01.webp" style={{ width: "100%", height: "350px" }} className="explanation-img mw-100" alt="" />
                    </div>
                    <div className="col-lg-6 align-items-end">
                        <h1 className="explanation-h1 pb-3">"The World is Full of Wonders, Let’s Discover Them Together!"</h1>
                        <h5 className="explanation-h5 pb-2">"At <span className="fw-bold" style={{ color: "#fbaf3f" }}>PicniGO</span>, we offer you the chance to travel, discover, and make unforgettable memories with our exciting packages designed to suit your every need. Let us guide you on the adventure of a lifetime!"</h5>
                        <Link to={'travelpackage'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                    </div>
                </div>


                <div className="row align-items-center my-5">

                    <div className="col-lg-6 align-items-end">
                        <h1 className="explanation-h1 pb-3">"Book Now, Relax Later: Your Perfect Hotel Awaits"</h1>
                        <h5 className="explanation-h5 pb-2">"br/owse through a wide range of available rooms, choose your preferred amenities, select your check-in and check-out dates, and complete your booking in just a few simple steps to secure your perfect stay at <span className="fw-bold" style={{ color: "#fbaf3f" }}>PicniGO</span>, your trusted hotel partner."</h5>
                        <Link to={`hotelpackage`}><button className="explanation-btn  px-4 py-2 fw-bold">View Hotels</button></Link>
                    </div>
                    <div className="col-lg-6 explanation-card mt-3">
                        <img src="hotelbooking01.jpeg" style={{ width: "100%", height: "350px" }} className="explanation-img mw-100" alt="" />
                    </div>
                </div>


                <div className="row align-items-center my-4" style={{ backgroundImage: 'url(star2.svg)', backgroundSize: '65px', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', padding: '50px 0', }}>
                    <div className="col-lg-6 explanation-card">
                        <img src="camp01.jpeg" style={{ width: "100%", height: "425px" }} className="explanation-img mw-100" alt="" />
                    </div>
                    <div className="col-lg-6 align-items-end">
                        <h1 className="explanation-h1 pb-3">"The World is Full of Wonders, Let’s Discover Them Together!"</h1>
                        <h5 className="explanation-h5 pb-2">"At <span className="fw-bold" style={{ color: "#fbaf3f" }}>PicniGO</span>, we offer you the chance to travel, discover, and make unforgettable memories with our exciting packages designed to suit your every need. Let us guide you on the adventure of a lifetime!"</h5>
                        <Link to={`camp`}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <h1 className='p-3' style={{ color: "#fbaf3f" }}>Travel Agency in Calicut,Kerala</h1>
                        <h5 className='fw-light text-black'>Traveling is not just about visiting new places; it's about discovering yourself, connecting with
                            people, and creating unforgettable experiences. The joy of exploring different cultures, stepping out
                            of your comfort zone, and making memories that last a lifetime is what makes travel truly special.
                            <br />
                            <br />
                            If you're eager to see the world but feel overwhelmed by the planning and cost, don’t worry you're in
                            good hands with the leading <b>travel experts in Kerala</b>. After many thoughtful discussions among
                            passionate travelers and entrepreneurs,PicniGO was born in Calicut. Our goal is simple: to
                            offer exceptional travel experiences to everyone who seeks adventure.
                            <br />
                            <br />
                            At <b>PicniGO</b>, we pride ourselves on being one of the top travel agencies in Calicut, Kerala,
                            providing top-notch travel services tailored to your needs. Our team of experienced travel
                            professionals is dedicated to guiding you through every stage of your journey. From booking your
                            flights to selecting the best accommodations, we ensure that your travel experience is seamless
                            and stress-free. We specialize in designing personalized itineraries that cater to all kinds of
                            travelers—whether you’re a solo adventurer, a couple in search of romance, or a group of friends
                            looking for fun-filled experiences. Whatever your dream vacation looks like,PicniGO is here to
                            turn it into reality.</h5>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row py-5" style={{ backgroundColor: " #c2c2c1" }}>
                    <div className='d-flex flex-column justify-content-center text-center'>
                        <img src="feedbackicon.svg" style={{ width: "50px", height: "50px" }} className='mx-auto mb-3' alt="" />
                        <h2 className="mw-100 mx-md-5 px-md-5 fw-light">"From the moment I was picked up until the final drop-off, I didn't have to worry about anything
                            planning, bookings, accommodations everything was seamlessly taken care of by the PicniGO team.
                            Thank you, PicniGO, for making my trip so stress free and memorable!"
                        </h2>
                        <h5> - Hansi Flick</h5>
                        <h5 className='fw-light'>Head Coach - Barcelona</h5>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Content