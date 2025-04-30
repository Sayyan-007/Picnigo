import { Link } from "react-router-dom"

const Success=()=>{
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center  border border-3 shadow-lg p-4 rounded-5">
                <p className="fs-3 fw-bolder fst-italic  p-0 m-0">Pic<span className="text-warning fs-1">n</span>igo</p>
                <h1 className="text-success fw-bolder">Booking Successful!y</h1>
                <p className="fst-italic fs-3 fw-">Thank you for your booking. <br /> You will receive a confirmation call from the Agency.</p>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/" className=" btn btn-outline-success fw-bold rounded-3 ">Go to Home</Link>
                </div>
            </div>
        </div>
    )
}
export default Success