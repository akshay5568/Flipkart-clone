import { useEffect, useState } from "react";
import SellerNavbar from "./SellerNavbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditProductsDetails () {

    const {productid} = useParams();
    const [ProductDetails,setProductDetails] = useState();

    useEffect(() => {
         const callApi = async () => {
            const ProductData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/edit-products-${productid}`)
            
         } 
         callApi();
    })
    

    


    return (
        <div>
            <SellerNavbar/>
            <div className="w-full m-auto mt-5">
              <div className="w-[40%] m-auto">  
                <form action="" className="p-5 bg-gray-100">
                    <label className="font-bold">Title</label>
                    <input type="text" className="border-1 p-2 w-full mb-3"/><br />
                     <label className="font-bold">Price</label>
                    <input type="number" className="border-1 p-2 w-full mb-3"/><br />
                     <label className="font-bold">Details</label>
                    <textarea type="text" className="border-1 p-2 w-full mb-3"/><br />   
                     <label className="font-bold">description</label>
                    <input type="text" className="border-1 p-2 w-full mb-3"/><br />
                    <div className="text-center">
                    <button className="cursor-pointer p-1 px-9 rounded bg-yellow-300">Edit</button><br />
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}


export default EditProductsDetails;