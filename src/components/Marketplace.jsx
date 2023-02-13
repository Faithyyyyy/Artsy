import filter from "./../images/Vector.png";
import dropdown from "./../images/dropdown.png";
import Slider from "./slider";
import ByArtist from "./byArtist";
import { BiSearch } from "react-icons/bi";

import { useState } from "react";
import { Link } from "react-router-dom";

function MarketPlace({ product, handleAddToCart }) {
  const [openDrop, setOpendrop] = useState(true);
  const [visible, setVisible] = useState(9);
  const [hidden, setHidden] = useState("block");
  const title = ["By Category", "By Price", "By Artist"];
  const handleDrop = (item, index) => {
    const valve = title.indexOf(item);
    if (valve === index) {
      return setOpendrop(!openDrop);
      // console.log(valve, index);
    } else {
      console.log("whyyy");
    }
  };
  const showMore = () => {
    setVisible((prev) => prev + 3);
    setHidden("hidden");
  };
  const drop = openDrop ? "block" : "hidden";

  return (
    <div className="my-6 mb-10 lg:px-5 lg:flex max-w-7xl gap-24 mx-auto">
      <div className="px-5 mb-10 lg:hidden">
        <p className="mb-8 font-satoshi font-medium">
          <span className="text-[#BCB7B7]">Home/</span>
          <span className="text-[#BCB7B7]">Marketplace/</span>
          <span className="text-[#BCB7B7]">Editorials/</span>
          <span>Home/</span>
        </p>
        <p className="italic text-[#BCB7B7] mb-4 font-popins">
          Showing 1-5 of 18 results
        </p>
        <form className="bg-white shadow rounded-lg flex p-5 justify-between font-satoshi">
          <select>
            <option
              value="filters"
              className="focus:border-0 outline-0 box border-0"
            >
              Filters
            </option>
          </select>
          <select>
            <option value="sort-by" className="outline-none">
              Sort by
            </option>
          </select>
        </form>
      </div>
      <div className="w-80  h-96 hidden lg:block max-w-[240px]  pt-[12px]">
        <div className="relative">
          <BiSearch className="absolute left-[24px] top-[7px] text-3xl text-[#999999]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F4F2F2] w-[215px] pl-16 py-2 rounded-lg font-satoshi text-xl"
          />
        </div>
        <div className="mt-16">
          <div className="flex gap-6 mb-4">
            <img src={filter} alt="" className="h-8 w-8 " />
            <p className="font-medium text-2xl">Filter</p>
          </div>
          <div className="w-full h-[6px] bg-[#AFB091] rounded-xl"></div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <p className="font-satoshi text-xl font-medium">{title[0]}</p>
          <img
            src={dropdown}
            alt=""
            className="w-4 h-2.5 cursor-pointer"
            onClick={() => handleDrop(title[0], 0)}
          />
        </div>
        <form className={`mt-6 ${drop}`} id="1">
          <input type="checkbox" name="vehicle1" />
          <label htmlFor="vehicle1" className="font-satoshi text-xl ml-5">
            {" "}
            Editorials
          </label>
          <br /> <br />
          <input type="checkbox" name="vehicle2" />
          <label htmlFor="vehicle2" className="font-satoshi text-xl ml-5">
            {" "}
            Fashion
          </label>
          <br /> <br />
          <input type="checkbox" name="vehicle3" />
          <label htmlFor="vehicle3" className="font-satoshi text-xl ml-5">
            {" "}
            Optics
          </label>
          <br /> <br />
          <input type="checkbox" name="vehicle3" />
          <label htmlFor="vehicle3" className="font-satoshi text-xl ml-5">
            {" "}
            Art & Museum
          </label>
          <br /> <br />
          <input type="checkbox" name="vehicle3" />
          <label htmlFor="vehicle3" className="font-satoshi text-xl ml-5">
            {" "}
            Nature
          </label>
          <br /> <br />
        </form>
        <div className="flex items-center justify-between mt-10">
          <p className="font-satoshi text-xl font-medium">{title[1]}</p>
          <img
            src={dropdown}
            alt=""
            className="w-4 h-2.5 cursor-pointer"
            onClick={() => {
              handleDrop(title[1], 1);
            }}
          />
        </div>
        {drop && (
          <div className={``} id="2">
            <p className=" font-satoshi text-xl my-8">$100.00 - $150.00</p>
            <Slider />
          </div>
        )}
        <div className={`flex items-center justify-between mt-10 `}>
          <p className="font-satoshi text-xl font-medium">{title[2]}</p>
          <img
            src={dropdown}
            alt=""
            className="w-4 h-2.5 cursor-pointer"
            // onClick={() => handleDrop(title[2], 2)}
          />
        </div>
        <ByArtist drop={drop} id={3} />
      </div>
      <div className="flex-grow ">
        <div className="hidden lg:flex justify-between bg-white shadow px-8 py-4 rounded-lg w-  mx-auto">
          <p className="font-satoshi">See 1-6 of 15 results</p>
          <select>
            <option value="sort-by" className="outline-none font-satoshi">
              Sort by
            </option>
          </select>
        </div>
        <div className="px-5 grid cards gap-[30px] lg:gap-[10px] lg:px-0 lg:justify-between mt-14 ">
          {product.slice(0, visible).map((data) => {
            return (
              <div
                className="max-w-[257px] sm:max-w-[357px] mx-auto lg:bg-white lg:shadow-md lg:max-w-[380px] lg:px-4 lg:pt-6 lg:pb-4 rounded-md cursor-pointer"
                key={data.id}
                // onClick={() => navigate(`${data.name}`)}
              >
                <Link
                  to={`/marketPlace/${data.id}`}
                  onClick={() => handleAddToCart(data)}
                >
                  <img src={data.logo} alt="imgss" className="w-full " />
                  <div className="flex justify-between lg:flex-col lg:gap-5 mt-4">
                    <h4 className="font-satoshi ">{data.name}</h4>
                    <p className="font-satoshi lg:font-bold">${data.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <button
          onClick={showMore}
          className={`border border-black w-2/6 mx-auto max-w-[200px] py-4 mt-12 rounded ${hidden}`}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default MarketPlace;
