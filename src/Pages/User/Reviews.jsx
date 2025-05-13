import './Style.css'

const Reviews = () => {

    return (

        <div className='py-5' style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container px-5">
                <div className="row text-center g-4">
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center" >
                        <div className="card border-2 p-4 align-items-center reviewborder"  style={{backgroundColor:"#f7f7f7"}}>
                            <img className="mw-100 w-50 mb-3 text-canter reviewimg" src={`https://i.ibb.co/3m4vg4k1/happyemj.jpg`} alt=""  />
                                <h1 className="fw-light">250+</h1>
                                <h5 className="fw-bold text-dark ">Happy Client</h5>
                                <p className="text-muted">"Happy clients inspire us to deliver exceptional service and results."</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="card border-2 p-4 align-items-center reviewborder"  style={{backgroundColor:"#f7f7f7"}}>
                            <img className="mw-100 w-50 mb-3 text-canter reviewimg" src={`https://i.ibb.co/TBmFwRpj/hotelemj.jpg`} alt=""  />
                                <h1 className="fw-light">50+</h1>
                                <h5 className="fw-bold text-dark ">Stays</h5>
                                <p className="text-muted">"Unforgettable Hotel Stays: Comfort, Luxury, and Exceptional Service"</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="card border-2 p-4 align-items-center reviewborder"  style={{backgroundColor:"#f7f7f7"}}>
                            <img className="mw-100 w-50 mb-3 text-canter reviewimg" src={`https://i.ibb.co/gFtP5mQR/locationemj.jpg`} alt=""  />
                                <h1 className="fw-light">150+</h1>
                                <h5 className="fw-bold text-dark ">Camping</h5>
                                <p className="text-muted">"Adventure Awaits: Explore the Great Outdoors with Camping"</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="card border-2 p-4  align-items-center reviewborder"  style={{backgroundColor:"#f7f7f7"}} >
                            <img className="mw-100 w-50 mb-3 text-canter" src={`https://i.ibb.co/jNzchNP/evevntemj.jpg`} alt=""  />
                                <h1 className="fw-light">50+</h1>
                                <h5 className="fw-bold text-dark">Explored regions</h5>
                                <p className="text-muted">"Explored regions offer unique experiences and unforgettable adventures."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews