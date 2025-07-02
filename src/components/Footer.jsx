import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdOutlineStars } from "react-icons/md";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

function Footer() {
  return (
    <div className="xl:block hidden w-full h-[25rem] bg-[#182337] p-5 px-5">
      <div className="flex text-white">
        <div className="w-[60%] p-5 flex text-xs px-3 gap-21">
          <div>
            <h4 className="mb-3 text-[#676970]">ABOUT</h4>
            <div>
              <a href="">Contect us</a>
              <br />
              <a href="">About Us</a>
              <br />
              <a href="">Careers</a>
              <br />
              <a href="">Flipkart Stories</a>
              <br />
              <a href="">Press</a>
              <br />
              <a href="">Corporate Information</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[#676970]">GROUP COMPANIES</h4>
            <div>
              <a href="">Myntra</a>
              <br />
              <a href="">Cleartrip</a>
              <br />
              <a href="">Shopsy</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[#676970]">HELP</h4>
            <div>
              <a href="">Payments</a>
              <br />
              <a href="">Shipping</a>
              <br />
              <a href="">Cancellation & Returns</a>
              <br />
              <a href="">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[#676970]">CONSUMER POLICY</h4>
            <div>
              <a href="">Cancellation & Returns</a>
              <br />
              <a href="">Terms Of Use</a>
              <br />
              <a href="">Security</a>
              <br />
              <a href="">Privacy</a>
              <br />
              <a href="">Sitemap</a>
              <br />
              <a href="">Grievance Redressal</a>
              <br />
              <a href="">EPR Compilance </a>
              <br />
            </div>
          </div>
        </div>

        <div className="w-[40%] border-l-1">
          <div className="flex text-xs p-5 px-5 gap-5">
            <div className="flex">
              <div>
                <h4 className="mb-3 text-[#676970]">Mail Us:</h4>
                <div>
                  <p>
                    Flipkart Internet Private Limited,
                    <br /> Buildings Alyssa, Begonia & <br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br /> Bengaluru, 560103,
                    <br /> Karnataka, India
                  </p>
                </div>

                <div>
                  <h6 className="mt-4 text-[#676970]">Social</h6>
                  <div className="flex gap-3 mt-3 text-xl">
                    <a href="">
                      <CiFacebook />
                    </a>
                    <a href="">
                      <FaXTwitter />
                    </a>
                    <a href="">
                      <FiYoutube />
                    </a>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-[#676970]">
                  Registered Office Address:
                </h4>
                <div>
                  <p>
                    Flipkart Internet Private Limited, <br />
                    Buildings Alyssa, Begonia & <br />
                    Clove Embassy Tech Village,
                    <br /> Outer Ring Road, Devarabeesanahalli Village,
                    <br /> Bengaluru, 560103,
                    <br /> Karnataka, India <br />
                    CIN : U51109KA2012PTC066107 <br />
                    Telephone: 044-45614700 / 044-67415800
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-600" />
      <div>
        <div className="flex w-full p-7 justify-between text-white">
          <h6 className="flex items-center gap-1">
            <IoMdBriefcase className="text-[#ffcb00]" />
            Become a Seller
          </h6>
          <h6 className="flex items-center gap-1">
            <MdOutlineStars className="text-[#ffcb00]" />
            Advertise
          </h6>
          <h6 className="flex items-center gap-1">
            <MdOutlineCardGiftcard className="text-[#ffcb00]" />
            Gift Cards
          </h6>
          <h6 className="flex items-center gap-1">
            <IoIosHelpCircleOutline className="text-[#ffcb00]" />
            Help Center
          </h6>
          <h6>© 2007-2025 Flipkart.com</h6>
          <h6>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
              alt=""
            />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
