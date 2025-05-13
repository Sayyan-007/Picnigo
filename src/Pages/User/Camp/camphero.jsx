const HeroCamp=()=>{
    return(
        <div className="container-fluid" style={{backgroundColor:"#F4F4F9"}}>
            <div className="row align-items-center">
                <div className="col-lg-6 ">
                    <h1 className='fw-bold text-center' style={{fontFamily:'cursive'}}>
                    "Escape to the Wild - Relax, Recharge and Reconnect, <br />Explore Our Camps "
                    </h1>
                </div>
                <div className="col-lg-6 p-5">
                    <img src={`https://images.pexels.com/photos/3932976/pexels-photo-3932976.jpeg?auto=compress&cs=tinysrgb&w=600`} className="w-100 rounded-3" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroCamp