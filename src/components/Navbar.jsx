import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className=" p-3 ">
            <nav className=" flex pt-2 justify-between item-center" >
                <NavLink to='/'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" /></NavLink>
              <div className="flex gap-30 item-center">
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink to='/sell-online'>Become a Seller</NavLink>
                <NavLink to='/'>:</NavLink>
              </div>    
            </nav>
        </div>
    )
}


export default Navbar;