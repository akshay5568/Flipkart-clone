import { useLocation } from "react-router-dom";

function FlightBookings() {
  const location = useLocation();
  const { Flights } = location.state || { Flights: [] };
  return (
    <div className="w-full h-fit p-5 flex bg-[#f1f3f6] ">
      <div className="w-[30%] h-[50rem] bg-[#ffffff] ml-6"></div>

      <div className="w-[60%] h-[fit] bg-[#f1f3f6]  ml-5 p-5">
        <h1>Available Flights</h1>
        <div></div>

        <div className="w-full h-fit flex gap-25 p-3 px-4 mt-5 pl-7 bg-[#ffffff] text-xs rounded">
          <h5>Sort by</h5>
          <h5>DEPART</h5>
          <h5>DURATION</h5>
          <h5>ARRIVAL</h5>
          <h5>PRICE</h5>
        </div>

        {Flights.length > 0 ? (
          Flights.map((items, index) => {
            return (
              <div className="flex gap-15 w-full h-fit items-center  bg-[#ffffff] mt-3 p-3 px-4 py-9 rounded hover:border border-blue-500">
                <div className="flex gap-5 w-[15%] items-center ">
                  { <img className="w-[40px]" src={items.img} alt="" /> }
                  <div className="text-xs">
                    <h6>{items.airline}</h6>
                    <h6>{items.flightNumber}</h6>
                  </div>
                </div>

                <h6 className="m-auto text-lg">{items.departure.time}</h6>
                <div className="w-[10%] m-auto text-xs text-gray-500">
                  <h6>{items.duration}</h6>
                  <h6>---------</h6>
                  <h6>undefined</h6>
                </div>

                <h6 className="m-auto text-lg">{items.arrival.time}</h6>

                <div className="m-auto text-lg">
                  <h6>₹{items.price}</h6>
                </div>

                <button className="p-3 bg-[#fb641b] m-auto px-6 text-white rounded">Book</button>
              </div>
            );
          })
        ) : (
          <h1>No Flight's Available's</h1>
        )}
      </div>
    </div>
  );
}

export default FlightBookings;
