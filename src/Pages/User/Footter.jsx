const Footter = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                                <p className="fw-semibold fs-5">Navigation & Quick Links</p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Home  </a></p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">About us</a></p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Services</a></p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Contact</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                                <p className="fw-semibold fs-5">Legal & Compliance</p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Privacy Policy</a></p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Terms & Conditions</a></p>
                                <p className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Cookie Policy</a></p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column gap-2" style={{ listStyle: "none", }}>
                                <p className="fw-semibold fs-5">Social media Links</p>
                                <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Facebook  </a></h6>
                                <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">Instagram</a></h6>
                                <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">LinkedIn</a></h6>
                                <h6 className="fw-light fs-5"><a className="text-dark text-decoration-none" href="">You tube</a></h6>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <p className="fs-1 fw-bolder fst-italic">Pic<span className="text-warning fs-1">N</span>igo</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <hr />
                    <p className="text-center py-2">© 2025 Picnigo Company. All Rights Reserved.</p>
                    <img src="footter.png" className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footter