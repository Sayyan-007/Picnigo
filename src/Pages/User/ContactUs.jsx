import { useFormik } from "formik"
import toast from "react-hot-toast";
import { Axios } from "../../axios";
import { useDispatch } from "react-redux";
import { createmessgae } from "../../Redux/contactusSlice";

const ContactUs=()=>{

    const Dispatch = useDispatch()

    const message = useFormik({
        initialValues:{
            username:"",
            number:"",
            email:"",
            message:""
        },onSubmit:async(values,{resetForm})=>{
            try 
            {
                const {data} = await Axios.post('/user/postmessage',values)
                console.log(data);
                console.log(data.token);
                Dispatch(createmessgae(data.data))
                toast.success(data.message)
                resetForm()

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
        <div  className='py-5' style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <form action="" onSubmit={message.handleSubmit}>
                            <h1 className="fw-bold">Contact Us </h1>
                            <h4 className="fw-lighter">
                            Contact your reliable travel agency in Calicut and begin planning your perfect getaway today!
                            </h4>
                            <div className="row pt-2">
                                <div className="col-md-6 d-flex flex-column">
                                    <label htmlFor="name" className="fw-lighter fs-5">Name</label>
                                    <input  onChange={message.handleChange} name='username' value={message.values.username} type="text" id="username"  className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-md-6 d-flex flex-column">
                                    <label htmlFor="contactnumber" className="fw-lighter fs-5">Contact Number</label>
                                    <input  onChange={message.handleChange} name='number' value={message.values.number} type="number" id="number"  className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-lg-12  pt-2 d-flex flex-column">
                                    <label htmlFor="email" className="fw-lighter fs-5">Email</label>
                                    <input  onChange={message.handleChange} name='email' value={message.values.email} type="email" id="email" className="bg-transparent p-2"style={{ border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="col-lg-12  pt-2 d-flex flex-column">
                                    <label htmlFor="Message" className="fw-lighter fs-5">Message</label>
                                    <input  onChange={message.handleChange} name='message' value={message.values.message} type="text" id="message" className="bg-transparent p-1 " style={{lineHeight:"70px", border:"2px solid #262262",borderRadius:"30px"}}/>
                                </div>
                                <div className="text-end">
                                    <button className="opp-btn rounded-3 p-2 px-3 fw-medium mt-3" type="submit">submit</button>
                                </div>

                            </div>
                         </form>
                    </div>
                    <div className="col-lg-6 text-center">
                        <iframe 
                            title="google map"
                            className="mw-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.091011312833!2d75.8325792!3d11.2477378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe50ea0b7d%3A0xc4e01eaa6234847e!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1658139482616!5m2!1sen!2sin" 
                            allowFullScreen=""
                            height={400}
                            width={500}
                            loading="lazy">    
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs