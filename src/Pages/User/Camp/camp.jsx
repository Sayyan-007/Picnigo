import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaRegCalendarCheck ,FaClock} from "react-icons/fa"
import { MdCurrencyRupee } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Axios } from "../../../axios"

const Camp = () => {

    const { id: userId } = useSelector(store => store.user)

    const [data, setData] = useState([])

    const fetch = async () => {

        try {
            const { data } = await Axios.get(`user/camppackages/display`)
            console.log(data.displayedData);
            setData(data.displayedData)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    const handlelogin = () => {
        toast.error("Login for Booking")
    }

    return (
        <div className=''>
            <div style={{ backgroundColor: "#FEF7F4" }}>
                <div className="container py-4">
                    <div className="row">
                        <h1 className='explanation-h1 fw-bold'>Regular Camp</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                            {data.filter((data) => data.type === "regular" && data.Status === "accept" && data.Disabled === false).map((data) => (
                                <div key={data._id} className="col-11 col-sm-8 col-md-5 col-lg-3  mb-3 rounded-5 p-3" style={{ color:'#4A3F35',border:"4px solid #EADBD4",fontFamily: "Inter, sans-serif" }}>
                                    <div className="d-flex  text-end align-items-center justify-content-between">
                                        <div >
                                            <img className="rounded-circle" style={{height:"100px",width:"100px"}} src={data.campIcon} alt="" />
                                        </div>
                                        <div>
                                            <p className="fw-bold">{data.campName}</p>
                                            <p className="fw-bold"><span className="fw-lighter">Conducted by</span> {data.organization_name}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex align-items-center justify-content-between">
                                        <p className="fw-bolder"><MdCurrencyRupee className="mb-1"/> {data.prize}</p>
                                        <p className="fw-bolder"><FaClock className="mb-1"/> {data.duration}</p>
                                    </div>
                                    
                                    {userId ?

                                        <div style={{border:"2px solid #EADBD4"}} className='text-dark rounded-pill bg-transparent text-center'>
                                            <Link className='nav-link fw-bold' to={`/booknowcamp/${data._id}`}><FaRegCalendarCheck className='mb-1 ' /> Reserve a spot</Link>
                                        </div>
                                        :
                                        <div style={{border:"2px solid #EADBD4"}} className='text-dark rounded-pill bg-transparent text-center'>
                                            <button onClick={handlelogin} className='btn rounded fw-bold'><FaRegCalendarCheck className='mb-1 ' /> Reserve a spot</button>
                                        </div>

                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <h1 className='explanation-h1 fw-bold'>Stangers Camp</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                            {data.filter((data) => data.type === "Strangers_camp" && data.Status === "accept" && data.Disabled === false).map((data) => (
                                <div key={data._id} className="col-11 col-sm-8 col-md-5 col-lg-3  mb-3 rounded-5 p-3" style={{ color:'#4A3F35',border:"4px solid #EADBD4",fontFamily: "Inter, sans-serif" }}>
                                    <div className="d-flex  text-end align-items-center justify-content-between">
                                        <div >
                                            <img className="rounded-circle" style={{height:"100px",width:"100px"}} src={data.campIcon} alt="" />
                                        </div>
                                        <div>
                                            <p className="fw-bold">{data.campName}</p>
                                            <p className="fw-bold"><span className="fw-lighter">Conducted by</span> {data.organization_name}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex align-items-center justify-content-between">
                                        <p className="fw-bolder"><MdCurrencyRupee className="mb-1"/> {data.prize}</p>
                                        <p className="fw-bolder"><FaClock className="mb-1"/> {data.duration}</p>
                                    </div>
                                    
                                    {userId ?

                                        <div style={{border:"2px solid #EADBD4"}} className='text-dark rounded-pill bg-transparent text-center'>
                                            <Link className='nav-link fw-bold' to={`/booknowcamp/${data._id}`}><FaRegCalendarCheck className='mb-1 ' /> Reserve a spot</Link>
                                        </div>
                                        :
                                        <div style={{border:"2px solid #EADBD4"}} className='text-dark rounded-pill bg-transparent text-center'>
                                            <button onClick={handlelogin} className='btn rounded fw-bold'><FaRegCalendarCheck className='mb-1 ' /> Reserve a spot</button>
                                        </div>

                                    }


                                </div>
                            ))}
                        </div>
                    </div>
                    
                    

                </div>

            </div>

        </div>
    )
}

export default Camp