import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logooutHotel } from "../../../Redux/hotelSlice"
import toast from "react-hot-toast";
import {  LogOut, User, Mail } from 'lucide-react';


const Navbar = () => {

    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const { id,username,email } = useSelector(store => store.hotel)



    const handleLogOut = () => {
        localStorage.removeItem('access_token')
        Dispatch(logooutHotel())
        Navigate('/hotelmangment')
        toast.error('Logout Successfully')
    }


    return (
        <div>
            <nav id="home" className=" w-100 navbar navbar-expand-lg pt-4" >
                <div className="container-fluid">
                    <p className="fs-3 fw-bolder fst-italic m-0">Pic<span className="text-warning fs-1">N</span>igo</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto gap-lg-4">
                            <li className="nav-item">
                                <a className="nav-link active text-dark fw-bolder" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-dark fw-bolder" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bolder" href="#">About</a>
                            </li>
                        </ul>
                        {id ?
                            <ul className="navbar-nav mx-uto gap-lg-4">
                                <li className='navbar-nav d-flex flex-column'>
                                    <div className='fw-light'><User /> {username}</div>
                                    <div className='fw-light'><Mail /> {email}</div>
                                </li>
                                <li className='nav-item'>
                                    <button onClick={handleLogOut} className='btn btn-outline-danger fw-bold'><LogOut />Log Out </button>
                                </li>
                            </ul> :
                            <ul className="navbar-nav mx-uto gap-lg-4 gap-3">
                                <li className='nav-item'>
                                    <Link to={'/hotelmangment/signup'}>
                                        <button className="btn btn-outline-success text-dark fw-bolder" type="button">Sign Up</button>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to={'/hotelmangment/login'}>
                                        <button className="btn btn-outline-success text-dark fw-bolder" type="button">Log In</button>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
