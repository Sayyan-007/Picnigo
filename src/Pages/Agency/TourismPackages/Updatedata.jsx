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
        <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <div>
                <form onSubmit={handleUpdate} action="" className="d-flex flex-column gap-3">
                    <h4>{id}</h4>
                    {Agency_Name ? <input type="text" value={updateAgency_Name} onChange={event=>setAgency_Name(event.target.value)} placeholder="Agency_Name" className="p-3 fw-bold border border-2 rounded-4" /> : <p>{updateAgency_Name}</p>}
                    <input type="text" value={updateemail} onChange={event=>setupdateemail(event.target.value)} placeholder="email" className="p-3 fw-bold border border-2 rounded-4" />
                    <button type="submit" className="btn btn-success w-50">Submit</button>
                    
                    <Link to={'/agency'}><a href="">Back</a></Link>

                </form>
            </div>
        </div>
    )
}

export default UpdateAgency;
