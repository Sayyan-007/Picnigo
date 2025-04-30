  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { Button, Offcanvas } from "react-bootstrap";
  import { FaBars, FaCampground,FaCog, FaHome, FaSuitcaseRolling, FaUser, FaUserTie } from "react-icons/fa";
  import {  } from "react-icons/md";
  import "./AdminCss.css";

  function Slidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <div className="p- text-light align-items-center vh-lg-100 rounded-end-5" style={{backgroundColor:"#25253A"}}>
            <Button className="m-3 btnicon" onClick={handleShow}>
              <FaBars/> 
            </Button>
            <h3 className="pt-5 d-none d-md-block text-center" style={{color:"#E0E0E0"}}>Admin Panel</h3>
            <Offcanvas show={show} onHide={handleClose} responsive="md"  style={{color:"#E0E0E0",backgroundColor:"#25253A"}}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Admin Panel</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  className="d-md-flex justify-content-center mt-3">
                <ul className=" ullist  mt-3 d-flex flex-column gap-3" >
                  <li>
                    <Link className="nav-link d-flex" to={'/admin'}><FaHome className=" me-2 fs-4" /><h5 className="fw-light">Dashboard</h5></Link>
                  </li>
                  <li>
                    <Link className="nav-link d-flex" to={'/admin/user'}><FaUser className="me-2 fs-4" /><h5 className="fw-light">Users</h5></Link>
                  </li>
                  <li>
                    <Link className="nav-link d-flex" to={'/admin/travelagency'}><FaSuitcaseRolling className="me-2 fs-4" /><h5 className="fw-light">Travel Agency</h5></Link>
                  </li>
                  <li>
                    <Link className="nav-link d-flex" to={'/admin/hotelmangment'}><FaUserTie className="me-2 fs-4" /><h5 className="fw-light">Hotel Mangment</h5></Link>
                  </li>
                  <li>
                    <Link className="nav-link d-flex" to={'/admin/camporganizer'}><FaCampground className="me-2 fs-4" /><h5 className="fw-light">Camp Oraganizers</h5></Link>
                  </li>
                  <li>
                    <Link className="nav-link d-flex" to={'/admin'}><FaCog className="me-2 fs-4" /><h5 className="fw-light">Settings</h5></Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
    );
  }

  export default Slidebar;
