import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSellUsers } from "../../reducers/SellerUsersReducer";
import { toast } from "react-toastify";
import { IoMdMenu } from "react-icons/io";

function SellerNavbar() {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const startSelling = () => {
    Navigate("/seller-register");
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout Sucsessful");
    setTimeout(() => {
      Navigate("/login");
    }, 2000);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://flipkart-backend-h688.onrender.com/sell-users")
      .then((res) => dispatch(addSellUsers(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const decode = jwtDecode(token);
  const id = decode.userId;

  const userInfo = useSelector((state) => state.sellUsers.sellUsers);

  const filterSeller = userInfo.filter((items) => items.userId == id);

  const [hamBurgerButton, sethamBurgerButton] = useState(false);
  
  const hamHandler = () => {
    sethamBurgerButton(!hamBurgerButton);
  };

  return (
    <div className="w-full h-[30%] p-3 shadow-xl/30" onBlur={() => setTimeout(() => sethamBurgerButton(false), 300)}>
      <div className="flex justify-between w-full h-fit items-center">
        <div className="flex items-center sm:gap-15">
          <NavLink to="/sell-online">
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg"
              alt=""
            />
          </NavLink>
          <h3 className="text-[#353535] cursor-pointer  sm:inline hidden">
            <NavLink
              to="/seller-dashboard"
              style={(e) =>
                e.isActive ? { color: "tomato" } : { color: "black" }
              }
            >
              Dashboard
            </NavLink>
          </h3>
          <h3 className="text-[#353535] cursor-pointer  sm:inline hidden">
            {filterSeller.length > 0 ? (
              <NavLink
                to="/sellerprofile"
                style={(e) =>
                  e.isActive ? { color: "tomato" } : { color: "black" }
                }
              >
                My Profile
              </NavLink>
            ) : (
              <NavLink
                to="/seller-register"
                style={(e) =>
                  e.isActive ? { color: "tomato" } : { color: "black" }
                }
              >
                My Profile
              </NavLink>
            )}
          </h3>
          <h3 className="text-[#353535] cursor-pointer  sm:inline hidden">
            {filterSeller.length > 0 ? (
              <NavLink
                to="/upload-products"
                style={(e) =>
                  e.isActive ? { color: "tomato" } : { color: "black" }
                }
              >
                Upload Products
              </NavLink>
            ) : (
              <NavLink
                to="/seller-register"
                style={(e) =>
                  e.isActive ? { color: "tomato" } : { color: "black" }
                }
              >
                Upload Products
              </NavLink>
            )}
          </h3>

          <h3 className="text-[#353535] cursor-pointer sm:inline hidden">
            <NavLink
              to="/"
              style={(e) =>
                e.isActive ? { color: "tomato" } : { color: "black" }
              }
            >
              Home Flipkart
            </NavLink>
          </h3>
        </div>

        <div className="flex gap-5  sm:inline hidden">
          {filterSeller.length > 0 ? (
            <button className="cursor-pointer" onClick={logoutHandler}>
              Logout
            </button>
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

        <div className="sm:hidden z-40">
          <button onClick={hamHandler}>
            <IoMdMenu />
          </button>

          {hamBurgerButton && (
            <div className="absolute z-40 w-[50%] h-fit bg-white border-1 border-gray-200 right-[5%] rounded-xl p-3">
              <h3 className="text-[#353535] cursor-pointer">
                <NavLink
                  to="/seller-dashboard"
                  style={(e) =>
                    e.isActive ? { color: "tomato" } : { color: "black" }
                  }
                >
                  Dashboard
                </NavLink>
              </h3>
              <h3 className="text-[#353535] cursor-pointer ">
                {filterSeller.length > 0 ? (
                  <NavLink
                    to="/sellerprofile"
                    style={(e) =>
                      e.isActive ? { color: "tomato" } : { color: "black" }
                    }
                  >
                    My Profile
                  </NavLink>
                ) : (
                  <NavLink
                    to="/seller-register"
                    style={(e) =>
                      e.isActive ? { color: "tomato" } : { color: "black" }
                    }
                  >
                    My Profile
                  </NavLink>
                )}
              </h3>
              <h3 className="text-[#353535] cursor-pointer ">
                {filterSeller.length > 0 ? (
                  <NavLink
                    to="/upload-products"
                    style={(e) =>
                      e.isActive ? { color: "tomato" } : { color: "black" }
                    }
                  >
                    Upload Products
                  </NavLink>
                ) : (
                  <NavLink
                    to="/seller-register"
                    style={(e) =>
                      e.isActive ? { color: "tomato" } : { color: "black" }
                    }
                  >
                    Upload Products
                  </NavLink>
                )}
              </h3>

              <h3 className="text-[#353535] cursor-pointer">
                <NavLink
                  to="/"
                  style={(e) =>
                    e.isActive ? { color: "tomato" } : { color: "black" }
                  }
                >
                  Home Flipkart
                </NavLink>
              </h3>

              <div className="flex gap-5 ">
                {filterSeller.length > 0 ? (
                  <button className="cursor-pointer" onClick={logoutHandler}>
                    Logout
                  </button>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerNavbar;
