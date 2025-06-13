import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FullProductPage from "../pages/FullProductPage";
import { useSelector } from "react-redux";

function ListingProducts({ catyegory }) {

  const products = useSelector((state) => state.products.products);
  const filterByCategory = products.filter(
    (item) => item.catyegorys == catyegory
  );

  return (
    <div className="w-full h-fit bg-[#f1f3f6] flex gap-3 p-3">
      <div className="w-[20%] h-[50rem] bg-[#ffffff]"></div>

      <div className="w-[80%] h-fit bg-[#ffffff] p-3">
        <div className="flex gap-4 items-center">
          <h1>{catyegory}</h1>
          <h6 className="text-xs text-gray-600">
            (Showing {filterByCategory.length} Products of {products.length}{" "}
            Producuts)
          </h6>
        </div>

        <div className="flex mt-4 gap-4">
          <h1 className="pr-4">Sort By</h1>
          <button className="text-sm">Popularity</button>
          <button className="text-sm">Price -- Low to High</button>
          <button className="text-sm">price -- High to Low</button>
          <button className="text-sm">Discount</button>
        </div>

<hr  className="text-gray-100"/>
        <div className="w-full h-fit flex  flex-wrap mt-4">
          {filterByCategory.map((item, index) => {
            return (
             
                <div className="w-[25%] h-fit hover:shadow-xl/30 duration-300 ">
                   <NavLink
                className="w-fit h-fit duration-300 flex  flex-wrap mt-4"
                to={`/products/${item.title}/${item._id}`}
              >
                  <div className="flex">
                    <img
                      className="w-[70%] m-auto mt-5 h-[80%] rounded"
                      src={item.img}
                      alt=""
                    />
                    <CiHeart className="overflow-hidden text-xl mt-5 mr-3" />
                  </div>
                  <h1 className="mt-5 text-xs ml-3 w-[90%]">{item.title}</h1>
                  <h6 className="mt-2 text-xs ml-3 w-[90%] text-gray-600">
                    {item.details}
                  </h6>
                  <div className="flex w-full ml-3 mt-2 gap-3">
                    <div className="flex items-center text-xs px-3 py-1 gap-1 rounded bg-[#388e3c] text-white">
                      <h3 className="">{3}</h3>
                      <FaRegStar />
                    </div>
                    <img
                      className="w-[30%] h-[25px] object-cover"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                      alt=""
                    />
                  </div>

                  <div className="flex gap-3 ml-3 mt-3 items-center">
                    <h1>₹{item.price}</h1>
                    <h1 className="text-[#388e3c] text-xs">
                      {item.discount}% off
                    </h1>
                  </div>
                  </NavLink>
                </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ListingProducts;
