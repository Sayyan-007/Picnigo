import { FaMailBulk, FaUser } from "react-icons/fa"

const NavbarAdmin=()=>{
    return(
        <div className="shadow-sm rounded-start-5 px-3 d-flex align-items-center justify-content-between mt-3" style={{backgroundColor:"#25253A",color:"#E0E0E0"}}>
            <div>
                <p className="fs-3 fw-bolder fst-italic">Pic<span className="text-warning fs-1">N</span>igo</p>
            </div>
            <div className=" p-2 d-flex flex-column align-items-end">
                <div className="d-flex  align-items-center gap-2">
                    <FaUser/>
                    <p className="m-0 fst-italic">Sayyan_007</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <FaMailBulk/>
                    <p className="m-0 fst-italic">sayyannoor007@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin