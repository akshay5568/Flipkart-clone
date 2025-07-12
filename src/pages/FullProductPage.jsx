import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { addToCart, setProducts } from "../reducers/ProductsReducer";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
function FullProductPage() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);
  const filteredProduct = products.filter((item) => item._id == id);
  console.log(filteredProduct);
  
  
  const dispatch = useDispatch();

  const navigate = useNavigate()


  //   useEffect ( () => {
  //     axios.get('http://localhost:8080/cart')
  //     .then((res) => dispatch(addToCart(res.data)))
  //     .catch((err) => console.log(err))
  //  } , [dispatch])
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://flipkart-backend-h688.onrender.com/product")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [title] = filteredProduct;
 

  const addToCartHandler = async () => {

  const token = localStorage.getItem("token");
 

    try {

      dispatch(addToCart(filteredProduct));
      await axios.post("https://flipkart-backend-h688.onrender.com/cart", {
        title: title.title,
        BrandName:title.BrandName,
        img: title.img,
        price: title.price,
        discount: title.discount,
        details: title.details,
        catyegorys: title.catyegorys,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="w-full h-fit bg-[#f1f3f6] sm:p-3 ">
      {filteredProduct.map((item, i) => {
        return (
          <div key={i} className="sm:flex sm:w-[90%]  m-auto sm:gap-4 bg-[#ffffff] sm:p-3">
            <div className="sm:w-[40%] h-fit sm:p-3">
              <div className="w-full">
                <img
                  className="sm:w-fit w-[80%] h-fit rounded-md object-cover m-auto"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>

            <div className="sm:w-[60%] h-fit p-3 sm:mt-0 mt-5">
              <h1 className="text-gray-600 text-xs sm:text-sm">{item.BrandName}</h1>
              <h1 className="break-words mt-3">{item.title}</h1>
              <h1 className="text-gray-600 mt-5 text-xs sm:text-sm">{item.details}</h1>
              <h3 className="text-[#25a541] mt-3">Special Price</h3>

              <div className="flex items-center gap-3">
                <h2 className="text-2xl bg-black-600 font-semibold">₹{item.price}</h2>
                <h2 className="text-[#25a541]">{item.discount}% off</h2>
              </div>

              <div className="w-[3rem] mt-1 flex items-center text-xs px-3 py-1 gap-1 rounded bg-[#388e3c] text-white">
                <h3 className="">{3}</h3>
                <FaRegStar />
              </div>

              <div className="flex items-center gap-4 mt-5">
                {token ? <button
                  className="flex items-center gap-3 bg-[#ff9e01] sm:p-3 p-3 sm:px-8 text-white rounded"
                  onClick={addToCartHandler}
                >
                  {" "}
                  <BsCart3 /> ADD TO CART
                </button> : <button
                  className="flex items-center gap-3 bg-[#ff9e01] p-3 sm:px-8 text-white rounded"
                  onClick={()=> navigate('/login')}
                >
                  {" "}
                  <BsCart3 /> ADD TO CART
                </button>}

                <button className="flex items-center gap-3 bg-[#fb641b] sm:p-3 p-3 sm:px-13 text-white rounded">
                  <ImPower />
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default FullProductPage;
