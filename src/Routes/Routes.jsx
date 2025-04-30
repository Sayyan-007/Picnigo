import {BrowserRouter,Routes, Route} from 'react-router-dom'
import UserHomePage from '../Components/UserHomepage'
import Signup from '../Pages/User/Signup'
import Login from '../Pages/User/Login'
import AgencyHomePage from '../Components/AgencyHomepage'
import AgencyLogin from '../Pages/Agency/TourismPackages/Login'
import AgencySignup from '../Pages/Agency/TourismPackages/Signup'
import UpdateAgency from '../Pages/Agency/TourismPackages/Updatedata'
import TourismPackage from '../Pages/Agency/TourismPackages/ToursimPackage'
import UpdataTourismPackages from '../Pages/Agency/TourismPackages/UpdataTourismPackages'
import UserTravelPackage from '../Components/UserTravelPackage'
import HotelMangmentHomepage from '../Components/HotelMangmentHomepage'
import HotelLogin from '../Pages/Agency/HotelMangment/Login'
import HotelSignup from '../Pages/Agency/HotelMangment/Signup'
import HotelPackages from '../Pages/Agency/HotelMangment/HotelPackages'
import UpdataHotelpackages from '../Pages/Agency/HotelMangment/Updatehotelpackages'
import CampLogin from '../Pages/Agency/CampOrganizers/Login'
import CampSignup from '../Pages/Agency/CampOrganizers/Signup'
import Homapagecamporganizers from '../Components/CompOraganization'
import Camppackage from '../Pages/Agency/CampOrganizers/CampPackage'
import UpdateCampPackage from '../Pages/Agency/CampOrganizers/UpdateCamppackage'
import Userdata from '../Pages/Admin/Userdata'
import Travalagency from '../Pages/Admin/Travalagency'
import Camporganization from '../Pages/Admin/Camporganization'
import Hotelmanagment from '../Pages/Admin/Hotelmanagment'
import ViewAgencyPackages from '../Pages/Admin/ViewAgencyPackages'
import ViewMangmentPackages from '../Pages/Admin/ViewMangmentPackages'
import ViewOrganizationpackages from '../Pages/Admin/ViewOrganization'
import Solopackage from '../Pages/User/Travelpackage/SoloPackage'
import CouplePackage from '../Pages/User/Travelpackage/CouplePackage'
import GroupPackage from '../Pages/User/Travelpackage/GroupPackage'
import UserHotelMangment from '../Components/UserHotelMangment'
import Rooms from '../Pages/User/Hotelmangment/rooms'
import Resort from '../Pages/User/Hotelmangment/resort'
import Dormitory from '../Pages/User/Hotelmangment/dormitory'
import Stranger from '../Pages/User/Camp/strangers'
import Regular from '../Pages/User/Camp/regular'
import UserCampPackage from '../Components/UserCamp'
import BookNow from '../Pages/User/BooknowAgency'
import Success from '../Pages/User/Success'
import BookNowhotel from '../Pages/User/Booknowhotel'
import BookNowCamp from '../Pages/User/BooknowCamp'
import Homepage from '../Pages/Admin/Homepage'



const Routeway=()=>{
    return(

        <BrowserRouter>

{/* user */}

            <Routes>
                <Route path='' element={<UserHomePage/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='travelpackage'>
                    <Route path='' element={<UserTravelPackage/>}/>
                    <Route path='solo' element={<Solopackage/>}/>
                    <Route path='couple' element={<CouplePackage/>}/>
                    <Route path='group' element={<GroupPackage/>}/>
                </Route>
                <Route path='hotelpackage'>
                    <Route path='' element={<UserHotelMangment/>}/>
                    <Route path='rooms' element={<Rooms/>}/>
                    <Route path='resort' element={<Resort/>}/>
                    <Route path='dormitory' element={<Dormitory/>}/>
                </Route>
                <Route path='camp'>
                    <Route path='' element={<UserCampPackage/>}/>
                    <Route path='stranger' element={<Stranger/>}/>
                    <Route path='regular' element={<Regular/>}/>
                </Route>
                <Route path='booknowagency/:id' element={<BookNow/>}/>
                <Route path='booknowhotel/:id' element={<BookNowhotel/>}/>
                <Route path='booknowcamp/:id' element={<BookNowCamp/>}/>
                <Route path='success' element={<Success/>}/>

                
                    
            </Routes>

{/* agency */}

            <Routes>
                <Route path='/agency'>
                    <Route path='' element={
                        <AgencyHomePage></AgencyHomePage>
                    }>
                    </Route>

                    <Route path='login' element={
                        <AgencyLogin></AgencyLogin>
                    }></Route>

                    <Route path='signup' element={
                        <AgencySignup></AgencySignup>
                    }></Route>

                    <Route path='update' element={
                        <UpdateAgency></UpdateAgency>
                    }></Route>

                    <Route path='addtourismpackage' element={
                        <TourismPackage></TourismPackage>
                    }></Route>

                    <Route path='UpdataTourismPackages/:id' element={
                    <UpdataTourismPackages></UpdataTourismPackages>    
                    }></Route>

                </Route>
                
            </Routes>

{/* Hotel Mangment */}

            <Routes>
                <Route path='/hotelmangment'>
                    <Route path=''  element={<HotelMangmentHomepage/>}></Route>
                    <Route path='login'  element={<HotelLogin/>}></Route>
                    <Route path='signup'  element={<HotelSignup/>}></Route>
                    <Route path='hotelpackage'  element={<HotelPackages/>}></Route>
                    <Route path='updatehotelpackages/:id'  element={<UpdataHotelpackages/>}></Route>

                </Route>
            </Routes>


            <Routes>
                <Route path='/camporganization'>
                    <Route path=''  element={<Homapagecamporganizers/>}></Route>
                    <Route path='login'  element={<CampLogin/>}></Route>
                    <Route path='signup'  element={<CampSignup/>}></Route>
                    <Route path='camppackage'  element={<Camppackage/>}></Route>
                    <Route path='update/:id'  element={<UpdateCampPackage/>}></Route>
                </Route>
            </Routes>



            <Routes>
                <Route path='/admin'>
                    <Route path=''  element={<Homepage/>}></Route>
                    <Route path='user'  element={<Userdata/>}></Route>
                    <Route path='travelagency' >
                        <Route path='' element={<Travalagency/>}></Route>
                        <Route path='viewagencypackage/:id/:name' element={<ViewAgencyPackages/>}></Route>
                    </Route>
                    <Route path='hotelmangment'>
                        <Route path='' element={<Hotelmanagment/>}></Route>
                        <Route path='viewmangmentpackage/:id/:name' element={<ViewMangmentPackages/>}></Route>
                    </Route>
                    <Route path='camporganizer'>
                        <Route path='' element={<Camporganization/>}></Route>
                        <Route path='viewcamppackage/:id/:name' element={<ViewOrganizationpackages/>}></Route>
                    </Route>
                </Route>
            </Routes>


        </BrowserRouter>

    )
}

export default Routeway
