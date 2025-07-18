import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FullProductPage from "../pages/FullProductPage";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function ListingProducts({ catyegory }) {

  const products = useSelector((state) => state.products.products);
  const filterByCategory = products.filter(
    (item) => item.catyegorys == catyegory
  );

  return (
    <>
    <Navbar/>
    <div className="w-full h-fit bg-[#f1f3f6] sm:flex gap-3 p-3">
      <div className="w-[20%] h-[50rem] bg-[#ffffff] sm:block hidden"></div>

      <div className="sm:w-[80%] h-fit bg-[#ffffff] p-3">
        <div className="flex gap-4 items-center">
          <h1>{catyegory}</h1>
          <h6 className="text-xs text-gray-600">
            (Showing {filterByCategory.length} Products of {products.length}{" "}
            Producuts)
          </h6>
        </div>

        <div className="sm:flex hidden mt-4 gap-4">
          <h1 className="pr-4">Sort By</h1>
          <button className="text-sm">Popularity</button>
          <button className="text-sm">Price -- Low to High</button>
          <button className="text-sm">price -- High to Low</button>
          <button className="text-sm">Discount</button>
        </div>

        <hr  className="text-gray-100"/>
        <div className="w-full h-fit flex gap-5 flex-wrap mt-4">
          {filterByCategory.map((item, index) => {
            return (
             
                <div className="lg:w-[25%] w-[43%] h-[50vw] sm:h-[50vh] sm:ml-0 ml-2 border-1 border-gray-200 sm:border-none rounded-xl hover:shadow-xl/30 duration-300 ">
                   <NavLink
                className="w-fit h-fit duration-300 flex  flex-wrap lg:mt-4"
                to={`/products/${encodeURIComponent(item.title)}/${item._id}`}
              >
                  <div className="m-auto flex h-[35vw] lg:h-[13vw]">
                    <img
                      className="w-[80%] m-auto lg:mt-5 sm:h-[80%] rounded"
                      src={item.img}
                      alt=""
                    />
                    {/* <CiHeart className="overflow-hidden text-xl mt-5 mr-3" /> */}
                  </div>
                  
                 <div className="bg-black text-white sm:bg-white sm:text-black rounded-b-xl h-[15vw]  sm:h-fit w-full m-auto">
                  <h1 className="mt-5 text-xs ml-3 w-[90%] sm:block hidden">{item.title.substring(0,87) + "..."}</h1>
                  <h1 className="mt-3 text-xs ml-3 w-[90%] sm:hidden">{item.title.substring(0,10) + "..."}</h1>

                  <h6 className="mt-2 text-xs ml-3 w-[90%] sm:block hidden text-gray-600">
                    {item.details.substring(0,50) + "..."}
                  </h6>
                
                  
                  <div className="sm:flex hidden  w-full ml-3 mt-2 gap-3">
                    <div className="flex items-center text-xs px-3 py-1 gap-1 rounded bg-[#388e3c] text-white">
                      <h3 className="">{3}</h3>
                      <FaRegStar />
                    </div>
                    <img
                      className="sm:w-[30%] w-[50%] sm:h-[25px] sm:object-cover"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                      alt=""
                    />
                  </div>

                  <div className="flex sm:gap-3 ml-3 lg:mt-3 items-center">
                    <h1 className="text-xs sm:text-xl">₹{item.price}</h1>
                    <h1 className="sm:block hidden text-[#388e3c] text-xs">
                      {item.discount}% off
                    </h1>
                  </div>
                   </div> 
                  </NavLink>
                 
                </div>
              
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
export default ListingProducts;
