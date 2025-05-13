const HeroHotel=()=>{
    return(
        <div className="container-fluid" style={{backgroundColor:"#F4F4F9"}}>
            <div className="row align-items-center">
                <div className="col-lg-6 ">
                    <h1 className='fw-bold text-center' style={{fontFamily:'cursive'}}>
                    "Your Home Away From Home,<br />Comfortable Rooms for a Perfect Stay"
                    </h1>
                </div>
                <div className="col-lg-6 p-5">
                    <img src={`https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600`} className="w-100 rounded-3" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroHotel