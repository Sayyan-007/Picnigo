const ContactUs=()=>{

    return(
        <div  className='py-5' style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 ">
                        <form action="">
                            <h1 className="fw-bold">Contact Us </h1>
                            <h4 className="fw-lighter">
                            Contact your reliable travel agency in Calicut and begin planning your perfect getaway today!
                            </h4>
                            <div className="row pt-2">
                                <div className="col-lg-6 d-flex flex-column">
                                    <label htmlFor="name" className="fw-lighter fs-5">Name</label>
                                    <input type="text" name="" id="name"  className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <label htmlFor="contactnumber" className="fw-lighter fs-5">Contact Number</label>
                                    <input type="text" name="" id="contactnumber"  className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-lg-12  pt-2 d-flex flex-column">
                                    <label htmlFor="email" className="fw-lighter fs-5">Email</label>
                                    <input type="email" name="" id="email" className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-lg-12  pt-2 d-flex flex-column">
                                    <label htmlFor="Message" className="fw-lighter fs-5">Message</label>
                                    <input type="text" name="" id="Message" className="bg-transparent p-1 " style={{lineHeight:"70px", border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="text-end">
                                    <button className="opp-btn rounded-3 p-2 px-3 fw-medium mt-3">submit</button>
                                </div>

                            </div>
                         </form>
                    </div>
                    <div className="col-md-6">
                        <img src="asdf.png" className="w-100 mw-100"  alt="location" />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default ContactUs