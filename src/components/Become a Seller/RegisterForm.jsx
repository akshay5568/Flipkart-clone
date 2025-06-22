import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
function RegisterForm() {

  const [sellerData, setSellerData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSellerData({ ...sellerData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  


  const submitHandler = async (e) => {
 
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/seller-register", sellerData, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      toast.success("User Registered Successfully");
      setSellerData({
        name: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
            navigate('/upload-products');
      } , 1000)
    } catch (err) {
      toast.error(err.response.data);
      setSellerData({
        name: "",
        email: "",
        password: "",
      });
      console.log(err);
    }
  };

  const loginHandler = () => {
      navigate('/seller-login');
  }
  

  return (
    <div className="w-full h-fit bg-[#ffffff] p-3">
      <div className="flex justify-between w-full h-fit">
        <div className="w-[70%] h-[35vw] m-auto">
          <div className="text-center p-3 mt-7">
            <form onSubmit={submitHandler}>
              <input
                className="p-2 w-[50%] border-1 border-gray-400 m-3 rounded-md"
                placeholder="BrandName"
                type="text"
                name="name"
                value={sellerData.name}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 w-[50%] border-1 border-gray-400 m-3 rounded-md"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={sellerData.email}
                required
              />
              <br />
              <input
                className="p-2 w-[50%] border-1 border-gray-400 m-3 rounded-md"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={sellerData.password}
                required
              />
              <br />
              <button
                className="bg-[#0066cc] px-7 py-1 p-1 rounded text-sm text-white mt-7"
                type="submit"
              >
                Register & Continue
              </button>
              <br />

              <h1 className="text-[#0066cc] mt-7 cursor-pointer" onClick={loginHandler}>I Have an already account</h1>
            </form>
            <ToastContainer/>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center gap-5 m-auto w-[70%] h-[25%] border-1 border-gray-400 rounded-md p-2">
            <img
              className="w-[60px] h-[60px] rounded-md"
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div>
              <h1 className="text-xs">
                Starting with 1, Flipkart helped me expand to 6 categories with
                5x growth year on year!
              </h1>
              <h4 className="text-xs font-semibold mt-2">
                Aditya Jangid, Amazestore
              </h4>
            </div>
          </div>
          <div>
            <img
              className="rounded-md mt-7 w-[70%] m-auto"
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/register_new_banner_50cr_v3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
