import { useEffect, useState } from "react"
import { Axios } from "../../axios"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"
import Slidebar from "./Slidebar"
import NavbarAdmin from "./NavbarAdmin"
import "./AdminCSS.css";



const ViewMangmentPackages=()=>{

    const [displaydata,setdisplaydata] = useState([])

    const {id,name} = useParams()

    const display=async()=>{
        try 
        {
            const {data}= await Axios.get(`admin/hotel/display`,{params:{id}})
            console.log(data.packagedata);
            setdisplaydata(data.packagedata)
        } 
        catch(error) 
        {
            console.log(error,error.response?.data || error.message);
        }
    }

    useEffect(()=>{
        display()
    },[])

    const handlereject=async(id)=>{
        try 
        {
            const {data} =  await Axios.patch(`admin/hotel/packageupdate`,{Status : "reject",Disabled:true},{params:{id}}) 
            console.log(data);
            toast.success(data.message)
            setdisplaydata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, Status: "reject" } : pkg));
        } 
        catch (error) 
        {
            toast.error('Rejection Failed')
            console.log(error,error.response?.data || "Rejection Failed");
            
        }
    }
    const handleaccept=async(id)=>{
        try 
        {
            const {data} =  await Axios.patch(`admin/hotel/packageupdate`,{Status : "accept"},{params:{id}}) 
            console.log(data);
            toast.success(data.message)
            setdisplaydata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, Status: "accept" } : pkg));
        } 
        catch (error) 
        {
            toast.error('Opertaion Failed')
            console.log(error,error.response?.data || "Opertaion Failed");
            
        }
    }


console.log(displaydata);


    return(
        <div className="container-fluid" style={{ backgroundColor: "#1E1E2F",color: "#E0E0E0" }}>
            <div className="row">
                <div className="col-md-3 ps-0">
                    <Slidebar/>
                </div>
                <div className="col-md-9">
                    <NavbarAdmin/>
                    <div className="row justify-content-center text-center mt-4">
                        <div className="col-md-6">
                            <h4 className="fw-light">Mangment ID :- {id}</h4>
                            <h4 className="fw-light">Mangment Name :- {name}</h4>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h4 className="m-0">Accepted Packages({displaydata.filter(data => data.Status === "accept").length})</h4>
                        <div className="mt-3 d-flex flex-sm-row flex-column overflow-scroll webscrollbar">
                            {displaydata.filter(data => data.Status === "accept").map((data, index) => (
                                <div key={data._id} className="col-lg-5 col-md-5 m-2  card shadow p-4" style={{backgroundColor:"#2D2D44",color: "#E0E0E0" }}>
                                    <div>
                                        <h4 className="fw-lighter">pkg number :- {index + 1}</h4>
                                        <p>ID :- {data._id}</p>
                                        <h5 className="p-0">Hotel Name :- {data.Hotel_Name}</h5>
                                        <p className="p-0">Type :- {data.Type}</p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button onClick={() => handlereject(data._id)} className="btn btn-danger">Reject</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h4 className="m-0">Accepted Packages({displaydata.filter(data => data.Status === "pending").length})</h4>
                        <div className="mt-3 d-flex flex-sm-row flex-column overflow-scroll webscrollbar">
                            {displaydata.filter(data => data.Status === "pending").map((data, index) => (
                                <div key={data._id} className="col-lg-5 col-md-5 m-2  card shadow p-4" style={{backgroundColor:"#2D2D44",color: "#E0E0E0" }}>
                                    <div>
                                        <h4 className="fw-lighter">pkg number :- {index + 1}</h4>
                                        <p>ID :- {data._id}</p>
                                        <h5 className="p-0">Hotel Name :- {data.Hotel_Name}</h5>
                                        <p className="p-0">Type :- {data.Type}</p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button onClick={()=>handleaccept(data._id)} className="btn btn-outline-success">Accept</button>
                                        <button onClick={()=>handlereject(data._id)} className="btn btn-danger">Reject</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="row mt-4 pb-5">
                        <h4 className="m-0">Accepted Packages({displaydata.filter(data => data.Status === "reject").length})</h4>
                        <div className="mt-3 d-flex flex-sm-row flex-column overflow-scroll webscrollbar">
                            {displaydata.filter(data => data.Status === "reject").map((data, index) => (
                                <div key={data._id} className="col-lg-5 col-md-5 m-2  card shadow p-4" style={{backgroundColor:"#2D2D44",color: "#E0E0E0" }}>
                                    <div>
                                        <h4 className="fw-lighter">pkg number :- {index + 1}</h4>
                                        <p>ID :- {data._id}</p>
                                        <h5 className="p-0">Hotel Name :- {data.Hotel_Name}</h5>
                                        <p className="p-0">Type :- {data.Type}</p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button onClick={()=>handleaccept(data._id)} className="btn btn-success">Accept</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMangmentPackages