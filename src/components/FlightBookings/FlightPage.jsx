import axios from "axios";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BannerForFlight from "./BannerForFlight";
function FlightPage() {
  const [from, setFrom] = useState("");
  const [to, setTO] = useState("");


  const dummyFlights = [
  {
    flightNumber: "AI202",
    airline: "Air India",
    img:'https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-AI.png?q=50',
    departure: {
      airport: "Indira Gandhi International Airport",
      city_name: "delhi",
      iata: "DEL",
      time: "10:00:00"
    },
    arrival: {
      airport: "Chhatrapati Shivaji Maharaj International Airport",
      iata: "BOM",
      city_name: "mumbai",
      time: "12:15:00"
    },
    duration: "2h 15m",
    price: 5500,
    status: "scheduled"
  },
  {
    flightNumber: "SG404",
    airline: "SpiceJet",
    img:'https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-S5.png?q=50',
    departure: {
      airport: "Indira Gandhi International Airport",
      iata: "DEL",
      city_name: "delhi",
      time: "14:30:00"
    },
    arrival: {
      airport: "Kempegowda International Airport",
      iata: "BLR",
     city_name: "Bengaluru",
      time: "17:30:00"
    },
    duration: "3h 00m",
    price: 4900,
    status: "scheduled"
  },
  {
    flightNumber: "6E333",
    airline: "IndiGo",
    img:'https://rukminim2.flixcart.com/fk-p-travel/100/100/storage/airlineLogos/airlineImage-6E.png?q=50',
    departure: {
      airport: "Chhatrapati Shivaji Maharaj International Airport",
      city_name: "mumbai",
      iata: "BOM",
      time: "06:45:00"
    },
    arrival: {
      airport: "Netaji Subhas Chandra Bose International Airport",
       city_name:"Kolkata",
      iata: "CCU",
      time: "09:30:00"
    },
    duration: "2h 45m",
    price: 5200,
    status: "delayed"
  }
];

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
    <div className="w-full h-fit bg-[#f1f3f6] p-3">
      <div className="w-full h-[55vh] relative">
        <img
          className="w-full h-[90%] object-top"
          src="https://rukminim2.flixcart.com/www/4000/3000/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50"
          alt=""
        />

        <div className="bg-white flex justify-center items-center gap-5 w-[90%] h-[20vh] absolute rounded-md top-[50%] left-[5%]">
          <div className="flex">
            <form action="" className="flex gap-7">
              <input
                onChange={(e) => setFrom(e.target.value)}
                value={from}
                className="border border-gray-300 p-3 px-8 text-start"
                type="text"
                placeholder="From"
              />

              <input
                onChange={(e) => setTO(e.target.value)}
                value={to}
                className="border border-gray-300 p-3 px-8  text-start"
                type="text"
                placeholder="To"
              />


            
           
              <button
                onClick={(e) => ButtonH(e)}
                className="border flex items-center gap-1 px-5 bg-[#2874f0] text-white p-3 rounded"
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
  );
}

export default FlightPage;
