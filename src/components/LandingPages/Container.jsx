import { useState } from "react";


function Container () {

     const [containerProducts, setContainerProducts] = useState([
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/01eef3b8da8c237c.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/277dfe05024c2fb6.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/db60c53388aa0f66.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9f4a3aa34ef172be.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e303ceb55584add4.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/d79ed1e55d4105d8.jpg?q=20",
    },
  ]);

  return (
    <div className="w-full h-[32rem] flex flex-wrap gap-7  bg-[#ffffff] justify-center  mt-7">
        {containerProducts.map((item, index) => {
          return (
            <div className="w-[30%] h-[13rem] bg-red-100">
              <img className="rounded-md" src={item.img} alt="" />
            </div>
          );
        })}
      </div>
  )

}

export default Container;