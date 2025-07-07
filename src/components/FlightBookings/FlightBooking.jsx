import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

function FlightBookings() {
  const location = useLocation();
  const { Flights } = location.state || { Flights: [] };
  return (
         <>
         <Navbar/>
    <div className="w-full h-fit md:p-5 flex bg-[#f1f3f6] ">
      <div className="w-[30%] h-[50rem] bg-[#ffffff] md:ml-6 md:inline hidden"></div>

      <div className="mg:w-[60%] w-full h-[fit] bg-[#f1f3f6]  md:ml-5 md:p-5 p-2">
        <h1>Available Flights</h1>
        <div></div>

        <div className="w-full h-fit md:flex hidden gap-25 p-3 px-4 mt-5 pl-7 bg-[#ffffff] text-xs rounded">
          <h5>Sort by</h5>
          <h5>DEPART</h5>
          <h5>DURATION</h5>
          <h5>ARRIVAL</h5>
          <h5>PRICE</h5>
        </div>

        {Flights.length > 0 ? (
          Flights.map((items, index) => {
            return (
         
              <div className="flex md:gap-15 md:w-full md:h-fit items-center  bg-[#ffffff] mt-3 p-3 md:px-4 md:py-9 rounded hover:border border-blue-500">
                <div className="md:flex gap-5 md:w-[15%] items-center ">
                  { <img className="w-[40px]" src={items.img} alt="" /> }
                  <div className="text-xs">
                    <h6>{items.airline}</h6>
                    <h6>{items.flightNumber}</h6>
                  </div>
                </div>

                <h6 className="m-auto md:text-lg text-xs">{items.departure.time}</h6>
                <div className="w-[10%] m-auto text-xs text-gray-500">
                  <h6>{items.duration}</h6>
                  <h6 className="md:inline hidden">---------</h6>
                  <h6 className="md:inline hidden">undefined</h6>
                </div>

                <h6 className="m-auto md:text-lg text-xs">{items.arrival.time}</h6>

                <div className="m-auto text-lg">
                  <h6 className="md:text-lg text-xs font-semibold">₹{items.price}</h6>
                </div>

                <button className="md:p-3 bg-[#fb641b] m-auto px-6 text-white rounded md:inline hidden">Book</button>
              </div>
            );
          })
        ) : (
          <h1>No Flight's Available's</h1>
        )}
      </div>
    </div>
    </>
  );
}

export default FlightBookings;
