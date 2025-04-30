import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Axios } from "../../../axios";
import toast from "react-hot-toast";

const UpdataHotelpackages = () => {

    const myStyle = {
        color: "#E0E0E0",
        borderColor: "#E0E0E0"

    }

    const { id } = useParams();
    const [updateHotel_Name, setupdateHotel_Name] = useState()
    const [updateHotel_Image, setupdateHotel_Image] = useState()
    const [updateContact_Number, setupdateContact_Number] = useState()
    const [updateDuration, setupdateDuration] = useState()
    const [updatePrize, setupdatePrize] = useState()

    const handleupdate = async (event) => {

        event.preventDefault()

        try {
            const response = await Axios.patch('hotelpackage/update', { Hotel_Name: updateHotel_Name, Hotel_Image: updateHotel_Image, Contact_Number: updateContact_Number, Duration: updateDuration, Prize: updatePrize }, { params: { id } })
            console.log(response);
            if (response.status === 200) {
                toast.success(response.data.message || "Updated Sucessfully")
            }
            else {
                toast.error(response.data.message || "Updated as Failed")
            }
        }
        catch (err) {
            console.log(err);
            toast.error(err.message || "Updated as Failed")
        }

    }


    return (

        <div className="min-vh-100 py-4 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/world.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form onSubmit={handleupdate} action="" className="d-flex flex-column w-100 gap-2 " style={{ color: "#E0E0E0" }}>
                    <h2>Update hotel Package</h2>
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Hotel Name" value={updateHotel_Name} onChange={event => setupdateHotel_Name(event.target.value)} />
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Hotel Image" value={updateHotel_Image} onChange={event => setupdateHotel_Image(event.target.value)} />
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Contact_Number" value={updateContact_Number} onChange={event => setupdateContact_Number(event.target.value)} />
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Duration" value={updateDuration} onChange={event => setupdateDuration(event.target.value)} />
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Prize" value={updatePrize} onChange={event => setupdatePrize(event.target.value)} />
                    <div className="d-flex justify-content-around gap-2 px-2">
                        <button type="submit" className="login-btn w-50 p-2 fw-bold px-3">Submit</button>
                        <Link className="text-decoration-none w-100 text-light" to={'/hotelmangment'}><button className="opp-btn fw-bold w-100 p-2 px-3">Back to Home</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdataHotelpackages
