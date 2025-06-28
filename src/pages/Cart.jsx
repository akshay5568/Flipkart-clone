import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCarts , setToCart } from "../reducers/ProductsReducer";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "../components/Navbar";

function Cart() {
  const [platformFee, setPlatFormFee] = useState(4);
  const cartData = useSelector((state) => state.products.cart);


  // const removeNestedArray = cartData.flat();

  const token = localStorage.getItem("token");
  
  const TotalPrice = cartData.reduce(
    (sum, item) => sum + item.price,
    0
  );


  const dispatch = useDispatch();
     
     useEffect ( () => {
      const token = localStorage.getItem("token");
      axios.get('http://localhost:8080/cart' ,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => dispatch(setToCart(res.data)))
      .catch((err) => console.log(err))
   } , [dispatch])
   

  const removeCartHandler = async (itemIndex) => {
    const token = localStorage.getItem("token");
    dispatch(removeCarts(itemIndex));
    toast.success("Item removed from cart!");
    await axios.post('http://localhost:8080/cart/remove',{id:itemIndex} , {
      headers: {
          Authorization: `Bearer ${token}`
        }
    });
  };

  let Navigate = useNavigate();
  return (
    <>
    <Navbar/>
  {cartData.length === 0 ? (
    <div className="w-full h-fit bg-[#f1f3f6] pt-4">
      <div className="w-[80%] h-[23rem] bg-[#ffffff] m-auto shadow-lg shadow-white-250/2">
        <img
          className="w-[15rem] m-auto pt-5"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""
        />
        <h1 className="text-center mt-5">Your cart is empty!</h1>
        <h1 className="text-center text-xs mt-3">Add items to it now.</h1>
        <div className="flex justify-center">
          <button
            onClick={() => Navigate("/")}
            className="p-2 px-19 py-3 bg-[#2874f0] text-white text-center mt-3 text-xs"
          >
            Shop Now
          </button>
        </div>
      </div>

      <hr className="mt-5 text-[#dddddd]" />
      <div className="w-full h-[22rem] bg-[#f1f3f6]"></div>
    </div>
  ) : (
    <div className="flex w-full h-fit bg-[#f1f3f6] p-3">
      <div className="w-[60%] h-fit mt-5 m-auto">
        <div className="m-auto p-3 px-7 mb-3 bg-[#ffffff]">
          <h1>Flipkart({cartData.length})</h1>
        </div>

        <div className="m-auto p-5 px-7 mt-4 bg-[#ffffff]">
          <h1>
            Deliver to : <span>Mumbai - 400031</span>
          </h1>
        </div>

        {cartData.map((item, index) => {
          return (
            <div className="m-auto p-5 px-7 mt-4 bg-[#ffffff]">
              <div className="flex gap-5">
                <div>
                  <img
                    className="w-[15vh] h-[15vh] rounded-md"
                    src={item.img}
                    alt=""
                  />
                </div>

                <div>
                  <h1>{item.title}</h1>
                  <div className="flex gap-3 items-center">
                    <h1 className="text-xs text-gray-500">
                      Seller :{item.BrandName}{" "}
                    </h1>
                    <img
                      className="w-[7vh] h-[2vh]"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                      alt=""
                    />
                  </div>

                  <div className="flex gap-3 items-center mt-4 ">
                    <h1 className="text-xl">₹{item.price}</h1>
                    <h1 className="text-[#388e3c]">{item.discount}% off</h1>
                  </div>

                  <button
                    className="mt-4 hover:text-[#2874f0]"
                    onClick={() => removeCartHandler(item._id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>

              <div className="mt-3 w-full flex justify-end">
                <button className="px-8 bg-[#fb641b] py-2 rounded text-[#ffffff]">
                  PLACE ORDER
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />

      <div className="w-[25%] h-fit mt-5 bg-[#ffffff] mr-5">
        <h1 className="p-3">PRICE DEATAILS</h1>
        <div className="flex p-3 justify-between">
          <h1>Price({cartData.length} item)</h1>
          <h1>₹{TotalPrice}</h1>
        </div>
        <div className="flex p-3 justify-between">
          <h1>Platform fee</h1>
          <h1>₹{platformFee}</h1>
        </div>
        <div className="flex p-3 justify-between mb-3">
          <h1>Delivery Charges</h1>
          <h1 className="text-[#388e3c]">Free</h1>
        </div>

        <hr className="border-dashed text-gray-300 m-4" />

        <div className="flex p-3 justify-between mt-3 mb-3 items-center">
          <h1 className="text-xl">Total Amount</h1>
          <h1>₹{TotalPrice + platformFee}</h1>
        </div>
        <hr className="border-dashed mb-2 text-gray-300 m-4" />
      </div>
    </div>
  
  )
 } </>);
}

export default Cart;
