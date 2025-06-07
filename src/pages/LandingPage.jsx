import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TopBar from "../components/LandingPages/TopBar";
import Poster from "../components/LandingPages/Poster";
import FirstProductSection from "../components/LandingPages/FirstProductSection";
import SecondProductSection from "../components/LandingPages/SecondProductSection";
import Container from "../components/LandingPages/Container";
import DealsProducts from "../components/LandingPages/DealsProducts";


function LandingPage() {

  return (
    <div className="w-full h-fit p-3 bg-[#f1f2f4]">
      <TopBar/>
      <Poster/>
      <FirstProductSection/>
      <SecondProductSection/>
      <Container/>
      <DealsProducts/>
    </div>
  );
  
}

export default LandingPage;
