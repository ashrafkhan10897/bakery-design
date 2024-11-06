import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import cookie1 from "./assets/Cookie1.jpg";
import cookie2 from "./assets/Cookie2.jpg";
import cookie3 from "./assets/Cookie3.jpg";
import cookie4 from "./assets/Cookie4.jpg";
import cookie5 from "./assets/Cookie5.jpg";
import cookie6 from "./assets/Cookie6.jpg";
import cookie7 from "./assets/Cookie7.jpg";
import cookie8 from "./assets/Cookie8.jpg";
import cookie9 from "./assets/Cookie9.jpg";


function App() {
  return (
    <div className="flex flex-col pt-10">
      <div className="w-full h-auto flex justify-center">
        <div className="w-3/5 px-12 flex flex-row justify-between text-center">
          <ul className="text-black flex flex-row gap-10 font-bold list-none">
            <li><a className="hover:bg-[#F9C1C4] p-2">Home</a></li>
            <li><a className="hover:bg-[#F9C1C4] p-2">Shop</a></li>
            <li><a className="hover:bg-[#F9C1C4] p-2">About</a></li>
            <li><a className="hover:bg-[#F9C1C4] p-2">Contact</a></li>
          </ul>
          <h1 className="text-black font-extrabold">Treat Bites</h1>
          <ul className="text-black flex flex-row gap-10 font-4xl font-bold">
            <li><a className="hover:text-[#F9C1C4]">Instagram</a></li>
            <li><a className="hover:text-[#F9C1C4]">Facebook</a></li>
            <li><a className="hover:text-[#F9C1C4]">Youtube</a></li>
            <li>
              <GiShoppingBag className="hover:text-[#F9C1C4]" size={25} />
            </li>
          </ul>
        </div>
      </div>
      {/* Hero section */}
      <div className="w-full h-auto flex justify-center p-10 mb-10">
        <div className=" text-black font-semibold p-16 float-left w-3/5 flex flex-col justify-between bg-cover bg-[url('./assets/Cookies-banner.jpg')]">
          <h1 className="text-6xl font-bold text-white">100% NATURAL</h1>
          <h1 className="text-6xl text-white">HOMEMADE</h1>
          <h1 className="text-6xl text-white">FRESHCOOKIES</h1>
          <button className="text-black bg-white border-2 rounded-md p-4 w-fit mt-5">Shop Now</button>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center">
        <div className=" text-black font-semibold p-10 h-15 w-3/5 px-12 flex flex-col">
          <h1 className="text-4xl text-black justify-center flex">/ BEST SELLERS</h1>
          <p className="flex justify-center mt-8">Our best sellers of the month</p>
        </div>
      </div>
      {/* Cards */}
      <div className="w-full h-auto flex justify-center">
        <div className=" text-black font-semibold p-10 h-15 w-3/5 px-12 flex flex-row gap-5 justify-center">
          <div className="w-72 h-fit">
            <div className="border-2 rounded-md">
              <img src={cookie1}></img>
            </div>
            <p className="justify-center flex p-2">WHITE CHOCOLATE BITES</p>
            <p className="justify-center flex text-bold">$2.00</p>
          </div>
          <div className="w-72 h-fit">
            <div className="border-2 rounded-md">
              <img src={cookie2}></img>
            </div>
            <p className="justify-center flex p-2">CARNIVAL BITES</p>
            <p className="justify-center flex text-bold">$4.00</p>
          </div>
          <div className="w-72 h-fit">
            <div className="border-2 rounded-md">
              <img src={cookie3}></img>
            </div>
            <p className="justify-center flex p-2">JAM AND HONEY BITES</p>
            <p className="justify-center flex text-bold">$10.00</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center">
        <div className=" text-black font-semibold p-10 h-15 w-3/5 px-12 flex flex-row items-center">
          <div className="flex-grow border-b-2 border-gray-800"></div>
          <span className="px-3 py-1 text-sm font-medium text-gray-600 border border-gray-800 rounded">ALL COOKIES</span>
          <div className="flex-grow border-b-2 border-gray-800"></div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center p-10">
        <div className=" text-black font-semibold w-3/5 flex flex-col justify-between bg-[#F2F2F2] h-80">
          <h1 className="text-4xl text-black justify-center flex p-4">/ FOLLOW ME FOR MORE BITES</h1>
          {/* Cards 1 */}
          <div className="w-full h-auto flex justify-center">
            <div className=" text-black font-semibold h-15 px-12 flex flex-row gap-5 justify-center">
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie4}></img>
              </div>
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie5}></img>
              </div>
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie6}></img>
              </div>
            </div>
          </div>
          {/* Cards 2 */}
          <div className="w-full h-auto flex justify-center">
            <div className=" text-black font-semibold p-5 h-15 px-12 flex flex-row gap-5 justify-center">
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie7}></img>
              </div>
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie9}></img>
              </div>
              <div className="w-auto h-fit border-2 rounded-md">
                <img className="w-72 h-72" src={cookie8}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center">
        <div className=" text-black font-semibold p-10 h-15 w-3/5 px-12 flex flex-row gap-5 justify-center mt-72">
          <GrAdd size={25} />
        </div>
      </div>
      {/* Features card */}
      <div className="w-full h-auto flex justify-center">
        <div className=" text-black font-semibold p-5 h-15 px-12 flex flex-row gap-5 justify-center">
          <div className="w-64 h-64 border-r-4 border-black flex flex-col justify-center items-center gap-2">
            <LuShoppingBag className="flex items-center" size={50} />
            <p>NEW PICK UP SERVICE</p>
            <p>Get it Fresh</p>
          </div>
          <div className="w-64 h-64 border-r-4 border-black flex flex-col justify-center items-center gap-2">
            <TbTruckDelivery className="flex items-center" size={50} />
            <p>FREE Delivery</p>
            <p>Delivered to your doorstep</p>
          </div>
          <div className="w-64 h-64 flex flex-col justify-center items-center gap-2">
            <GoGift className="flex items-center" size={50} />
            <p>SPECIAL GIFT WRAPS</p>
            <p>Send a Sweet surprise</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-3/5 flex flex-col justify-between float-left bg-pink-50 p-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-2xl text-gray-400 text-extrabold px-2">SHOP</h1>
              </div>
              <div className="">
                <ul className="text-black flex flex-col gap-2 font-bold list-none float-left">
                  <li><a className="hover:cursor-pointer hover:text-[#F9C1C4] p-2">About</a></li>
                  <li><a className="hover:cursor-pointer hover:text-[#F9C1C4] p-2">FAQ</a></li>
                  <li><a className="hover:cursor-pointer hover:text-[#F9C1C4] p-2">Shipping / Pickup</a></li>
                  <li><a className="hover:cursor-pointer hover:text-[#F9C1C4] p-2">Store Policy</a></li>
                  <li><a className="hover:cursor-pointer hover:text-[#F9C1C4] p-2">Contact Me</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-2xl text-gray-400 text-extrabold px-2">OPENING HOURS</h1>
              </div>
              <div className="">
                <ul className="text-black flex flex-col gap-2 font-bold list-none float-left">
                  <li><a className="p-2">Mon-Fri: 7am - 10pm</a></li>
                  <li><a className="p-2">Saturday: 8am - 10pm</a></li>
                  <li><a className="p-2">Sunday: 8am - 10pm</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-2xl text-gray-400 text-extrabold px-2">ADDRESS</h1>
              </div>
              <div className="">
                <ul className="text-black flex flex-col gap-2 font-bold list-none float-left">
                  <li><a className="p-2">1234 Market St, Suite 567</a></li>
                  <li><a className="p-2">San Francisco, CA 94103</a></li>
                  <li><a className="p-2">Tel: (+1) 123-456-7890</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-2xl text-gray-400 text-extrabold px-2">GET IT FRESH</h1>
              </div>
              <div className="flex flex-col gap-2">
                <input className="rounded-md p-2" placeholder="Email Address" />
                <button className="bg-pink-200 text-black p-2">SUBSCRIBE NOW</button>
              </div>
            </div>
          </div>
          <div className="flex flex-row p-2 justify-between">
            <div className="text-black text-2xl">
              <i>&#169;</i> <span className="text-black text-lg font-bold">2024 by Ashraf Khan.</span>
            </div>
            <div>
              <ul className="flex flex-row gap-2">
                <li><FaInstagram className="hover:text-[#F9C1C4] text-black" size={25} /></li>
                <li><FaFacebook className="hover:text-[#F9C1C4] text-black" size={25} /></li>
                <li><FaTwitter className="hover:text-[#F9C1C4] text-black" size={25} /></li>
                <li><FaYoutube className="hover:text-[#F9C1C4] text-black" size={25} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
