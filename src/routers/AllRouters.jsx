
import { Router,Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import FullProductPage from "../pages/FullProductPage";
import NotFound from "../pages/NotFound";
import FlightPage from "../components/FlightBookings/FlightPage";
import FlightBooking from "../components/FlightBookings/FlightBooking";
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>} />  
                <Route path="/cart" element={<Cart/>} />
                <Route path="/products/:title" element={<Products/>} />
                <Route path="/products/:title/:id" element={<FullProductPage/>} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/flight" element={<FlightPage/>} />
                <Route path="/flightbooking" element={<FlightBooking/>} />
            </Routes>
        </div>
    )
}


export default AllRoutes;