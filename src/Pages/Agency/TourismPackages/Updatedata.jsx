import { useState } from "react";
import { useSelector } from "react-redux";
import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const UpdateAgency = () => {

    const {id,Agency_Name,email} = useSelector(store=>store.agency)

    const [updateAgency_Name,setAgency_Name] = useState(Agency_Name)
    const [updateemail,setupdateemail] = useState(email)

    const handleUpdate=async(event)=>{

        event.preventDefault()
        
        try
        {

            if(!updateemail)
            {
                toast.error("email required")
            }
            if(!updateAgency_Name)
            {
                toast.error("Agency name required")
            }
            
            const response = await Axios.patch('agency/update',{Agency_Name:updateAgency_Name,email:updateemail},{params:{id}})
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
                <form onSubmit={handleUpdate} action="" className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h4>Update Your Agency Profile</h4>
                    <input type="text" value={updateAgency_Name} onChange={event=>setAgency_Name(event.target.value)} placeholder="Agency_Name" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" />
                    <input type="text" value={updateemail} onChange={event=>setupdateemail(event.target.value)} placeholder="email" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" />

                    <div className="d-flex gap-2 ">
                        <button type="submit" className="login-btn w-50 p-2 fw-bold px-3">Submit</button>
                        <button className='opp-btn fw-bold w-50 p-2 px-3'><Link className='text-decoration-none w-50 text-light' to={'/agency'}><a>Back</a></Link></button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}

export default UpdateAgency;
