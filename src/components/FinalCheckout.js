import { AiFillLock } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import metamask from "./../images/MetaMask - jpeg.png";
import coinbase from "./../images/Coinbase - png.png";
import walletConnect from "./../images/WalletConnect - jpeg.png";
import Phantom from "./../images/Phantom - jpeg.png";
import metamask2 from "./../images/metamask2.png";
import coinbase2 from "./../images/coinbase2.png";
import walletConnect2 from "./../images/walletconnect2.png";
import Phantom2 from "./../images/phantom2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ^[a-zA-Z0-9]*$
function FinalCheckout({ cart, cartItemNo, handlecartItemNo, SetCart }) {
  const navigate = useNavigate();
  const initialKey = {
    lockKey: "",
  };
  const [key, setKey] = useState("");
  const [select, setSelect] = useState("");
  const [errors, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [keyValues, setKeyValues] = useState({ initialKey });

  const handleKey = (e) => {
    e.preventDefault();
    const vals = e.target.value;
    setKey(vals);
    const { name, value } = e.target;
    setKeyValues({ ...keyValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(keyValues));
    setisSubmit(true);
    if (Object.keys(errors).length === 0 && isSubmit) {
      navigate("/sucesspage");
    }
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9]*$/i;
    if (values.lockKey) {
      error.lockKey = " A Key is Required**";
    } else if (!regex.test(values.lockKey)) {
      errors.fullName = "Invalid key";
    }
    return error;
  };
  return (
    <div className=" px-5 large:px-0 large:pl-0 max-w-6xl mx-auto">
      <div className="loader-container"></div>
      <div className="my-10 large:hidden">
        <p className="mb-8 font-satoshi font-medium md:hidden">
          <span className="text-[#BCB7B7]">Home/</span>
          <span className="text-[#BCB7B7]">Marketplace/</span>
          <span className="text-black">Payment</span>
        </p>
      </div>
      {/* mobile render */}
      <div className="md:hidden">
        <div className="flex gap-3 items-center mb-8">
          <AiFillLock className="text-[#747474] text-lg" />
          <p className="font-satoshi text-lg">Secure Server</p>
        </div>
        <div className=" flex mb-8">
          <input
            type="radio"
            name="wallet"
            value="wallet"
            defaultChecked
            className="radio"
          />
          <label htmlFor="wallet" className="font-satoshi text-lg ml-4">
            Select your wallet
          </label>
        </div>
        <p className="font-satoshi text-lg text-[#616161] my-9">
          Connect with one of our available wallet providers or add and connect
          a new wallet.{" "}
        </p>
        <div className=" gap-6 justify-center hidden smallest:flex">
          <img src={metamask} alt="metamask" className="w-11 h-11" />
          <img src={coinbase} alt="coinbase" className="w-11 h-11" />
          <img src={walletConnect} alt="walletConnect" className="w-11 h-11" />
          <img src={Phantom} alt="phantom" className="w-11 h-11" />
          <div className="w-11 h-11 border-[0.5px] border-black flex items-center justify-center rounded-round">
            <BsPlusLg className="text-black " />
          </div>
        </div>
      </div>
      {/* mobile render */}
      <div>
        <div className="  justify-between hidden md:flex mt-16 my-12">
          <p className="font-satoshi text-lg">Payment method</p>
          <div className="flex gap-3 items-center mb-8">
            <AiFillLock className="text-[#747474] text-lg" />
            <p className="font-satoshi text-lg text-[#747474]">Secure Server</p>
          </div>
        </div>
        <div className="flex gap-6">
          <>
            <div className="max-w-[668px] mx-auto large:mx-0 lg:shadow-lg px-10 py-10">
              <div className="flex justify-between items-center">
                <div className=" mb-5 hidden md:flex">
                  <input
                    type="radio"
                    name="wallet"
                    value="wallet"
                    defaultChecked
                    className="radio2"
                  />
                  <label htmlFor="wallet" className="font-satoshi text-lg ml-3">
                    Select your wallet
                  </label>
                </div>
                <div className=" gap-2 justify-center hidden md:flex">
                  <img src={metamask2} alt="metamask" className="w-11 h-11" />
                  <img src={coinbase2} alt="coinbase" className="w-11 h-11" />
                  <img
                    src={walletConnect2}
                    alt="walletConnect"
                    className="w-11 h-11"
                  />
                  <img src={Phantom2} alt="phantom" className="w-11 h-11" />
                </div>
              </div>
              <p className="text-[#616161] font-satoshi mt-5 mb-16 hidden md:block text-lg">
                Connect with one of our available wallet providers or add and
                connect a new wallet.{" "}
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="wallet"
                    className="text-[#888888] font-satoshi"
                  >
                    Wallet type
                  </label>
                  <br></br>
                  <br></br>
                  <select
                    name="wallet"
                    id="wallet"
                    className="w-full bg-[#F2F2F2] h-[50px] font-satoshi rounded  border border-[#747474] pl-4"
                    required
                    onChange={(e) => setSelect(e.target.value)}
                    value={select}
                  >
                    <option></option>
                    <option>Metamask</option>
                    <option>Coinbase</option>
                    <option>Trust</option>
                    <option>Phantom</option>
                  </select>
                </div>
                <br></br>
                <div className="relative">
                  <label htmlFor="name" className="text-[#888888] font-satoshi">
                    key
                  </label>
                  <br></br>
                  <br></br>
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-[#F2F2F2] h-[50px] font-satoshi rounded  border border-[#747474] pl-4 "
                    placeholder="Please Enter your Key"
                    value={keyValues.lockKey}
                    onChange={(e) => {
                      handleKey(e);
                    }}
                  />
                  <img
                    src={Phantom2}
                    alt="metamask"
                    className="w-9 h-9 absolute top-14 right-2"
                  />
                </div>
                <p className="text-red-500">{errors.lockKey}</p>
                <br></br>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    value="HTML"
                    className="input mr-2"
                  />
                  <label
                    htmlFor="checkbox"
                    className="text-[#888888] font-satoshi"
                  >
                    Save my wallet details & information for future transactions
                  </label>
                  <br></br>
                  <br></br>
                </div>
                <button
                  type="submit"
                  className=" w-full max-w-[668px] mx-auto bg-[#3341C1] h-[57px] rounded-sm text-white font-satoshi flex items-center justify-center mt-9  text-lg md:text-xl"
                >
                  Confirm
                </button>
              </form>
              {/* <button
                type="submit"
                className=" w-full max-w-[668px] mx-auto bg-[#3341C1] h-[57px] rounded-sm text-white font-satoshi flex items-center justify-center mt-9  text-lg md:text-xl"
              >
                Confirm
              </button> */}
            </div>
          </>
          <>
            <div className="mt-12 hidden lg:block more-details">
              <h6 className="font-satoshi text-lg pb-7 border-b border-[#d4d1d1]">
                Payment Summary
              </h6>
              <p className="font-satoshi text-lg mb-5 mt-10">
                {select} wallet : <span>{key}</span>
              </p>
              <p className="font-satoshi text-lg text-[#616161] mt-5  pb-7 border-b border-[#d4d1d1]">
                Actively linked to Yaba, Lagos Nigeria.
              </p>
              <p className="font-satoshi text-lg pb-5 pt-10 border-b border-[#d4d1d1]">
                Expected arrival date:{" "}
                <span>Between 22nd Febuary and 26th March 2023</span>
              </p>
              <div className="grid gap-6 md:order-2 w-full mt-9">
                <div className="flex justify-between text-xl font-satoshi">
                  <p className="text-[#888888] ">Products in cart : </p>
                  <p>{cart.length} items</p>
                </div>
                <div className="flex justify-between text-xl font-satoshi">
                  <p className="text-[#888888] ">Shipping : </p>
                  <p>$80.69</p>
                </div>
                <div className="flex justify-between text-xl font-satoshi">
                  <p className="text-[#888888] ">Total : </p>
                  <p>3 items</p>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default FinalCheckout;
