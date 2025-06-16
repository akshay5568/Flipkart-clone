import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../../reducers/UsersReducer";
import { jwtDecode } from "jwt-decode";
function MyProfile() {

    const userInfo = useSelector((state) => state.users.users)
    console.log(userInfo);

    const dispatch = useDispatch();
     useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => dispatch(addUsers(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  let token = localStorage.getItem("token");
  let filterUser = jwtDecode(token);

  
   const FilteredUser = userInfo.filter(items => items._id == filterUser.userId);
   console.log(FilteredUser);
   
   const [isEdit , setEdit] = useState(false);

  
    
    return (
        <div className="w-full h-fit bg-[#f1f3f6] p-5">

              <div className="flex justify-center gap-4">
                <div className="w-[20%] h-[10vh] bg-[#ffffff] rounded">
                        <div className="w-full h-full flex items-center px-4 gap-7">
                            <div><img className="w-[50px] h-[50-px]" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" /></div>
                            <div>
                                <h6>Hello,</h6>
                                <h3 className="font-semibold">{FilteredUser.map(items => items.name)}</h3>
                            </div>
                        </div>
                </div>

                <div className="w-[70%] h-fit bg-[#ffffff] rounded p-5 px-10">
                      <div>
                          <div>
                              <div className="flex gap-5 mb-5">
                                <h1 className="font-semibold">Personal Information</h1>
                                <h2>Edit</h2>
                              </div>

                              <div className="flex gap-10" >
                                 <input className="p-3 bg-[#fafafa] border-1 text-gray-400" type="text" value={FilteredUser.map(items => items.name)}/>
                                 <button>{isEdit ? "SAVE" : ""}</button>
                              </div>
                          </div>

                          <div className="mt-13">
                               <div className="flex gap-5 mb-5">
                                <h1 className="font-semibold">Email Address</h1>
                                <h2>Edit</h2>
                              </div>

                              <div className="flex gap-10" >
                                 <input className="p-3 bg-[#fafafa] border-1 text-gray-400" type="text" value={FilteredUser.map(items => items.email)}/>
                                 <button>{isEdit ? "SAVE" : ""}</button>
                              </div>
                          </div>

                          <div className="mt-10 text-red-600">
                              <button>Delete Account</button>
                          </div>


                          <img className="w-full" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" />
                      </div>
                </div>
              </div>
        </div>
    )
}


export default MyProfile;