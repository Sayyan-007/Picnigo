import './Style.css'
const Hero = () => {
    return (
        <div id='home'>
            <div  style={{backgroundImage:'url(bgimg.avif)'}} className=' mw-100 '>
                <div className="container-fluid">
                    <div className="row align-items-center pt-5">
                        <div className="col-md-6 ps-5 pt-md-5" id="heading">
                            <div className=" pb-4">
                                <h1 style={{fontSize:"50px",fontWeight:"bolder"}}>We Open The Gates</h1>
                                <h1 style={{fontSize:"45px"}}>To Travel,</h1>
                                <h1 style={{fontSize:"40px"}}>With Us</h1>
                            </div>
                            <div className="">
                                <h4 className="fw-lighter">Your Dreams,Your Experience</h4>
                                <h4 className="fw-lighter">Our Expertise</h4>
                                <div>
                                    <button className="p-2 px-4 fw-bold mt-2" id="booknow">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src="place.avif" alt=""  className='mw-100'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Hero