import { useFormik } from "formik"
import { Axios } from "../../../axios"
import toast from "react-hot-toast"
import {Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createHotel } from "../../../Redux/hotelSlice"

const HotelLogin=()=>{

    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const login=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:async(values)=>{
            try 
            {
                const {data} = await Axios.get('/hotelmangment/login',{params:values})
                console.log(data);
                localStorage.setItem("access_token" , data.token)
                Dispatch(createHotel(data.HotelMangmentDatas))
                toast.success(data.message)
                Navigate('/hotelmangment')
                
                
            }
            catch(error) 
            {
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
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/world.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form onSubmit={login.handleSubmit} className="d-flex flex-column w-100 gap-2" style={{ color: "#E0E0E0" }}>
                    <h1>Login Hotel Management</h1>
                    <input onChange={login.handleChange} value={login.values.username} placeholder="Agency Name" name="username" type="text" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }}/>
                    <input onChange={login.handleChange} value={login.values.password} placeholder="Password" name="password" type="password" className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }}/>
                    <div className="d-flex gap-3">
                        <button type="submit" className="login-btn p-2 fw-bold px-3">Login</button>
                        <button className="opp-btn p-2 px-3"><Link to="/hotelmangment/signup" className="text-decoration-none text-light"><h6 className="m-0">Don't have a Management Account</h6></Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HotelLogin
