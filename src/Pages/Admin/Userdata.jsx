import { useEffect, useState } from "react"
import { Axios } from "../../axios";
import toast from "react-hot-toast";
import NavbarAdmin from "./NavbarAdmin";
import Slidebar from "./Slidebar";
import "./AdminCss.css";
import { Bar } from "react-chartjs-2";

const Userdata = () => {

    const [userdata, setuserdata] = useState([])
    const [chartdata,setChartdata] = useState([])

    const display = async () => {
        try {
            const { data } = await Axios.get(`admin/userdata`)
            console.log(data)
            setuserdata(data.displayedData)
            setChartdata(data.bookingsbyUser)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        display()
    }, [])

    const handledisable = async (id) => {
        try {
            const { data } = await Axios.patch(`admin/userupdate`, { isBlocked: true }, { params: { id } })
            console.log(data);
            toast.success("Package disabled");
            setuserdata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, isBlocked: true } : pkg));
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleenable = async (id) => {
        try {
            const { data } = await Axios.patch(`admin/userupdate`, { isBlocked: false }, { params: { id } })
            console.log(data);
            toast.success("Package Enabled");
            setuserdata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, isBlocked: false } : pkg));

        }
        catch (error) {
            console.log(error);
        }
    }
    const ChartData = {
        labels: chartdata.map((item)=>item.username),
        datasets:[
          {
              label:"Total Booking",
              data:chartdata.map((item)=>item.totalbookings),
              borderWidth:1,
              backgroundColor: "#F9A826", // Semi-transparent blue
              borderColor: "rgb(0, 0, 0)", // Solid blue border
              barThickness: 80,
          }
        ]
    }
    const option1 ={
        responsive:true,
        plugins:{
            legend:{
              position:"top",
              labels:{
                font:{family:"Georgia, 'Times New Roman', serif",size: 16, weight: "bold"},
                color:"#E0E0E0"
              } 
            }
        },
          scales:{
            x:
            {title:{
                    display:true,text:"User Name",
                    font:{family:"'Palatino Linotype', 'Book Antiqua', serif",size: 16, weight: "bold" },
                    color:"#E0E0E0"
                    },
              grid:{display:false},
              ticks:{color:"#E0E0E0"}
            },
            y:
            {title:{
                    display:true,text:"Bookings",
                    font:{family:"Georgia, 'Times New Roman', serif",size: 16, weight: "bold" },
                    color:"#E0E0E0"
                    },
                    ticks:{color:"#E0E0E0"}
            }
              
          }
    }

    console.log("user data :- ",userdata);
    console.log("Chart data :- ",chartdata);


    return (
        <div className="container-fluid" style={{ backgroundColor: "#1E1E2F" }}>
            <div className="row">
                <div className="col-md-3 p-0">
                    <Slidebar />
                </div>
                <div className="col-md-9">
                    <NavbarAdmin />
                    <div className="row justify-content-center align-items-center m-0">
                        <div className="col-lg-9 mt-3 webscrollbar border p-0" style={{ height: "210px", overflow: "scroll", color: "#E0E0E0" }}>
                            <table className=" align-middle text-center w-100" >
                                <thead style={{ position: "sticky", top: 0, zIndex: 2, backgroundColor: "#29293D" }}>
                                    <tr className="">
                                        <th className="p-2">#</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Status</th>
                                        <th>Update Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#2E2E40" , color:"#E0E0E0"}}>
                                    {userdata.map((data, index) => (
                                        <tr key={data._id} >
                                            <td className="px-3 py-3">{index + 1}</td>
                                            <td>{data.fullName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone_Number}</td>
                                            <td>{data.isBlocked ? "Disabled" : "Enabled"}</td>
                                            <td>
                                                {data.isBlocked ? (
                                                    <button onClick={() => handleenable(data._id)} className="btn btn-outline-success">
                                                        Enable
                                                    </button>
                                                ) : (
                                                    <button onClick={() => handledisable(data._id)} className="btn btn-outline-danger">
                                                        Disable
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-3 text-center">
                            <div className="card p-5" style={{ backgroundColor: "#2A2A3A" ,color: "#E0E0E0"}}>
                                <h1>{userdata.length}</h1>
                                <p>Number of Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{color: "#E0E0E0" }}>
                        <div className="col-lg-9 m-0 mt-4">
                            <Bar data={ChartData} options={option1}></Bar> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdata