

import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createcamppackage } from "../../../Redux/camppackageSlice";
import { ArrowBigDown } from "lucide-react";


const Camppackage=()=>{

    const myStyle={
        color: "#E0E0E0",
        borderColor: "#E0E0E0"
    
    }

    const {id,username}= useSelector(store=>store.camp)
    
    const Dispatch = useDispatch()

    const insertValues = useFormik({
        initialValues:{
            id: "",
            campName: "",
            campIcon: "",
            duration: "",
            contactNumber: "",
            type: "", 
            location: "",
            date: "",
            prize: ""

        },onSubmit:async(values,{resetForm})=>{

            try {

                const {data} = await Axios.post('camppackage/create',{...values, organization_id:id,organization_name:username})
                console.log(data);
                toast.success('Package has Added Successfully')
                Dispatch(createcamppackage(data.camppackageDatas))
                resetForm();
                
                
            } catch (error) {

                if (error.response) {
                    toast.error(error.response.data.message || "Internal Error");
                  } else {
                    toast.error("Network Error");
                  }
                console.log(error);
                
            }

        }
        
    })

    return(
        <div className="min-vh-100 py-4 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/world.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form action="" onSubmit={insertValues.handleSubmit} className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h1 className="fw-bolder text-center">Create Camp package</h1>
                    <input onChange={insertValues.handleChange} value={insertValues.values.campName} type="text"  name="campName"  placeholder="camp Name"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.campIcon} type="text" name="campIcon"  placeholder="camp Icon" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.contactNumber} type="text" name="contactNumber"  placeholder="contact Number" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.duration} type="text" name="duration"  placeholder="Duration" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <div>
                    <h4>Category: <ArrowBigDown/></h4>
                        <div className="d-flex justify-content-center gap-2">
                            <label htmlFor="Regular_camp">Regular camp</label>
                            <input onChange={insertValues.handleChange} value="Regular_camp" checked={insertValues.values.type === "Regular_camp"} type="radio" id="Regular_camp" name="type" />
                            <label htmlFor="Strangers_camp">Strangers camp</label>
                            <input onChange={insertValues.handleChange} value="Strangers_camp" checked={insertValues.values.type === "Strangers_camp"} type="radio" id="Strangers_camp" name="type" />
                        </div>
                    </div>
                    <input onChange={insertValues.handleChange} value={insertValues.values.location} type="text" name="location"  placeholder="Location" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.date} name='date' type="text"  placeholder="Date" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}  />
                    <input onChange={insertValues.handleChange} value={insertValues.values.prize} name='prize' type="text"  placeholder="Prize"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <div className="d-flex justify-content-around gap-4 px-2">
                       <button className="login-btn w-50 p-2 fw-bold px-3" type="submit" >Submit</button>
                       <Link to={'../'} className="text-decoration-none w-100 text-light"><button className="opp-btn fw-bold w-100 p-2 px-3" >Back to Home</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Camppackage