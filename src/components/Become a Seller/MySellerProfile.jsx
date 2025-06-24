import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSellUsers } from "../../reducers/SellerUsersReducer";
import { jwtDecode } from "jwt-decode";
import { toast , ToastContainer} from "react-toastify";
import { useNavigate } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
function MyProfile() {

  
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/sell-users")
      .then((res) => dispatch(addSellUsers(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);


     useEffect(() => {
      const fatch = async () => {
           const respons = await axios.post('http://localhost:8080/sell-users', {id:userID})       
           localStorage.setItem("token" , respons.data.token); 
           fatch();
      }
    
  } , [])


  const userInfo = useSelector((state) => state.sellUsers.sellUsers);   
  
  let token = localStorage.getItem("token");
  
  
  let filterUser = jwtDecode(token);

 
  
  let userID = filterUser.SellerId;


  


  const FilteredUser = userInfo.filter(
    (items) => items.userId == filterUser.userId  
  );
  const id = FilteredUser.map((items) => items._id);
  const id2 = id[0];

   
  const [isEdit, setEdit] = useState(false);

  const navigate = useNavigate();
  const DeleteHandler = async () => {
    await axios.post("http://localhost:8080/seller-delete", { id: id2 });   
    // localStorage.removeItem("token");
    toast.success("Seller Account Was Deleted"); 

    setTimeout(() => {
      navigate("/sell-online");
    }, 2000);
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
    await axios.post("http://localhost:8080/userdelete", inputData, {      
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTimeout(() => {
      toast.success("Info Updated Succsesfully");
      navigate("/");
    }, 1000);
  };

  return (
    <>
    <SellerNavbar/>
    <div className="w-full h-fit bg-[#f1f3f6] p-5">
      <div className="flex justify-center gap-4">
        <div className="w-[20%] h-[10vh] bg-[#ffffff] rounded">
          <div className="w-full h-full flex items-center px-4 gap-7">
            <div>
              <img
                className="w-[50px] h-[50-px]"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"   
                alt=""
              />
            </div>
            <div>
              <h6>Hello,</h6>
              <h3 className="font-semibold">
                {FilteredUser.map((items) => items.name)}
              </h3>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-fit bg-[#ffffff] rounded p-5 px-10">
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
              <ToastContainer/>
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
