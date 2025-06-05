import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { addToCart } from "../reducers/ProductsReducer";

function FullProductPage() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);
  const filteredProduct = products.filter((item) => item.id == id);
  console.log(filteredProduct);

  const dispatch = useDispatch();

  const addToCartHandler = (filteredProduct) => {
    dispatch(addToCart(filteredProduct));
  };

  return (
    <div className="w-full h-fit bg-[#f1f3f6]">
      {filteredProduct.map((item, i) => {
        return (
          <div key={i} className="flex w-[90%] m-auto gap-4 bg-[#ffffff] p-3">
            <div className="w-[40%] h-fit p-3">
              <div>
                <img
                  className="w-fit h-fit rounded-md object-cover m-auto"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>

            <div className="w-[60%] h-[200rem] p-3">
              <h1 className="text-gray-600">{item.details}</h1>
              <h1 className="mb-3">{item.title}</h1>
              <h3 className="text-[#25a541]">Special Price</h3>

              <div className="flex items-center gap-3">
                <h2 className="text-2xl bg-black-600">₹{item.price}</h2>
                <h2 className="text-[#25a541]">{item.discount}% off</h2>
              </div>

              <div className="w-[3rem] mt-1 flex items-center text-xs px-3 py-1 gap-1 rounded bg-[#388e3c] text-white">
                <h3 className="">{3}</h3>
                <FaRegStar />
              </div>

              <div className="flex items-center gap-4 mt-5">
                <button
                  className="flex items-center gap-3 bg-[#ff9e01] p-3 px-8 text-white rounded"
                  onClick={() => addToCartHandler(filteredProduct)}
                >
                  {" "}
                  <BsCart3 /> ADD TO CART
                </button>
                <button className="flex items-center gap-3 bg-[#fb641b] p-3 px-13 text-white rounded">
                  <ImPower />
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FullProductPage;
