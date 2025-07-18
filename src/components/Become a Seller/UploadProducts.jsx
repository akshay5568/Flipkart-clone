import { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UploadProducts() {
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: "",
    discount: "",
    details: "",
    catyegorys: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", productDetails.title);
    formData.append("price", productDetails.price);
    formData.append("discount", productDetails.discount);
    formData.append("details", productDetails.details);
    formData.append("catyegorys", productDetails.catyegorys);
    formData.append("image", image);

    setProductDetails({
      title: "",
      price: "",
      discount: "",
      details: "",
      catyegorys: "",
    });

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/products-images`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    toast.success("Product Upload Sucsessfully");
  };

  return (
    <div className="w-full h-fit md:p-0 p-3">
      <SellerNavbar />
      <h1 className="text-center mt-9 text-2xl font-bold text-gray-600">
        Upload your Products Through Fill This Form
      </h1>
      <div className="md:w-[40%] h-fit bg-gray-100 mt-10 rounded-md m-auto mb-9 p-5">
        <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
          <label className="font-bold">Title</label>
          <input
            maxLength={100}
            className="w-full p-2 border-1 mb-3"
            type="text"
            placeholder="Title"
            name="title"
            value={productDetails.title}
            onChange={handleChange}
            required
          />
          <br />
          <label className="font-bold">Image</label>
          <input
            className="w-full p-2 border-1 mb-3"
            type="file"
            placeholder="Image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
          <br />
          <label className="font-bold">Price</label>
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
          <label className="font-bold">Discount</label>
          <input
            className="w-full p-2 border-1 mb-3"
            type="number"
            placeholder="Discount"
            name="discount"
            value={productDetails.discount}
            onChange={handleChange}
          />
          <br />
          <label className="font-bold">About Product Detail</label>
          <textarea
            className="w-full p-2 border-1 mb-3"
            name="details"
            placeholder="Product Details"
            value={productDetails.details}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <label className="font-bold">Category</label>
          <select
            className="w-full p-2 border-1 mb-3"
            name="catyegorys"
            value={productDetails.catyegorys}
            onChange={handleChange}
            required
          >
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

          <br />
          <div className="text-center">
            <button className="p-1 px-5 rounded-md bg-yellow-300">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default UploadProducts;
