import { useEffect, useState} from "react";
import SellerNavbar from "./SellerNavbar";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import { setSellerProducts } from "../../reducers/SellerProductsReducer";
import { removeSellerProducts } from "../../reducers/SellerProductsReducer";
import { NavLink } from "react-router-dom";
function Dashboard() {
    const token = localStorage.getItem("token")
    const [totalProducts, setTotalProducts] = useState();
    const data = useSelector((state) => state.sellerProducts.sellerProducts);


   
    const dispatch = useDispatch();


    useEffect(() => {
          const callApi = async () => {
             const response =  await axios.post(`${import.meta.env.VITE_BACKEND_URL}/products-dashboard` , {} , {   
                headers:{
                    Authorization: `Bearer ${token}`
                }
             })
             dispatch(setSellerProducts(response.data));  
             setTotalProducts(response.data.length);
          }
          callApi();
    },[])

    const DeleteHandler = async (id) => {
          dispatch(removeSellerProducts(id))
          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/delete-product` , {id});   
          toast.success("Product Deleted Succsesfylly");
    } 


  return (
    <div>
      <SellerNavbar />
      <div className="w-full h-full md:flex">
        <div className="md:w-[30%] bg-white">
            <div className="text-center mt-9 font-semibold text-xl">
                <h1>Total Product Lsited : {totalProducts}</h1>
            </div>
        </div>

        <div className="md:w-[70%] bg-gray-100 md:p-3 p-1">
         
           {data ? data.map((items,index) => {
               return(
               <div className="w-full h-fit bg-white mb-3">  
                <div className="flex gap-3 p-5">
              <div className="w-[100px] flex items-center">
                <img className="rounded-md" src={items.img} alt="" />
              </div>
              <div>
                <h1 className="sm:inline hidden">{items.title.substring(0,87) + "..."}</h1>
                <h1 className="sm:hidden">{items.title.substring(0,30) + "..."}</h1>
                <h1 className="font-bold">₹{items.price}</h1>
                <h1 className="text-[#3f9142]">{items.discount}% off</h1>
                <div className="flex gap-3 text-[#2c64e3]">
                  {" "}
                  <button className="cursor-pointer" onClick={() => DeleteHandler(items._id)}>Delete</button>
                  <button className="cursor-pointer" ><NavLink to="/edit-product">Edit</NavLink></button>
                </div>
              </div>
            </div>
             </div>
               )
           }) : "loading..."}
         <ToastContainer/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
