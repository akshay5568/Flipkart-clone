import { NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaBoxOpen } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from "react-redux";
import { setProducts } from "../reducers/ProductsReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [isLogin, setLogin] = useState(true);

  const logoutFunction = () => {
    localStorage.removeItem("token");
    toast.success("You Are Logout Now");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    setLogin(false);
  };

  const users = useSelector((state) => state.users?.users);
  let user = null;
  let filterUser;
  if (token) {
    user = jwtDecode(token);
    filterUser = users.filter((items) => items._id == user.userId);
  } else {
    console.log("No user Found");
  }

  const dispatch = useDispatch();
  const isCart = () => {
    navigate("/login");
    toast.success("please Login First");
  };

  useEffect(() => {
    axios
      .get("https://flipkart-backend-h688.onrender.com/product")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const cartData = useSelector((state) => state.products.cart.length);

  const [inputData, setInputData] = useState("");

  const products = useSelector((state) => state.products.products);

  const filterProductsByInput = products.filter((result) => {
    return result.title.toLowerCase().includes(inputData.toLowerCase());
  });
 console.log(filterProductsByInput);
 
  const [searchResult, setSearchResult] = useState(false);

  return (
    <div className="sm:p-3 w-full h-fit bg-[#ffffff]">
      <nav className="sm:w-full w-full  md:flex sm:text-sm text-xs sm:text-base gap-3 pt-1 justify-between items-center">
        <div className="flex relative sm:w-[250px] items-center sm:mb-7 mr-10">
          <NavLink to="/">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
              className="mr-3 absolute sm:block hidden"
            />
          </NavLink>
        </div>

        <div className="p-2">
          <div className="sm:hidden mt-5 justify-between mr-5 text-xs items-center flex">
            <NavLink to="/">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt=""
                className="mr-3 sm:hidden inline w-[100px]"
              />
            </NavLink>
            <div className="w-[10vw] h-[7vw] flex">
              {user ? (
                <NavLink to="/myproflie" className="flex items-center gap-1">
                  <CgProfile className="text-2xl" />
                  <h5>You</h5>
                </NavLink>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                <h6 className="bg-red-400 px-1 rounded-md text-xs">
                  {user ? cartData : ""}
                </h6>
                <BsCart3 className="text-2xl" />
              </div>
              {user ? (
                <NavLink
                  to="/cart"
                  style={(e) =>
                    e.isActive ? { color: "tomato" } : { color: "black" }
                  }
                >
                  Cart
                </NavLink>
              ) : (
                <NavLink to="/login">Cart</NavLink>
              )}
            </div>
          </div>
          <input
            className="w-full sm:hidden mt-5  p-3 rounded-xl bg-[#f0f5ff]"
            type="text"
            placeholder="🔍 Search For Products, Brands and More"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>

        <input
          className="w-[50rem] sm:inline hidden p-2 rounded-md bg-[#f0f5ff] relative"
          type="text"
          placeholder="🔍 Search For Products, Brands and More"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onFocus={() => setSearchResult(true)}
          onBlur={() => setTimeout(() => setSearchResult(false), 300)}
         
        />

        {searchResult && (
          <div className="w-[30%] left-55 top-15 max-h-[300px] bg-[#ffffff] absolute overflow-y-scroll p-1 m-auto text-left">
            {filterProductsByInput.map((result, index) => (
              <NavLink
                 key={index}
                to={`/products/${encodeURIComponent(result.title)}/${result._id}`}
              >
                <span className="pb-2 hover:bg-[#f0f5ff] block">
                  <div className="flex gap-2 items-center">
                    <CiSearch /> {result.title.substring(0, 50) + "..."}
                  </div>
                </span>
              </NavLink>
            ))}
          </div>
        )}

        <div className="w-full sm:flex hidden sm:gap-20  items-center">
          <div className="w-fit flex  items-center gap-2 w-[8vw] h-[3rem] rounded-md ml-3 justify-center hover:bg-[#2c64e3] hover:text-white duration-300">
            <div className="w-fit flex items-center relative group">
              <IoMdLogIn className="text-2xl sm:inline hidden" />
              <div className="sm:w-[7vw] hidden sm:inline flex items-center justify-center">
                {token ? (
                  `${filterUser.map(
                    (items) => items.name.substring(0, 10) + "..."
                  )}`
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </div>
              <FaAngleDown className="sm:inline hidden" />

              <div className="w-[15rem] h-[10rem]  absolute text-black top-5 opacity-0 group-hover:opacity-100 bg-[#ffffff] rounded-md p-3 hidden group-hover:block">
                {filterUser ? (
                  <div className="flex items-center gap-2">
                    <AiOutlineLogout />
                    <button onClick={logoutFunction}>Logout</button>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <h3>New Custumer?</h3>
                    <NavLink to="/signup">Signup</NavLink>
                  </div>
                )}

                {user ? (
                  <div className="flex mt-3 items-center gap-2">
                    <CgProfile />
                    <NavLink to="/myproflie">My Profile</NavLink>
                  </div>
                ) : (
                  ""
                )}

                <div className="flex mt-3 items-center gap-2">
                  <FaBoxOpen />
                  <NavLink to="/orders">Orders</NavLink>
                </div>

                <div className="flex mt-3 items-center gap-2">
                  <FaRegHeart />
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between pl-3 pr-3">
            <div className="flex items-center  sm:gap-2">
              <div className="flex items-center reletive">
                <h6 className="bg-red-400 px-1 sm:block hidden rounded-md text-xs">
                  {user ? cartData : ""}
                </h6>
                <BsCart3 className="text-2xl sm:block hidden" />
              </div>
              {user ? (
                <NavLink
                  className="sm:block hidden"
                  to="/cart"
                  style={(e) =>
                    e.isActive ? { color: "tomato" } : { color: "black" }
                  }
                >
                  Cart
                </NavLink>
              ) : (
                <NavLink to="/login">Cart</NavLink>
              )}
            </div>

            <div className="w-[11vw] flex items-center gap-2">
              <CiShop className="text-3xl sm:block hidden" />
              {user ? (
                <NavLink className="sm:block hidden" to="/sell-online">
                  Become a Seller
                </NavLink>
              ) : (
                <NavLink className="sm:block hidden" to="/login">
                  Become a Seller
                </NavLink>
              )}
            </div>

            <div className="flex items-center sm:pr-9">
              <NavLink to="/" className="sm:block hidden">
                <CiMenuKebab />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
