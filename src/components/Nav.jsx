import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import { useState } from "react";
// import Cart from "./cart";
function Nav({ notify, setNotify }) {
  const [openNav, setOpenNav] = useState("hidden");

  const [showCart, setsetShowCart] = useState(false);
  const handleCartVisibility = () => {
    setsetShowCart(true);
  };

  const openNavbar = () => {
    setOpenNav("block");
  };
  const closeNavbar = () => {
    return setOpenNav("hidden");
  };
  const closeIt = () => {
    setOpenNav("hidden");
  };
  return (
    <>
      <div
        className={`navbar w-screen bg-white absolute z-50 h-screen px-8 py-6 mediumScreen:hidden ${openNav} `}
      >
        <div className="flex justify-between">
          <h3 className="font-STIX uppercase text-2xl font-bold ">artsy.</h3>
          <AiOutlineClose className="text-3xl" onClick={closeNavbar} />
        </div>
        <div className="flex flex-col mt-14 gap-8 font-satoshi text-2xl">
          <NavLink to="/" onClick={closeIt}>
            Home
          </NavLink>
          <NavLink to="marketPlace" onClick={closeIt}>
            Marketplace
          </NavLink>
          <NavLink to="Aunction" onClick={closeIt}>
            Aunction
          </NavLink>
          <NavLink to="/drop" onClick={closeIt}>
            Drop
          </NavLink>
        </div>
      </div>
      <div className="relative p-5 large:pl-0 max-w-6xl mx-auto z-10">
        <div className="flex justify-between items-center  pt-6">
          <AiOutlineMenu
            className={`text-3xl tablet:hidden mediumScreen:hidden`}
            onClick={openNavbar}
          />
          <h3 className="font-STIX uppercase text-2xl font-bold">artsy.</h3>
          <nav className="hidden mediumScreen:flex gap-12 font-satoshi text-2xl">
            <NavLink to="/" className="text-lg lg:text-xl">
              Home
            </NavLink>
            <NavLink to="marketplace" className="text-lg lg:text-xl">
              Marketplace
            </NavLink>
            <NavLink to="drop" className="text-lg lg:text-xl">
              Drop
            </NavLink>
          </nav>
          <div className="flex gap-5">
            <BiSearch className="text-2xl text-black lg:text-2xl" />
            <NavLink to="/cart">
              <AiOutlineShoppingCart
                className="text-2xl text-black lg:text-2xl"
                onClick={handleCartVisibility}
              />
              <div
                className={`w-2 h-2 bg-red-600 rounded-round relative -top-7 -right-5 ${notify}`}
              ></div>
            </NavLink>
            <NavLink to="drop">
              <BiBell className="text-2xl  text-black hidden tablet:inline-flex lg:text-2xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
