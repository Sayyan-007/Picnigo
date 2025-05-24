import { useEffect, useState } from "react"
import { Axios } from "../../axios";
import toast from "react-hot-toast";
import NavbarAdmin from "./NavbarAdmin";
import Slidebar from "./Slidebar";
import "./AdminCSS.css";
import { Bar } from "react-chartjs-2";

const Feedback = () => {

    const [data, setdata] = useState([])

    const display = async () => {
        try {
            const { data } = await Axios.get(`user/readmessage`)
            console.log(data)
            setdata(data.feedback)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        display()
    }, [])
    console.log(data);



    return (
        <div className="container-fluid vh-100" style={{ backgroundColor: "#1E1E2F" }}>
            <div className="row">
                <div className="col-md-3 p-0">
                    <Slidebar />
                </div>
                <div className="col-md-9">
                    <NavbarAdmin />
                    <h1 className="mt-3 text-light">FeedBacks</h1>

                    <div className="row justify-content-center">
                        <div className="col-lg-9 mt-3 webscrollbar border p-0" style={{ maxHeight: "350px", overflow: "scroll", color: "#E0E0E0" }}>
                            <table className=" align-middle text-center w-100" >
                                <thead style={{ position: "sticky", top: 0, zIndex: 2, backgroundColor: "#29293D" }}>
                                    <tr className="">
                                        <th className="p-2">#</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#2E2E40", color: "#E0E0E0" }}>
                                    {data.map((data, index) => (
                                        <tr key={data._id} >
                                            <td className="px-3 py-3">{index + 1}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.message}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Feedback