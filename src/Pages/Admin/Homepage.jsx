import { useEffect, useState } from "react";
import "./AdminCss.css";
import Slidebar from "./Slidebar";
import NavbarAdmin from "./NavbarAdmin";
import { Axios } from "../../axios";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"


function Homepage() {

  const [amountdata,setamountdata] =useState([])
  const [bookedpackageCount,setbookedpackageCount] =useState([])
  const [userCount,setuserCount] =useState([])
  const [agencyCount,setagencyCount] =useState([])
  const [mangmentCount,setmangmentCount] =useState([])
  const [organizationCount,setorganizationCount] =useState([])
  const [total,settotal] =useState([])


  const agencyTotalPrize = async () => {
    try {
        const { data } = await Axios.get(`book/agency/display`)
        console.log(data);
        settotal(data.total);
        setbookedpackageCount(data.count);
        setamountdata(data?.Amount)        
    }
    catch (error) {
        console.log(error, error.response?.data || error.message);
    }
  }

  const usercount = async()=>{
    try 
    {

      const {data} = await Axios.get('admin/userdata')
      setuserCount(data.count)

    } 
    catch (error) 
    {
      console.log(error);
    }
  }
  const agencycount = async()=>{
    try 
    {

      const {data} = await Axios.get('/agency/count')
      setagencyCount(data.count)

    } 
    catch (error) 
    {
      console.log(error);
    }
  }
  const mangmentcount = async()=>{
    try 
    {

      const {data} = await Axios.get('/hotelmangment/count')
      setmangmentCount(data.count)

    } 
    catch (error) 
    {
      console.log(error);
    }
  }
  const organizationcount = async()=>{
    try 
    {

      const {data} = await Axios.get('/oraganization/count')
      setorganizationCount(data.count)

    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    agencyTotalPrize();
    usercount();
    agencycount();
    mangmentcount();
    organizationcount();
  },[])


console.log("Package Total Amount:",amountdata);
console.log("User Count:",userCount);
console.log("Agency Count:",agencyCount);
console.log("Mangment Count:",mangmentCount);
console.log("Organization Count:",organizationCount);
console.log("Bookedp Package Count:",bookedpackageCount);
console.log("Total :- " , total);





  const ChartData = {
    labels: amountdata.map((item)=>item._id),
    datasets:[
      {
          label:"Total Amount",
          data:amountdata.map((item)=>item.totalPackageAmount),
          borderWidth:1,
          backgroundColor: "#F9A826", // Semi-transparent blue
          borderColor: "rgb(0, 0, 0)", // Solid blue border
          barThickness: 80,
      }
    ]
  }
  console.log("Bar Chart",ChartData);
  

      const option1 ={
          responsive:true,
          plugins:{
              legend:{
                position:"top",
                labels:{
                  font:{family:"Georgia, 'Times New Roman', serif",size: 16, weight: "bold"},
                  color:"#E0E0E0"
                } 
              }
          },
            scales:{
              x:
              {title:{
                      display:true,text:"Agency Name",
                      font:{family:"'Palatino Linotype', 'Book Antiqua', serif",size: 16, weight: "bold" },
                      color:"#E0E0E0"
                      },
                grid:{display:false},
                ticks:{color:"#E0E0E0"}
              },
              y:
              {title:{
                      display:true,text:"Revenue",
                      font:{family:"Georgia, 'Times New Roman', serif",size: 16, weight: "bold" },
                      color:"#E0E0E0"
                      },
                      ticks:{color:"#E0E0E0"}
              }
                
            }
      }



  return (
    <div className="container-fluid" style={{backgroundColor:"#1E1E2F"}}>
      <div className="row vh-100">
        <div className="col-md-3 p-0 ">
          <Slidebar/>
        </div>
        <div className="col-md-9">
          <NavbarAdmin/>
          <div className="row justify-content-center text-center" style={{backgroundColor:"#1E1E2F"}}>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
              <div className="card" style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                <h1>{userCount}</h1>
                <p>Users</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
              <div className="card" style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                <h1>{agencyCount}</h1>
                <p>Travel Agency</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
              <div className="card" style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                <h1>{mangmentCount}</h1>
                <p>Hotel Mangment</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
              <div className="card" style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                <h1>{organizationCount}</h1>
                <p>Camp Oraganizers</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center" style={{backgroundColor:"#1E1E2F"}}>
            <div className="col-lg-9 col-md-12 col-md-12 mt-4">
              <Bar data={ChartData} options={option1}></Bar>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-4 mt-4 align-items-center justify-content-center">
              <div className="row">
                <div className=" text-center p-3 " style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                  <h1>{bookedpackageCount}</h1>
                  <p className="text-center">Number of Booking</p>
                </div>
                <div className=" text-center p-3 mt-4" style={{backgroundColor:"#2A2A3A",color:"#E0E0E0"}}>
                  <h1>{total}</h1>
                  <p className="text-center">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
