import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Cart () {

    const [cart , setCart ] = useState([]);
    let Navigate = useNavigate();
     return cart.length === 0 ? (<div className="w-full h-fit bg-[#f1f3f6] pt-4">
         <div className="w-[80%] h-[23rem] bg-[#ffffff] m-auto shadow-lg shadow-white-250/2">
                <img className="w-[15rem] m-auto pt-5" src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                <h1 className="text-center mt-5">Your cart is empty!</h1>
                <h1 className="text-center text-xs mt-3">Add items to it now.</h1>
                <div className="flex justify-center">
                <button onClick={() => Navigate('/')} className="p-2 px-19 py-3 bg-[#2874f0] text-white text-center mt-3 text-xs">Shop Now</button>
                </div>
            </div>

            <hr className="mt-5 text-[#dddddd]" />
            <div className="w-full h-[22rem] bg-[#f1f3f6]">

            </div>
    </div> ): " "
}

export default Cart;


