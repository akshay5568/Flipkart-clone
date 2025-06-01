
import { Router,Route, Routes } from "react-router-dom";
import LangingPage from "../pages/LandingPage";



function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LangingPage/>} />  
            </Routes>
        </div>
    )
}


export default AllRoutes;