
import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createhotelPackage } from "../../../Redux/hotelpackageSlice";
import { ArrowBigDown } from "lucide-react";

const Hotelpackage=()=>{

    const myStyle={
        color: "#E0E0E0",
        borderColor: "#E0E0E0"
    
    }

    const {id,username}= useSelector(store=>store.hotel)
    
    const Dispatch = useDispatch()

    const insertValues = useFormik({
        initialValues:{
            id: "",
            Hotel_Name: "",
            Hotel_Image: "",
            Duration: "",
            Contact_Number: "",
            Type: "",
            Location: "",
            District: "",
            State: "",
            Prize: ""

        },onSubmit:async(values,{resetForm})=>{

            try {

                const {data} = await Axios.post('/hotelpackage/create',{...values, Mangment_id:id,Mangment_name:username})
                console.log(data);
                toast.success('Package has Added Successfully')
                Dispatch(createhotelPackage(data.HotelPackagesDatas))
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
                    <h1 className="fw-bolder text-center">Create Hotel package</h1>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Hotel_Name} type="text"  name="Hotel_Name"  placeholder="Hotel_Name"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Hotel_Image} type="text" name="Hotel_Image"  placeholder="Hotel_Image" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Contact_Number} type="text" name="Contact_Number"  placeholder="Contact_Number" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Duration} type="text" name="Duration"  placeholder="Duration" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <div>
                        <h4>Caregory<ArrowBigDown/></h4>
                        <div className="d-flex gap-2">
                            <label htmlFor="Rooms">Rooms</label>
                            <input onChange={insertValues.handleChange} value="Rooms" checked={insertValues.values.Type === "Rooms"} type="radio" id="Rooms" name="Type" />
                            <label htmlFor="dormitory_room">dormitory_room</label>
                            <input onChange={insertValues.handleChange} value="dormitory_room" checked={insertValues.values.Type === "dormitory_room"} type="radio" id="dormitory_room" name="Type" />
                            <label htmlFor="resort">resort</label>
                            <input onChange={insertValues.handleChange} value="resort" checked={insertValues.values.Type === "resort"} type="radio" id="resort" name="Type" />
                        </div>
                    </div>
                    <input onChange={insertValues.handleChange} value={insertValues.values.Location} type="text" name="Location"  placeholder="Location" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}/>
                    <input onChange={insertValues.handleChange} value={insertValues.values.District} name='District' type="text"  placeholder="District" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle}  />
                    <input onChange={insertValues.handleChange} value={insertValues.values.State} name='State' type="text"  placeholder="State"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <input onChange={insertValues.handleChange} value={insertValues.values.Prize} name='Prize' type="number"  placeholder="Prize"  className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={myStyle} />
                    <div className="d-flex justify-content-around gap-4 px-2">
                       <button className="login-btn w-50 p-2 fw-bold px-3" type="submit" >Submit</button>
                       <Link to={'../'} className="text-decoration-none w-100 text-light"><button className="opp-btn fw-bold w-100 p-2 px-3" >Back to Home</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hotelpackage