import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { Pencil, PlusCircle ,Ban,CheckCircle} from "lucide-react";

const Homepage = () => {

    const { id } = useSelector(store => store.agency);

    console.log(id);

    const [displaydata, setdisplaydata] = useState([])

    const display = async () => {
        try {
            const { data } = await Axios.get(`/tourismpackage/display`, { params: { id } })
            console.log(data.TourismPackagesData);
            setdisplaydata(data.TourismPackagesData)
        }
        catch (error) {
            console.log(error, error.response?.data || error.message);
        }
    }

    const handledisable = async (id) => {
        try {
            const { data } = await Axios.patch(`tourismpackage/able`, { Disabled: true }, { params: { id } })
            console.log(data);
            toast.success(data.message)
            setdisplaydata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, Disabled: true } : pkg));
        }
        catch (error) {
            console.log(error, error.response?.data || "Updation Failed");

        }
    }

    const handleEnable = async (id) => {
        try {
            const { data } = await Axios.patch(`tourismpackage/able`, { Disabled: false }, { params: { id } })
            console.log(data);
            toast.success(data.message)
            setdisplaydata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, Disabled: false } : pkg));
        }

        catch (error) {
            console.log(error, error.response?.data || "Updation Failed");
        }
    }

    console.log(displaydata);


    useEffect(() => {
        display()
    }, [])

    return (
        <div id="home">
            <hr />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 text-center">
                        <h1 className="fw-bolder" style={{ fontFamily: "cursive" }}>Travel Agency</h1>
                        <h3 className="fw-light">Manage Your Travel Packages with <br /> Ease – Add, Update, or Edit in <br /> Just a Click!</h3>
                        {
                            id?<Link to={'addtourismpackage'}><button className="opp-btn p-2 fw-bold px-3"><PlusCircle size={25} /> Add new Packages</button></Link>:<Link to={'/agency/login'}>
                            <button className="btn btn-outline-success text-dark fw-bolder" type="button">Log In</button>
                        </Link>
                        }
                    </div>
                    <div className="col-lg-6">
                        <img src={`https://i.ibb.co/x8HfkMTQ/heroagency.jpg`} className="w-100 rounded-3" alt="" />
                    </div>

                </div>
            </div>
            <div className="container align-content-center">
            <hr />
            <h1 className="text-start fw-lighter my-3 mt-5">Enabled Data</h1>
                <div className="row g-3 align-items-center justify-content-center p-2 mb-5">
                    {id ? displaydata.filter(data => data.Disabled === false && data.Status === "accept").map((data) => (
                        <div key={data._id} className="col-lg-6 col-md-12 p-3 card border-0">
                            <div className="row p-3 shadow align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <img className="w-100 img-fluid rounded-3 " style={{ width: "200px", height: "200px", objectFit: "cover" }} src={data.Destination_Image} alt="" />
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div>
                                        <p className="m-1 fw-medium">Destination Name : <span className="fw-light">{data.Destination_Name}</span></p>
                                        <p className="m-1 fw-medium">Agency name : <span className="fw-light">{data.Agency_id}</span></p>
                                        <p className="m-1 fw-medium">Admin Status : <span className="fw-light">{data.Status}</span></p>
                                        <p className="m-1 fw-medium">Category : <span className="fw-light">{data.Category}</span></p>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <Link to={`UpdataTourismPackages/${data._id}`}><button className="opp-btn p-2 fw-medium px-3"><Pencil/> Update</button></Link>
                                        <button className="login-btn p-2 fw-bold px-3" onClick={() => handledisable(data._id)}><Ban/> Disable</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )) :
                        <div>
                            <Link to={'/agency/login'}>
                                <button className="btn btn-outline-success text-dark fw-bolder" type="button">Log In</button>
                            </Link>
                        </div>}
                </div>
                <hr />
                <h1 className="text-start fw-lighter my-3 mt-5">Disabled Data</h1>
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-center p-2 mb-5">
                        {id ? displaydata.filter(data => data.Disabled === true || data.Status === "pending" || data.Status === "reject").map((data) => (
                            <div key={data._id} className="col-lg-6 col-md-12 p-3 card border-0">
                                <div className="row p-3 shadow align-items-center">
                                    <div className="col-lg-4 col-md-4">
                                        <img className="w-100 img-fluid rounded-3 " style={{ width: "200px", height: "200px", objectFit: "cover" }} src={data.Destination_Image} alt="" />
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div>
                                            <p className="m-1 fw-medium">Destination Name : <span className="fw-light">{data.Destination_Name}</span></p>
                                            <p className="m-1 fw-medium">Agency name : <span className="fw-light">{data.Agency_id}</span></p>
                                            <p className="m-1 fw-medium">Admin Status : <span className="fw-light">{data.Status}</span></p>
                                            <p className="m-1 fw-medium">Category : <span className="fw-light">{data.Category}</span></p>
                                        </div>

                                        <div className="d-flex gap-3">
                                            <Link to={`UpdataTourismPackages/${data._id}`}><button className="opp-btn p-2 fw-bold px-3"><Pencil/> Update</button></Link>
                                            <button className="login-btn p-2 fw-bold px-3" onClick={() => handleEnable(data._id)}><CheckCircle/> Enable</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) :
                            <div>
                                <Link to={'/agency/login'}>
                                    <button className="btn btn-outline-success text-dark fw-bolder" type="button">Log In</button>
                                </Link>
                            </div>}
                    </div>
                </div>
                <div>

                </div>

            </div>
            <hr />
        </div>
    )
}

export default Homepage