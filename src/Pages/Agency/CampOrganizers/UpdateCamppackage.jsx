import { useState } from "react";
import { useParams,Link } from "react-router-dom"
import { Axios } from "../../../axios";
import toast from "react-hot-toast";
import { ArrowBigDown } from "lucide-react";

const UpdateCampPackage = () => {

    const myStyle={
        color: "#E0E0E0",
        borderColor: "#E0E0E0"
    
    }

    const { id } = useParams();
    const [updatecampName, setupdatecampName] = useState()
    const [updatecampIcon, setupdatecampIcon] = useState()
    const [updatelocation, setupdatelocation] = useState()
    const [updatecontactNumber, setupdatecontactNumber] = useState()
    const [updatedate, setupdatedate] = useState()
    const [updateduration, setupdateduration] = useState()
    const [updateprize, setupdateprize] = useState()
    const [updatetype, setupdatetype] = useState()

    const handleupdate = async (event) => {

        event.preventDefault()

        try {
            const response = await Axios.patch('camppackage/update', { 
                campName: updatecampName, 
                campIcon: updatecampIcon, 
                location: updatelocation, 
                contactNumber: updatecontactNumber, 
                duration: updateduration, 
                date: updatedate, 
                prize: updateprize, 
                type: updatetype }, 
                { params: { id } }
            )


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
                <h1 className="fw-bolder text-center m-0">Update the Package Elements</h1>
                    <input type="text" style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Destination Name" value={updatecampName} onChange={event => setupdatecampName(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="Destination Image" value={updatecampIcon} onChange={event => setupdatecampIcon(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="location" value={updatelocation} onChange={event => setupdatelocation(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="contactNumber" value={updatecontactNumber} onChange={event => setupdatecontactNumber(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="duration" value={updateduration} onChange={event => setupdateduration(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="date" value={updatedate} onChange={event => setupdatedate(event.target.value)} />
                    <input type="text"  style={myStyle} className="p-2 border border-3 rounded-5 w-100 bg-transparent placeholder-text" placeholder="prize" value={updateprize} onChange={event => setupdateprize(event.target.value)} />
                    <h5 className="fw-bold">Category:<ArrowBigDown/></h5>
                    <div className="d-flex justify-content-center gap-3">

                        <label>
                            <input
                                type="radio"
                                value="regular"
                                checked={updatetype === "regular"}
                                onChange={() => setupdatetype("regular")}
                            /> Regular
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="stranger"
                                checked={updatetype === "stranger"}
                                onChange={() => setupdatetype("stranger")}
                            /> Stranger
                        </label>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className="login-btn w-50 p-2 fw-bold px-3">Submit</button>
                        <button className='opp-btn fw-bold w-50 p-2 px-3'><Link className='text-decoration-none w-50 text-light' to={'../'}><a>Back</a></Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCampPackage
