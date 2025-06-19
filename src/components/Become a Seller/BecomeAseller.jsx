import { Navigate, useNavigate } from "react-router-dom";

useNavigate

function BecomeAseller() {

  const Navigate = useNavigate();

  const startSelling = () => {
      Navigate('/sell-register');
  }
  
  return (
    <div className="w-full h-fit bg-[#ffffff]">
      <div className="w-full relative">
        <h1 className="absolute top-[35%] text-4xl left-[5%] text-[#333333] font-semibold">
          Sell Online with Flipkart
        </h1>
        <img
          src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_sell.webp"
          alt=""
        />
      <button onClick={startSelling} className="absolute top-[31%] right-[10%] rounded  text-xl p-3 bg-[#ffcd00]">Start Selling</button>
      </div>
      <div className="w-full h-fit ">
        <div className="m-auto w-[90%] bg-[#ffffff] h-[10vw] shadow-2xl rounded-md">
          <div className="flex gap-5 justify-between p-3 items-center">
            <div>
              <img
                className="m-auto"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/crore_users_revamp.svg"
                alt=""
              />
              <h3 className="text-center mt-2">
                45 crore+ Flipkart <br /> customers
              </h3>
            </div>
            <div>
              <img
                className="m-auto"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/wallet-icon.svg"
                alt=""
              />
              <h3 className="text-center mt-2">
                7* days secure & regular <br /> payments
              </h3>
            </div>
            <div>
              <img
                className="m-auto"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/low-cost-icon.svg"
                alt=""
              />
              <h3 className="text-center mt-2">
                Low cost of doing <br /> business
              </h3>
            </div>
            <div>
              <img
                className="m-auto"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/seller-support-icon.svg"
                alt=""
              />
              <h3 className="text-center mt-2">One click Seller Support</h3>
            </div>
            <div>
              <img
                className="m-auto"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/shopping-bag-icon.svg"
                alt=""
              />
              <h3 className="text-center mt-2">
                Access to The Big Billion <br /> Days & more
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[35vw] bg-[#eaf3fb] mt-10 p-3">
        <div className="w-full h-fit mt-5 pb-5">
          <h1 className="text-center text-3xl font-bold text-[#3d464d]">
            Why sell on Flipkart?
          </h1>
        </div>
        <div className="flex justify-between px-9 mt-5 items-center">
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Truck.svg"
              alt=""
            />
            <h3 className="mt-3 font-bold text-[#3d464d]">Sell Across India</h3>
            <h4 className="mt-3  text-[#60717f]">
              Reach over 50 crore+ customers <br /> across 27000+ pincodes
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Percent.svg"     
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">Higher Profits</h3>
            <h4 className="mt-3 text-[#60717f]">
              With 0% commission* , you take <br /> 100% profits with you
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Account.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              Account Management
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              Our Dedicated managers will help <br /> your business on Flipkart
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Charges.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              Lower Return Charges
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              With our flat and low return charges,
              <br /> ship your products stress-free
            </h4>
          </div>
        </div>

        <div className="flex justify-between px-9 mt-9">
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Calculator.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              Simple Pricing Calculator
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              Use our simple pricing calculator to <br /> decide the best and
              competitive <br /> selling price for your product
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Support.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              24x7 Seller Support
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              All your queries and issues are <br /> answered by our dedicated
              Seller <br /> Support Team
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Payments.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              Fast & Regular Payments
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              Get payments as fast as 7-10 days <br /> from the date of dispatch
            </h4>
          </div>
          <div>
            <img
              src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Mobile.svg"
              alt=""
            />{" "}
            <h3 className="mt-3 font-bold text-[#3d464d]">
              Business on the go
            </h3>
            <h4 className="mt-3  text-[#60717f]">
              Download our Flipkart Seller App to <br /> manage your business
              anywhere, <br /> anytime
            </h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BecomeAseller;
