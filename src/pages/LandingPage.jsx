import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TopBar from "../components/LandingPages/TopBar";
import Poster from "../components/LandingPages/Poster";
import FirstProductSection from "../components/LandingPages/FirstProductSection";
import SecondProductSection from "../components/LandingPages/SecondProductSection";
import Container from "../components/LandingPages/Container";
import DealsProducts from "../components/LandingPages/DealsProducts";
import axios from "axios";
import { setProducts } from "../reducers/ProductsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToCart } from "../reducers/ProductsReducer";
import { addUsers } from "../reducers/UsersReducer";
import Navbar from "../components/Navbar";
function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/product")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(setToCart(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => dispatch(addUsers(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div>
      <Navbar/>
    <div className="w-full h-fit p-3 bg-[#f1f2f4]">
      <TopBar />
      <Poster />
      <FirstProductSection />
      <SecondProductSection />
      <Container />
      <DealsProducts />
    </div>
    </div>
  );
}

export default LandingPage;
