import { useState } from "react";

function Poster() {
  const [posterData, setposterData] = useState([
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/4000/2700/image/1bd9f11edbf77427.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/4000/2700/image/74f0ad81e44e6e6f.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/4000/2700/image/49c336ca72c1dcba.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/4000/2700/image/cae7ce62ff3880eb.jpeg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/4000/2700/image/5b309e98775e22e4.jpg?q=20",
    },
  ]);

  const poster = [...posterData, ...posterData];
  return (
    <div className="w-full h-[10rem] sm:h-[16rem] sm:rounded rounded-xl  mt-3 bg-[#ffffff] flex overflow-x-scroll scrollbar-hide">

     <div className="flex animate-poster whitespace-nowrap">
       {poster.map((item, index) => {
        return (
          <img className="w-[90rem] h-full flex-shrink-0" key={index} src={item.img} alt="" />
        );
      })}
      </div> 
     
    </div>
  );
}

export default Poster;
