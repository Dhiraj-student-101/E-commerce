import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[5vw]">

      <Link to='/'><img src={assets.logo} className="w-36" alt="Forever Logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">

        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search" />
<div className="relative group">
  <img src={assets.profile_icon} className="w-5 min-w-5 cursor-pointer" alt="profile" />
  <div className="absolute right-0 top-6 hidden group-hover:block bg-white shadow-lg rounded py-2 w-36 z-50">
    <NavLink to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</NavLink>
    <NavLink to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</NavLink>
    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</p>
  </div>
</div>
        <div className="relative">
          <NavLink to="/cart">
            <img src={assets.cart_icon} className="w-5 min-w-5 cursor-pointer" alt="cart" />
          </NavLink>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </div>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="menu" />

      </div>

      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-50 ${visible ? "w-64" : "w-0"}`}>
        <div className="flex flex-col text-gray-600 min-w-64">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer border-b">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="back" />
            <p className="font-medium">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b text-sm font-medium hover:bg-gray-50" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b text-sm font-medium hover:bg-gray-50" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b text-sm font-medium hover:bg-gray-50" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b text-sm font-medium hover:bg-gray-50" to="/contact">CONTACT</NavLink>
        </div>
      </div>

      {visible && (
        <div onClick={() => setVisible(false)} className="fixed inset-0 bg-black bg-opacity-30 z-40" />
      )}

    </div>
  );
};

export default Navbar;