import { useEffect, useState } from "react"
import { Axios } from "../../axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Slidebar from "./Slidebar";
import NavbarAdmin from "./NavbarAdmin";
import { BarChart, Hash } from "lucide-react";
import { FaRegCalendarCheck, FaRupeeSign } from "react-icons/fa";
import { Bar } from "react-chartjs-2";

const Hotelmangment = () => {

    const [userdata, setuserdata] = useState([])
    const [revnew, setrevnew] = useState([])
    const [profit, setprofit] = useState([])
    const [bookingcountdata, setbookingcountdata] = useState([])
    const [Barchart, setBarchart] = useState([])



    const display = async () => {
        try {
            const { data } = await Axios.get(`admin/hoteldata`)
            setuserdata(data.hoteldata)
        }
        catch (error) {
            console.log(error);
        }
    }

    const display2 = async () => {
        try {
            const { data } = await Axios.get(`book/agency/display`)
            console.log(data);
            const hotel = data.Amount.find((data) => data._id == "Hotel")
            setbookingcountdata(hotel.count)
            setrevnew(hotel.totalPackageAmount)
            const profit = data.Persentage.find((data) => data.host_type == "Hotel")
            setprofit(profit.per)

        }
        catch (error) {
            console.log(error);
        }
    }
    const display3 = async () => {
        try {
            const { data } = await Axios.get(`admin/hotel/Chart`)
            setBarchart(data.Hotelbooked)

        }
        catch (error) {
            console.log(error);
        }
    }



    const ChartData = {
        labels: Barchart.map((item) => item.username),
        datasets: [
            {
                label: "Booking Persentage",
                data: Barchart ? Barchart.map((item) => item.Userpercentage) : [],
                borderWidth: 1,
                backgroundColor: "#F9A826",
                borderColor: "rgb(0, 0, 0)",
                barThickness: 80,
                categoryPercentage: 0.7,
            },
            {
                label: "Revenue Persentage",
                data: Barchart ? Barchart.map((item) => item.userTotalpackagePersentage) : [],
                borderWidth: 1,
                backgroundColor: "#D97706",
                borderColor: "rgb(0, 0, 0)",
                barThickness: 80,
                categoryPercentage: 0.7,
            }
        ]
    }
    console.log("Chart", ChartData);


    const option1 = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: { family: "Georgia, 'Times New Roman', serif", size: 16, weight: "bold" },
                    color: "#E0E0E0"
                }
            }
        },
        scales: {
            x:
            {
                title: {
                    display: true, text: "Mangment Name",
                    font: { family: "'Palatino Linotype', 'Book Antiqua', serif", size: 16, weight: "bold" },
                    color: "#E0E0E0"
                },
                grid: { display: false },
                ticks: { color: "#E0E0E0" }
            },
            y:
            {
                title: {
                    display: true, text: "Persentage",
                    font: { family: "Georgia, 'Times New Roman', serif", size: 16, weight: "bold" },
                    color: "#E0E0E0"
                },
                ticks: { color: "#E0E0E0" }
            }

        }
    }


    useEffect(() => {
        display(),
        display2(),
        display3()
    }, [])

    console.log("mangment data", userdata);
    console.log("Booking count", bookingcountdata);
    console.log("total revnew", revnew);
    console.log("profit % ", profit);
    console.log("Manggment Booking Data ", Barchart);




    const handledisable = async (id) => {
        try {
            const { data } = await Axios.patch(`admin/hotelupdate`, { isBlocked: true }, { params: { id } })
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
            const { data } = await Axios.patch(`admin/hotelupdate`, { isBlocked: false }, { params: { id } })
            console.log(data);
            toast.success("Package Enabled");
            setuserdata((pre) => pre.map((pkg) => pkg._id === id ? { ...pkg, isBlocked: false } : pkg));

        }
        catch (error) {
            console.log(error);
        }
    }

    console.log(userdata);

    return (
        <div className="container-fluid" style={{ backgroundColor: "#1E1E2F" }}>
            <div className="row">
                <div className="col-md-3 p-0">
                    <Slidebar />
                </div>
                <div className="col-md-9">
                    <NavbarAdmin />
                    <div className="row justify-content-center text-center ">
                        <div className="col-lg-3 col-md-6 col-ms-6 mt-4 d-flex">
                            <div className="card flex-fill  p-3" style={{ backgroundColor: "#2A2A3A", color: "#E0E0E0" }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Hash size={32} strokeWidth={3} />
                                    <h1 className="m-0">{userdata.length}</h1>
                                </div>
                                <p className="m-0">Mangment</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-ms-6 mt-4 d-flex">
                            <div className="card flex-fill  p-3" style={{ backgroundColor: "#2A2A3A", color: "#E0E0E0" }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <FaRegCalendarCheck size={32} strokeWidth={3} />
                                    <h1 className="m-0">{bookingcountdata}</h1>
                                </div>
                                <p className="m-0">Bookings</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-ms-6 mt-4 d-flex">
                            <div className="card flex-fill  p-3" style={{ backgroundColor: "#2A2A3A", color: "#E0E0E0" }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <FaRupeeSign size={32} strokeWidth={3} />
                                    <h1 className="m-0">{revnew}</h1>
                                </div>
                                <p className="m-0">Revenue</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-ms-6 mt-4 d-flex">
                            <div className="card flex-fill  p-3" style={{ backgroundColor: "#2A2A3A", color: "#E0E0E0" }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <BarChart size={32} strokeWidth={3} />
                                    <h1 className="m-0">{profit}%</h1>
                                </div>
                                <p className="m-0">Profit</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row justify-content-center px-5">
                            <div className="col-lg-12 mt-3 webscrollbar border p-0" style={{ maxHeight: "210px", overflow: "scroll", color: "#E0E0E0" }}>
                                <table className=" align-middle text-center w-100" >
                                    <thead style={{ position: "sticky", top: 0, zIndex: 2, backgroundColor: "#29293D" }}>
                                        <tr className="">
                                            <th className="p-2">#</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Status</th>
                                            <th>Update Status</th>
                                            <th>View Packages</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: "#2E2E40", color: "#E0E0E0" }}>
                                        {userdata.map((data, index) => (
                                            <tr key={data._id} style={{ backgroundColor: index % 2 === 0 ? "#2E2E40" : "#29293D" }}>
                                                <td className="px-3 py-3">{index + 1}</td>
                                                <td>{data.username}</td>
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
                                                <td>
                                                    <Link to={`viewmangmentpackage/${data._id}/${encodeURIComponent(data.username)}`}><button className="btn btn-outline-success">View Packages</button></Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <Bar data={ChartData} options={option1}></Bar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotelmangment