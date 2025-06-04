
import { Router,Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import FullProductPage from "../pages/FullProductPage";
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>} />  
                <Route path="/cart" element={<Cart/>} />
                <Route path="/products/:title" element={<Products/>} />
                <Route path="/products/:title/:id" element={<FullProductPage/>} />
            </Routes>
        </div>
    )
}


export default AllRoutes;