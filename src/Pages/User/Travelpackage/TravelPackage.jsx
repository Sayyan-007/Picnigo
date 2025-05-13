import { Link } from 'react-router-dom'
// import './Style.css'


const TravelPackage = () => {
    return (
        <div className=''>
            <div style={{ backgroundColor: "#f7f7f7" }} className=''>
                <div className="container">
                    <div className="row align-items-center p-5">
                        <div className="col-lg-6">
                            <h1 className='explanation-h1 fw-bold'>Solo Packages</h1>
                            <p className='explanation-h5'>Unleash your inner explorer with our thrilling solo adventure itineraries. Perfect for those seeking excitement, challenge, and the freedom to venture off the beaten path, these packages are designed to fuel your spirit of adventure. From heart-pumping activities to awe-inspiring landscapes, each journey offers a unique opportunity to discover the world—and yourself—one adventure at a time.</p>
                            <Link to={'solo'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                        </div>
                        <div className="rounded-3 col-lg-6 mw-100 d-flex justify-content-center mt-4 mt-lg-0 ">
                            <img src={`https://i.ibb.co/BKK80Jyk/solo.jpg`} className='rounded-3 shadow-lg mw-100' alt="img required" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ backgroundColor: "#fffff" }}>
                <div className="container">
                    <div className="row align-items-center p-5">
                        <div className="rounded-3 col-lg-6 mw-100 d-flex justify-content-center">
                            <img src={`https://i.ibb.co/nsYwB90w/couple.jpg`} className='rounded-3 mw-100' alt="img required" />
                        </div>
                        <div className="col-lg-6  mt-4 mt-lg-0 ">
                            <h1 className='explanation-h1 fw-bold'>Couple Packages</h1>
                            <p className='explanation-h5'>Escape into a world of romance and adventure with our exclusive couple travel itineraries. Designed to foster connection, intimacy, and unforgettable memories, these packages offer the perfect blend of relaxation, exploration, and romance. Whether you're looking to unwind on a serene getaway or embark on an exciting journey together, our thoughtfully crafted experiences promise to make every moment special.</p>
                            <Link to={'couple'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ backgroundColor: "#f7f7f7" }}>
                <div className="container">
                    <div className="row align-items-center p-5">
                        <div className="col-lg-6">
                            <h1 className='explanation-h1 fw-bold'>Group Packages</h1>
                            <p className='explanation-h5'>Create unforgettable memories together with our specially crafted travel itineraries, perfect for families, cousins, and friends. Whether you’re exploring new adventures, relaxing on scenic getaways, or bonding over shared experiences, our packages are designed to enhance connections and make every moment special.</p>
                            <Link to={'group'}><button className="explanation-btn  px-4 py-2 fw-bold">View Packages</button></Link>
                        </div>
                        <div className="rounded-3 col-lg-6 mw-100 d-flex justify-content-center  mt-4 mt-lg-0 ">
                            <img src={`https://i.ibb.co/21sgNh1j/grooup.jpg`} className='rounded-3 shadow-lg mw-100' alt="img required" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TravelPackage
