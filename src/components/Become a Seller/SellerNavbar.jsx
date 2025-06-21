import { useNavigate } from "react-router-dom";

function SellerNavbar() {
  const Navigate = useNavigate();

  const startSelling = () => {
    Navigate("/seller-register");
  };
  return (
    <div className="w-full h-[30%] p-3 shadow-xl/30">
      <div className="flex justify-between w-full h-fit items-center">
        <div className="flex items-center gap-15">
          <img
            src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg"
            alt=""
          />
          <h3 className="text-[#353535] cursor-pointer">Dashboard</h3>
          <h3 className="text-[#353535] cursor-pointer">My Profile</h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </div>

        <div className="flex gap-5">
          <button onClick={() => Navigate('/seller-login')} className="cursor-pointer text-[#353535]">Login</button>
          <button
            onClick={startSelling}
            className="cursor-pointer text-[#353535]"
          >
            Start Selling
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellerNavbar;
