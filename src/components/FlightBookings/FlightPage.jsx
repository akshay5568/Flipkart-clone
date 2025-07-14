import axios from "axios";
import { useState,useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BannerForFlight from "./BannerForFlight";
import Navbar from "../Navbar";

function FlightPage() {
  const [from, setFrom] = useState("");
  const [to, setTO] = useState("");

  const [dummyFlights , setdummyFlights]  = useState()

useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/flights`).then((res) => setdummyFlights(res.data)).catch((err) => console.log(err));
},[])

 
console.log(dummyFlights);

   const navigate = useNavigate();

   const filterdData = [];
   
  const ButtonH = async (e) => {
    e.preventDefault();
 
         const filterDataFrom = dummyFlights.filter((item,) => item.departure.city_name == from);
          
         filterdData.push(filterDataFrom)
         const filterDataTo = dummyFlights.filter((item,) => item.departure.city_name == to);
          
         filterdData.push(filterDataTo)
         
         const oneArr = filterdData.flat();
         

       navigate("/flightbooking" , {state: {Flights: oneArr}});
  };

  return (
    <>
    <Navbar/>
    <div className="w-full h-fit bg-[#f1f3f6] p-3">
      <div className="w-full h-[55vh] relative">
        <img
          className="w-full h-[90%] object-top"
          src="https://rukminim2.flixcart.com/www/4000/3000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50"
          alt=""
        />

        <div className="bg-white flex justify-center items-center gap-5 w-[90%] sm:h-[20vh] absolute rounded-md top-[50%] left-[5%]">
          <div className="md:flex">
            <form action="" className="md:flex gap-7 text-center ">
              <input
                onChange={(e) => setFrom(e.target.value)}
                value={from}
                className="border border-gray-300 p-3 px-8 text-start m-2"
                type="text"
                placeholder="From"
              />

              <input
                onChange={(e) => setTO(e.target.value)}
                value={to}
                className="border border-gray-300 p-3 px-8  text-start m-2"
                type="text"
                placeholder="To"
              />


            
           
              <button
                onClick={(e) => ButtonH(e)}
                className="border flex items-center gap-1 px-5 bg-[#2874f0] text-white p-3 rounded m-auto"
              >
                <IoMdSearch />
                SEARCH
              </button>


            

            </form>
          </div>
        </div>
      </div>

          <BannerForFlight/>
    </div>
    </>
  );
}

export default FlightPage;
