import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div>
            {/*  */}
            <nav className="navbar navbar-expand-lg px-3 " style={{backgroundColor:"#fff4eb"}}>
                <h1 className="fw-bolder navbar-brand" href="#">Picnigo</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <div className="d-flex align-items-center">
                                <img src="usericon.jpg" style={{width:"45px"}} className="rounded-5 shadow p-1 m-0" alt="" />
                                <p className="p-2 m-0 fst-italic fw-bold">Admin_123</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
