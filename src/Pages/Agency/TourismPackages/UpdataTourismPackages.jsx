import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Axios } from "../../../axios";
import toast from "react-hot-toast";

const UpdataTourismPackages=()=>{

    const {id}= useParams();
    const [updateDestination_Name,setupdateDestination_Name] = useState()
    const [updateDestination_Image,setupdateDestination_Image] = useState()
    const [updateClimate,setupdateClimate] = useState()
    const [updateDuration,setupdateDuration] = useState()
    const [updatePrize,setupdatePrize] = useState()

    const handleupdate=async(event)=>{

        event.preventDefault()

        try
        {
            const response = await Axios.patch('tourismpackage/update',{Destination_Name:updateDestination_Name,Destination_Image:updateDestination_Image,Climate:updateClimate,Duration:updateDuration,Prize:updatePrize},{params:{id}})
            console.log(response);
            if(response.status === 200)
            {
                toast.success(response.data.message || "Updated Sucessfully")
            }
            else
            {
                toast.error(response.data.message || "Updated as Failed")
            }
        }
        catch(err)
        {
            console.log(err);
            toast.error(err.message || "Updated as Failed")
        }

    }


    return(

        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/world.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form onSubmit={handleupdate} action="" className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h1>Update the Package Details</h1>
                    <input type="text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Destination Name" value={updateDestination_Name} onChange={event=>setupdateDestination_Name(event.target.value)}/>
                    <input type="text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Destination Image" value={updateDestination_Image} onChange={event=>setupdateDestination_Image(event.target.value)}/>
                    <input type="text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Climate" value={updateClimate} onChange={event=>setupdateClimate(event.target.value)}/>
                    <input type="text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Duration" value={updateDuration} onChange={event=>setupdateDuration(event.target.value)}/>
                    <input type="text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Prize" value={updatePrize} onChange={event=>setupdatePrize(event.target.value)}/>
                    <div className="d-flex gap-2 ">
                        <button type="submit" className="login-btn w-50 p-2 fw-bold px-3">Submit</button>
                        <button className='opp-btn fw-bold w-50 p-2 px-3'><Link className='text-decoration-none w-50 text-light' to={'/agency'}><a>Back</a></Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdataTourismPackages
