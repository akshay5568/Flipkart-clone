import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../../reducers/UsersReducer";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
function MyProfile() {
  const userInfo = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)   
      .then((res) => dispatch(addUsers(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  let token = localStorage.getItem("token");
  let filterUser = jwtDecode(token);

  const FilteredUser = userInfo.filter(
    (items) => items._id == filterUser.userId
  );
  const id = FilteredUser.map((items) => items._id);
  const id2 = id[0];

  const [isEdit, setEdit] = useState(false);

  const navigate = useNavigate();
  const DeleteHandler = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
      id: id2,
    });
    localStorage.removeItem("token");
    toast.success("Account Was Deleted");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const editHandler = () => {
    setEdit(() => true);
  };

  const cancelHandler = () => {
    setEdit(() => false);
  };

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const inputdata = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const saveHandler = async () => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/userdelete`,
      inputData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTimeout(() => {
      toast.success("Info Updated Succsesfully");
      navigate("/");
    }, 1000);
  };

  const BeacomSellerForMobile = () => {
    navigate("/sell-online");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout Sucsessful")
    setTimeout(() => {
      navigate("/login");
    } , 2000)
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-fit bg-[#f1f3f6] p-5">
        <div className="sm:flex justify-center gap-4">
          <div className="sm:w-[20%] sm:h-[10vh] h-fit pt-3 pb-3 bg-[#ffffff] rounded">
            <div className="w-full h-full flex items-center px-4 gap-7">
              <div>
                <img
                  className="w-[50px] h-[50-px]"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                  alt=""
                />
              </div>
              <div className="">
                <h6>Hello,</h6>
                <h3 className="font-semibold">
                  {FilteredUser.map((items) => items.name)}
                </h3>

                <button
                  className="sm:hidden inline mt-3 bg-yellow-300 p-1 rounded-md text-blue-400"
                  onClick={BeacomSellerForMobile}
                >
                  Want to sell products?
                </button>
              </div>
            </div>
          </div>

          <div className="sm:w-[70%] h-fit bg-[#ffffff] sm:mt-0 mt-3 rounded p-5 px-10">
            <div>
              <div>
                <div className="flex gap-5 mb-5">
                  <h1 className="font-semibold">Personal Information</h1>
                </div>

                <div className="flex gap-10">
                  <input
                    className="p-3 bg-[#fafafa] border-1 text-gray-400 cursor-not-allowed"
                    type="text"
                    placeholder={FilteredUser.map((items) => items.name)}
                    disabled={isEdit ? false : true}
                    name="name"
                    onChange={inputdata}
                    required
                  />
                </div>
              </div>

              <div className="mt-13">
                <div className="flex gap-5 mb-5">
                  <h1 className="font-semibold">Email Address</h1>
                </div>

                <div className="flex gap-10">
                  <input
                    className="p-3 bg-[#fafafa] border-1 text-gray-400 cursor-not-allowed"
                    type="text"
                    placeholder={FilteredUser.map((items) => items.email)}
                    disabled={isEdit ? false : true}
                    onChange={inputdata}
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="mt-10 text-red-600 flex gap-5">
                <button className="cursor-pointer" onClick={DeleteHandler}>
                  Delete Account
                </button>
                {isEdit ? (
                  <button
                    onClick={cancelHandler}
                    className="text-[#2874f0] cursor-pointer"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={editHandler}
                    className="text-[#2874f0] cursor-pointer"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={saveHandler}
                  className="text-[#2874f0] font-semibold cursor-pointer"
                >
                  {isEdit ? "SAVE" : ""}
                </button>

                <button
                  onClick={logoutHandler}
                  className="text-[#2874f0] font-semibold cursor-pointer"
                >
                  Logout
                </button>
              </div>

              <img
                className="w-full"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
