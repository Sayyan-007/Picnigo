import { useFormik } from "formik"
import { Axios } from "../../../axios"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createAgency } from "../../../Redux/agencySlice"

const AgencyLogin = () => {

    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const login = useFormik({
        initialValues: {
            Agency_Name: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                const { data } = await Axios.get('/agency/login', { params: values })
                console.log(data);
                localStorage.setItem("access_token", data.token)
                Dispatch(createAgency(data.AgencyDatas))
                toast.success(data.message)
                Navigate('/agency')


            }
            catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message || "Internal Error");
                } else {
                    toast.error("Network Error");
                }
                console.log(error);

            }
        }
    })

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/world.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form onSubmit={login.handleSubmit} action="" className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h1>Login Travel Agency</h1>
                    <input onChange={login.handleChange} value={login.values.username} placeholder="Agency Name" name="Agency_Name" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" type="text" />
                    <input onChange={login.handleChange} value={login.values.password} placeholder="password" name="password" style={{ color: "#E0E0E0", borderColor: "#E0E0E0" }} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" type="password" />
                    <div className="d-flex gap-3">
                        <button type="submit" className="login-btn p-2 fw-bold px-3">Login</button>
                        <button className="opp-btn p-2 px-3"><Link className="text-decoration-none text-light" to={'/agency/signup'}><h6 className="m-0">Don't have an Account</h6></Link></button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default AgencyLogin
