import '../Style.css'

const Hero=()=>{
    return(
        <div className="container-fluid" style={{backgroundColor:"#F4F4F9"}}>
            <div className="row align-items-center">
                <div className="col-lg-6 ">
                    <h1 className='fw-bold text-center' style={{fontFamily:'cursive'}}>Embrace solo travel, experience freedom and endless discovery Packages.</h1>
                </div>
                <div className="col-lg-6 p-5">
                    <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100 rounded-3" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Hero