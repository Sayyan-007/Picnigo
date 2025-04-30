
import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTourismPackage } from "../../../Redux/toursimpackageSlice";
import { ArrowBigDown } from "lucide-react";

const TourismPackage=()=>{

const myStyle={
    color: "#E0E0E0",
    borderColor: "#E0E0E0"

}
    const {id,Agency_Name}= useSelector(store=>store.agency)
    
    const Dispatch = useDispatch()

    const insertValues = useFormik({
        initialValues:{
            id:"",
            Destination_Name:"",
            Destination_Image:"",
            Duration:"",
            Category:"",
            Climate:"",
            Location:"",
            District:"",
            State:"",
            Country:"",
            Near_Locations:"",
            Prize:""
        },onSubmit:async(values,{resetForm})=>{

            try {

                const {data} = await Axios.post('/tourismpackage/create',{...values, Agency_id:id,Agency_name:Agency_Name})
                console.log(data);
                toast.success('Package has Adeed Successfully')
                Dispatch(createTourismPackage(data.TourismPackagesDatas))
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
            <div >
                <form action="" onSubmit={insertValues.handleSubmit} className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h1 className="text-center fw-bold">Create Your Tourism Package</h1>
                    <input onChange={insertValues.handleChange}  value={insertValues.values.Destination_Name} type="text"  name="Destination_Name"  placeholder="Destination_Name"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange}  value={insertValues.values.Destination_Image} type="text" name="Destination_Image"  placeholder="Destination_Image" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange}  value={insertValues.values.Duration} type="text" name="Duration"  placeholder="Duration" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <div>
                        <h4>Category: <ArrowBigDown/></h4>
                        <div className="d-flex gap-2 justify-content-center">
                            <label className="fs-5 fw-bold" htmlFor="solo">solo</label>
                            <input onChange={insertValues.handleChange} value="solo" checked={insertValues.values.Category === "solo"} type="radio" id="solo" name="Category"  placeholder="" />
                            <label className="fs-5 fw-bold" htmlFor="couple">couple</label>
                            <input onChange={insertValues.handleChange} value="couple" checked={insertValues.values.Category === "couple"} type="radio" id="couple" name="Category"  placeholder="" />
                            <label className="fs-5 fw-bold" htmlFor="group">group</label>
                            <input onChange={insertValues.handleChange} value="group" checked={insertValues.values.Category === "group"} type="radio" id="group" name="Category"  placeholder="" />
                        </div>
                    </div>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Climate} type="text" name="Climate"  placeholder="Climate" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Location} type="text" name="Location"  placeholder="Location" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Near_Locations} type="text" name="Near_Locations"  placeholder="Near_Locations" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.District} name='District' type="text"  placeholder="District" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}  />
                    <input onChange={insertValues.handleChange} value={insertValues.values.State} name='State' type="text"  placeholder="State"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <input onChange={insertValues.handleChange} value={insertValues.values.Country} name='Country' type="text"  placeholder="Country"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <input onChange={insertValues.handleChange} value={insertValues.values.Prize} name='Prize' type="number"  placeholder="Prize"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <div className="d-flex gap-2">
                       <button className="login-btn w-50 p-2 fw-bold px-3" type="submit" >Submit</button>
                       <Link to={'../'} className="text-decoration-none w-100 text-light"><button className="opp-btn fw-bold w-100 p-2 px-3" >Back to Home</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default TourismPackage