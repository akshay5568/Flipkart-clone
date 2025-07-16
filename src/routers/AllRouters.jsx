
import { Router,Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import FullProductPage from "../pages/FullProductPage";
import NotFound from "../pages/NotFound";
import FlightPage from "../components/FlightBookings/FlightPage";
import FlightBooking from "../components/FlightBookings/FlightBooking";
import Login from "../components/Login/Login";
import SignUP from "../components/Signup/SignUp";
import MyProfile from "../components/My Profile/MyProfile";
import BecomeAseller from "../components/Become a Seller/BecomeAseller";
import RegisterForm from "../components/Become a Seller/RegisterForm";
import UploadProducts from "../components/Become a Seller/UploadProducts";
import SellerLogin from "../components/Become a Seller/SellerLogin";
import MySellerProfile from "../components/Become a Seller/MySellerProfile"
import Dashboard from "../components/Become a Seller/Dashborad";
import EditProductsDetails from "../components/Become a Seller/EditProductsDetails";
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
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUP/>} />
                <Route path="/myproflie" element={<MyProfile/>} />
                <Route path="/sell-online" element={<BecomeAseller/>} />     
                <Route path="/seller-register" element={<RegisterForm/>} />    
                <Route path="/upload-products" element={<UploadProducts/>} />    
                <Route path="/seller-login" element={<SellerLogin/>} />    
                <Route path="/sellerprofile" element={<MySellerProfile/>} />    
                <Route path="/seller-dashboard" element={<Dashboard/>} />    
                <Route path="/edit-product" element={<EditProductsDetails/>} />    
            </Routes>
        </div>
    )
}


export default AllRoutes;