import { useEffect, useState } from "react";
import SellerNavbar from "./SellerNavbar";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";

function Dashboard() {
    const token = localStorage.getItem("token")
    const [data, setdata] = useState([]);
    const [totalProducts, setTotalProducts] = useState();
    useEffect(() => {
          const callApi = async () => {
             const response =  await axios.post('https://flipkart-backend-h688.onrender.com/products-dashboard' , {} , {   
                headers:{
                    Authorization: `Bearer ${token}`
                }
             })
             setdata(response.data);
             setTotalProducts(response.data.length);
             
          }
          callApi();
    },[])
    console.log(data);
    const DeleteHandler = async (id) => {
          await axios.post('https://flipkart-backend-h688.onrender.com/delete-product' , {id});   
          toast.success("Product Deleted Succsesfylly");
    } 
  return (
    <div>
      <SellerNavbar />
      <div className="w-full h-full flex">
        <div className="w-[30%] bg-white">
            <div className="text-center mt-9 font-semibold text-xl">
                <h1>Total Product Lsited : {totalProducts}</h1>
            </div>
        </div>

        <div className="w-[70%] bg-gray-100 p-3">
         
           {data.map((items,index) => {
               return(
               <div className="w-full h-fit bg-white mb-3">  
                <div className="flex gap-3 p-5">
              <div className="w-[100px] flex items-center">
                <img className="rounded-md" src={items.img} alt="" />
              </div>
              <div>
                <h1>{items.title.substring(0,87) + "..."}</h1>
                <h1 className="font-bold">₹{items.price}</h1>
                <h1 className="text-[#3f9142]">{items.discount}% off</h1>
                <div className="flex gap-3 text-[#2c64e3]">
                  {" "}
                  <button className="cursor-pointer" onClick={() => DeleteHandler(items._id)}>Delete</button>
                  <button className="cursor-pointer">Edit</button>
                </div>
              </div>
            </div>
             </div>
               )
           })}
         <ToastContainer/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
