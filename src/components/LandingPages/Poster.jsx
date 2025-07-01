import { useState } from "react";

function Poster () {
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

      return (
         <div className="w-full sm:h-[16rem] h-[8rem] rounded  mt-3 bg-[#ffffff] flex overflow-x-scroll scrollbar-hide">
        {posterData.map((item, index) => {
          return <img key={index} src={item.img} alt="" />;
        })}
        </div> 
      )

}

export default Poster;
