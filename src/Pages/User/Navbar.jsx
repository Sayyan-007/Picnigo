import 'bootstrap/dist/js/bootstrap.min.js';
import './Style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Redux/userSlice';

const Navbar = () => {

    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const {id,fullName,email} = useSelector(store => store.user) 

    const handleLogOut=()=>
    {
        localStorage.removeItem('access_token')
        Dispatch(logoutUser())
        Navigate('/user')
    }

    return (
        <div>
            <nav id="navbar" className=" top-0 w-100 navbar navbar-expand-md py-3"  >
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
                                <a className="nav-link text-dark fw-bolder" href="#explanation">Packages</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark fw-bolder" href="#" id="packagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Agency
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="packagesDropdown">
                                    <Link className='text-decoration-none' to={'/agency/login'}><li><a className="dropdown-item">Travel Agency</a></li></Link>
                                    <Link className='text-decoration-none' to={`/hotelmangment/login`}><li><a className="dropdown-item">Hotel Management</a></li></Link>
                                    <Link className='text-decoration-none' to={`/camporganization/login`}><li><a className="dropdown-item">Camp</a></li></Link>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bolder" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bolder" href="#">About</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            {id ?
                                <div className='d-flex justify-content-start align-items-center gap-2'>
                                    <div>
                                        <h6>{fullName}</h6> 
                                        <h6>{email}</h6> 
                                    </div>
                                    <div>
                                        <Link to={''}><button onClick={handleLogOut} className='btn btn-outline-danger fw-bold'>Log Out</button></Link>
                                    </div>
                                
                                </div> : 
                                <div  className='d-flex gap-2'>
                                    <li>
                                    <Link to={'/signup'}>
                                        <button className="btn btn-outline-success text-dark fw-bolder" type="button">Sign Up</button>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to={'/login'}>
                                        <button className="btn btn-outline-success text-dark fw-bolder" type="button">Log In</button>
                                    </Link>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar