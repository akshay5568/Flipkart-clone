import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSellUsers } from "../../reducers/SellerUsersReducer";   
import { toast } from "react-toastify";

function SellerNavbar() {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const startSelling = () => {
    Navigate("/seller-register");
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout Sucsessful")
    setTimeout(() => {
      Navigate("/login");
    } , 2000)
  };

    
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/sell-users")
      .then((res) => dispatch(addSellUsers(res.data)))   
      .catch((err) => console.log(err));
  }, [dispatch]);

  const decode = jwtDecode(token);
  const id = decode.userId;
 
  
  const userInfo = useSelector((state) => state.sellUsers.sellUsers);   

   
  const filterSeller = userInfo.filter(items => items.userId == id);
 
  
  
  return (
    <div className="w-full h-[30%] p-3 shadow-xl/30">
      <div className="flex justify-between w-full h-fit items-center">
        <div className="flex items-center gap-15">
          <NavLink to="/sell-online">
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg"      
              alt=""
            />
          </NavLink>
          <h3 className="text-[#353535] cursor-pointer">
            <NavLink to="/seller-dashboard">Dashboard</NavLink>
          </h3>
          <h3 className="text-[#353535] cursor-pointer">
            {filterSeller.length > 0 ? (
              <NavLink to="/sellerprofile">My Profile</NavLink>
            ) : (
              <NavLink to="/seller-register">My Profile</NavLink>
            )}
          </h3>
          <h3 className="text-[#353535] cursor-pointer"> 
            {filterSeller.length > 0 ? (
              <NavLink to="/upload-products">Upload Products</NavLink>
            ) : (
              <NavLink to="/seller-register">Upload Products</NavLink>
            )}</h3>

          <h3 className="text-[#353535] cursor-pointer"> 
            <NavLink to="/">Home Flipkart</NavLink>
            </h3>

          <h3></h3>
        </div>

        <div className="flex gap-5">
          {filterSeller.length > 0 ? (
            <button className="cursor-pointer" onClick={logoutHandler}>Logout</button>  
          ) : (
            <>
              {" "}
              <button
                onClick={() => Navigate("/seller-login")}
                className="cursor-pointer text-[#353535]"
              >
                Login
              </button>
              <button
                onClick={startSelling}
                className="cursor-pointer text-[#353535]"   
              >
                Start Selling
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerNavbar;
