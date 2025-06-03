import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AllRoutes from "./routers/AllRouters";
function App (){
  return (
      <div className="w-full h-full" > 
           <Navbar/>  
          <AllRoutes/>
      </div>
  )
}

export default App;

