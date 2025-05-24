import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Axios } from '../../../axios'
import toast from 'react-hot-toast'
import '@fontsource/inter';
import { useSelector } from 'react-redux'
import '../Style.css'
import { MdCurrencyRupee } from 'react-icons/md';
import { FaGlobeAsia } from 'react-icons/fa'

const TravelPackage = () => {

    const { id: userId } = useSelector(store => store.user)

    const [data, setData] = useState([])

    const fetch = async () => {

        try {
            const { data } = await Axios.get(`user/travelpackages/display`)
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

    const handlelogin=()=>{
        toast.error("Login for Booking")
    }


    return (
        <div className=''>
            <div style={{ backgroundColor: "#FEF7F4" }}>
                <div className="container py-4">
                    <div className="row">
                        <h1 className='explanation-h1 fw-bold'>Solo Packages</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                        {data.filter((data) => data.Category === "solo" && data.Status === "accept" && data.Disabled === false).map((data) => (
                            <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{fontFamily:"Inter, sans-serif"}}>
                                    <img className=' w-100 rounded-top-4'  style={{width:"1270px",height:"400px"}} src={data.Destination_Image} alt=""/>
                                <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{backgroundColor: "rgba(255, 255, 255, 0.77)"}}>
                                    <p className='text-center m-0' style={{color:"#717171"}}>{data.Destination_Name},{data.State}</p>
                                    <p className='text-start m-0' style={{color:"black",fontFamily:""}}>Agency Name - {data.Agency_name}</p>
                                    <hr  className='mt-3'/>
                                    <div className='d-flex justify-content-between mx-2'>
                                        <div>{data.Duration}</div>
                                        <div>From <MdCurrencyRupee className='mb-1'/>{data.Prize}</div>
                                    </div>
                                </div>
                                {userId ?
                                
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <Link className='nav-link' to={`/booknowagency/${data._id}`}><FaGlobeAsia className='mb-1 '/> Book packages </Link> 
                                    </div>
                                    :
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <button onClick={handlelogin} className='bg-transparent text-light border-0'><FaGlobeAsia className='mb-1 '/> Book packages </button>  
                                    </div>

                                }
                                

                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h1 className='explanation-h1 fw-bold'>Couple Packages</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                        {data.filter((data) => data.Category === "couple" && data.Status === "accept" && data.Disabled === false).map((data) => (
                            <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{fontFamily:"Inter, sans-serif"}}>
                                    <img className=' w-100 rounded-top-4'  style={{width:"1270px",height:"400px"}} src={data.Destination_Image} alt=""/>
                                <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{backgroundColor: "rgba(255, 255, 255, 0.77)"}}>
                                    <p className='text-center m-0' style={{color:"#717171"}}>{data.Destination_Name},{data.State}</p>
                                    <p className='text-start m-0' style={{color:"black",fontFamily:""}}>Agency Name - {data.Agency_name}</p>
                                    <hr  className='mt-3'/>
                                    <div className='d-flex justify-content-between mx-2'>
                                        <div>{data.Duration}</div>
                                        <div>From <MdCurrencyRupee className='mb-1'/>{data.Prize}</div>
                                    </div>
                                </div>
                                {userId ?
                                
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <Link className='nav-link' to={`/booknowagency/${data._id}`}><FaGlobeAsia className='mb-1 '/> Book packages </Link> 
                                    </div>
                                    :
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <button onClick={handlelogin} className='bg-transparent text-light border-0'><FaGlobeAsia className='mb-1 '/> Book packages </button>  
                                    </div>

                                }
                                

                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h1 className='explanation-h1 fw-bold'>Group Packages</h1>
                        <div className='mt-3 d-flex gap-4 flex-row overflow-scroll webscrollbar'>

                        {data.filter((data) => data.Category === "group" && data.Status === "accept" && data.Disabled === false).map((data) => (
                            <div key={data._id} className="tour-card p-0 position-relative col-11 col-sm-8 col-md-5 col-lg-3 " style={{fontFamily:"Inter, sans-serif"}}>
                                    <img className=' w-100 rounded-top-4'  style={{width:"1270px",height:"400px"}} src={data.Destination_Image} alt=""/>
                                <div className='tour-overlay position-absolute bottom-0 rounded-top-5 start-0 w-100 px-3 py-2' style={{backgroundColor: "rgba(255, 255, 255, 0.77)"}}>
                                    <p className='text-center m-0' style={{color:"#717171"}}>{data.Destination_Name},{data.State}</p>
                                    <p className='text-start m-0' style={{color:"black",fontFamily:""}}>Agency Name - {data.Agency_name}</p>
                                    <hr  className='mt-3'/>
                                    <div className='d-flex justify-content-between mx-2'>
                                        <div>{data.Duration}</div>
                                        <div>From <MdCurrencyRupee className='mb-1'/>{data.Prize}</div>
                                    </div>
                                </div>
                                {userId ?
                                
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <Link className='nav-link' to={`/booknowagency/${data._id}`}><FaGlobeAsia className='mb-1 '/> Book packages </Link> 
                                    </div>
                                    :
                                    <div className='position-absolute top-0 end-0  m-2 border bg-dark text-light border-3 rounded-pill px-2'>
                                         <button onClick={handlelogin} className='bg-transparent text-light border-0'><FaGlobeAsia className='mb-1 '/> Book packages </button>  
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
export default TravelPackage
