import { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import axios from "axios";

function UploadProducts() {
  const [productDetails, setProductDetails] = useState({
    title:'',
    price:'',
    discount:"",
    details:'',
    catyegorys:''
  })
  const [image, setImage] = useState(null);
  const [preview,setPreview] = useState(null);

  const handleChange = (e) => {
      setProductDetails({...productDetails, [e.target.name]:e.target.value});
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }
  const token = localStorage.getItem("token")
 
  const handleSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append('title',productDetails.title);
     formData.append('price', productDetails.price)
     formData.append('discount', productDetails.discount)
     formData.append('details', productDetails.details)
     formData.append('catyegorys', productDetails.catyegorys)
     formData.append('image', image)

     try{
         await axios.post('http://localhost:8080/products-images', formData , {   
           headers:{
            Authorization:`Bearer ${token}`
           }
         });   
  
     }catch (err) {
        console.log(err);
     }
  }

  return (
    <div className="w-full h-fit">
      <SellerNavbar />
      <div className="w-[40%] h-fit bg-gray-100 mt-10 rounded-md text-center m-auto mb-9 p-5">
        <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            className="w-full p-2 border-1 mb-3"
            type="text"
            placeholder="Title"
            name="title"
            value={productDetails.title} 
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="w-full p-2 border-1 mb-3"
            type="file"
            placeholder="Image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
          <br />
          <input
            className="w-full p-2 border-1 mb-3"
            type="number"
            placeholder="Product Price"
             name="price"
            value={productDetails.price} 
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="w-full p-2 border-1 mb-3"
            type="number"
            placeholder="Discount"
            name="discount"
            value={productDetails.discount} 
            onChange={handleChange}
          />
          <br />
          <textarea
            className="w-full p-2 border-1 mb-3"
            name="details"
            placeholder="Product Details"
            value={productDetails.details}  
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <input
            className="w-full p-2 border-1 mb-3"
            type="text"
            placeholder="catyegorys"
            name="catyegorys"
            value={productDetails.catyegorys}  
            onChange={handleChange}
            required
          />
          <br />
          <button className="p-1 px-5 rounded-md bg-red-300">Submit</button>   
        </form>
      </div>
    </div>
  );
}

export default UploadProducts;
