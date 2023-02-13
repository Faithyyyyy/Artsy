import { SlEnvolope } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-5 pb-9 lg:mt-32 max-w-6xl mx-auto lg:px-0">
      <div className="md:border border-black md:py-16">
        <h5 className="font-Baskervville font-light text-3xl uppercase mb-3 md:text-center">
          NewsLetter
        </h5>
        <p className="text-xs font-satoshi mb-6 md:hidden">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>
        <p className="hidden md:block text-center font-satoshi text-2xl ">
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <div className="sm:flex gap-6 md:justify-center md:mt-10">
          <input
            type="text"
            placeholder=" Enter your email here"
            className="border pl-3 border-black placeholder:font-satoshi placeholder:text-xs placeholder:text-black placeholder:uppercase placeholder:pl-3 py-3 sm:py-0 w-full max-w-[446px] md:placeholder:font-Baskervville md:font-light"
          />
          <button className="bg-black text-white uppercase block px-9 py-4 h-full  font-satoshi text-xs mt-5 sm:m-0 md:font-Baskervville font-light">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <p className="font-popins text-sm mt-8 font-light uppercase mb-4">
          Reach us
        </p>
        <div className="flex items-center gap-5">
          <SlEnvolope className="text-2xl" />
          <p className="font-satoshi font-xs">artsystudios@gmail.com</p>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <GoLocation className="text-2xl" />
          <p className="font-satoshi font-xs">Lagos, Nigeria.</p>
        </div>
      </div>
      <footer className="hidden lg:flex gap-24 mt-16 max-w-[900px] mx-auto mb-14">
        <h3 className="font-STIX uppercase text-2xl font-bold self-center ">
          artsy.
        </h3>
        <div className="flex flex-col gap-8">
          <Link to="/" className="text-xl font-satoshi">
            Home
          </Link>
          <Link to="marketplace" className="text-xl font-satoshi">
            Marketplace
          </Link>
          <Link to="aunction" className="text-xl font-satoshi">
            Aunction
          </Link>
          <Link to="drop" className="text-xl font-satoshi">
            Drop
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-xl font-satoshi">Blog</p>
          <p className="text-xl font-satoshi">Wallets</p>
          <p className="text-xl font-satoshi">Rates</p>
          <p className="text-xl font-satoshi">High bids</p>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <SlEnvolope className="text-3xl" />
            <p className="font-satoshi font-xs">artsystudios@gmail.com</p>
          </div>
          <div className="flex items-center gap-5 mt-7">
            <GoLocation className="text-3xl" />
            <p className="font-satoshi font-xs">Lagos, Nigeria.</p>
          </div>
        </div>
      </footer>
      <p className="hidden lg:block opacity-50 lg:text-lg font-rubiks text-center text-[#333333]">
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
