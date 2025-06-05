import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AllRoutes from "./routers/AllRouters";
function App (){
  return (
      <div className="w-full h-full" >
          <Navbar/>
          <AllRoutes/>
          <Footer/>
      </div>
  )
}

export default App;

