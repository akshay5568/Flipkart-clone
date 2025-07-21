import { useEffect, useState } from "react";
import SellerNavbar from "./SellerNavbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";   

function EditProductsDetails() {
  const { productid } = useParams();
  const [ProductDetails, setProductDetails] = useState();
  const [newProInfo, setNewProInfo] = useState({
     title:"",
     price:0,
     details:"",
     discount:0,
     catyegorys:""
  });
  useEffect(() => {
    const callApi = async () => {
      const ProductData = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/edit-products-${productid}`   
      );
      setProductDetails(ProductData.data);
    };
    callApi();
  }, []);


  const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/update-product-${productid}`, newProInfo)   

      setNewProInfo({
        title:"",
        price:"",
        details:"",
        discount:"",
        catyegorys:""
      })
      
      toast.success("Product Updated")


  }

  
  return (
    <div>
      <SellerNavbar />
      <div className="w-full m-auto mt-5">
        <div className="md:w-[40%] max-sm:p-3 m-auto">
          <form action="" className="p-5 bg-gray-100" onSubmit={handleSubmit}>
            <label className="font-bold">Title</label>
            <input
              type="text"
              className="border-1 p-2 w-full mb-3"
              defaultValue={ProductDetails?.title}
              onChange={(e) => setNewProInfo({...newProInfo, title:e.target.value})}
              required
            />
            <br />
            <label className="font-bold">Price</label>
            <input
              type="number"
              className="border-1 p-2 w-full mb-3"
              defaultValue={ProductDetails?.price}
              onChange={(e) => setNewProInfo({...newProInfo, price:e.target.value})}
              required
            />
            <br />
            <label className="font-bold">Details</label>
            <textarea
              type="text"
              className="border-1 p-2 w-full mb-3"
              defaultValue={ProductDetails?.details}
              onChange={(e) => setNewProInfo({...newProInfo, details:e.target.value})}
              required
            />
            <br />
             <label className="font-bold">Discount</label>
            <input
              type="number"
              className="border-1 p-2 w-full mb-3"
              defaultValue={ProductDetails?.discount}
              onChange={(e) => setNewProInfo({...newProInfo, discount:e.target.value})}
              required
            /> 
            <br />
            <label className="font-bold">Category</label>
            <select className="border-1 p-2 w-full mb-3" onChange={(e) => setNewProInfo({...newProInfo, catyegorys:e.target.value})}>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Kilos">Kilos</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Fashion">Fashion</option>
              <option value="Home& Furniture">Home& Furniture</option>
              <option value="Applincens">Applincens</option>
              <option value="Beauty, Toys & More">Beauty, Toys & More</option>
              <option value="Tow Wheelers">Tow Wheelers</option>
            </select>
            <div className="text-center">
              <button className="cursor-pointer p-1 px-9 rounded bg-yellow-300">
                Edit
              </button>
              <ToastContainer/>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProductsDetails;
