import {useFormik} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Axios } from '../../axios'
import { createUser } from '../../Redux/userSlice'
import toast from 'react-hot-toast'
import './Style.css'


const Signup=()=>{

    const Navigate =useNavigate()
    const Dispatch = useDispatch()

    const signup = useFormik({
        initialValues:{
            fullName:"",
            username:"",
            email:"",
            phone_Number:"",
            password:"",
            confirm_password:""
        },
        onSubmit:async(values)=>{

            try 
            {
                const {data} = await Axios.post('/user/signup',values)
                console.log(data);
                console.log(data.token);
                localStorage.setItem("access_token",data.token)
                Dispatch(createUser(data.UserDatas))
                toast.success(data.message)
                Navigate('/')
                
                
            } 
            catch (error)   
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
        <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('world.jpg')`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="">
                <form onSubmit={signup.handleSubmit} className="d-flex flex-column w-100 gap-4 gap-sm-4 " style={{color:"#E0E0E0"}}>
                    <h1 className='fw-bolder  fs-1 text-center'>SignUp</h1>
                    <div className='d-flex flex-column flex-sm-row gap-3'>
                        <input onChange={signup.handleChange} value={signup.values.fullName} name='fullName' type="text" placeholder="full Name" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />
                        <input onChange={signup.handleChange} value={signup.values.username} name='username' type="text" placeholder="username" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />
                    </div>
                    <div className='d-flex flex-column flex-sm-row gap-3'>
                        <input onChange={signup.handleChange} value={signup.values.email} name='email' type="email" placeholder="email" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />
                        <input onChange={signup.handleChange} value={signup.values.phone_Number} name='phone_Number' type="number" placeholder="phone Number" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />
                    </div>
                    <div className='d-flex flex-column flex-sm-row gap-3'>
                        <input onChange={signup.handleChange} value={signup.values.password} name='password' type="password" placeholder="password" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />                                 
                        <input onChange={signup.handleChange} value={signup.values.confirm_password} name='confirm_password' type="password" placeholder="confirm password" className=" placeholder-text bg-transparent p-2 w-100 border border-3 rounded-5 ps-3 fw-bold" />
                    </div>
                    <div className='d-flex flex-column flex-sm-row gap-3 pb-4'>
                        <button type="submit" className="login-btn p-2 fw-bold px-3">Sign Up</button>
                        <button className='opp-btn p-2 px-3'><Link className='text-decoration-none text-light' to={'/login'}><h6 className='m-0'>Already have an Account</h6></Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
