import filter from "./../images/Vector.png";
import dropdown from "./../images/dropdown.png";
import Slider from "./slider";
import ByArtist from "./byArtist";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

function MarketPlace({ product, handleAddToCart }) {
  const [openDrop, setOpendrop] = useState(false);
  const [products, setProducts] = useState(product);
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(9);
  const [hidden, setHidden] = useState("block");
  const [query, setQuery] = useState("");
  const title = ["By Category", "By Price", "By Artist"];
  const handleDrop = (index) => {
    title.forEach((item, id) => {
      if (index === id) {
        return setOpendrop(!openDrop);
      }
    });
  };

  const showMore = () => {
    setVisible((prev) => prev + 3);
    setHidden("hidden");
  };
  const handleSearch = (e) => {
    setQuery(e.target.value);

    if (e.target.value.length > 0) {
      setHidden("hidden");
    } else {
      setHidden("block");
    }
  };
  const handleFilters = (cate) => {
    const results = product.filter((prd) => {
      return prd.category === cate;
    });
    setProducts(results);
    setHidden("hidden");
    if (isChecked) {
      setProducts(product);
    }
  };
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  const hgh = (e) => {
    const val = e.target.value;

    const results = product.filter((prd) => {
      return prd.category === val;
    });
    if (val === "all") {
      return setProducts(product);
    }
    return setProducts(results);
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
          <select value={(e) => e.target.value} onChange={(e) => hgh(e)}>
            <option
              value="filters"
              className="focus:border-0 outline-0 box border-0"
            >
              Filters
            </option>
            <option value={"editorials"}>Editorials</option>
            <option value={"fashion"}>Fashion</option>
            <option value={"optics"}>optics</option>
            <option value={"art & museum"}>Art & museum</option>
            <option value={"nature"}>Nature</option>
            <option value={"all"}>All</option>
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
            onChange={(e) => handleSearch(e)}
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
            onClick={() => handleDrop(0)}
          />
        </div>
        {
          <form className={`mt-6 `} id="1">
            <label
              htmlFor="vehicle1"
              className="font-satoshi text-2xl "
              onClick={() => handleFilters("editorials")}
            >
              {/* <input type="checkbox" className="mr-3" onChange={handleClick} /> */}
              Editorials
            </label>
            <br /> <br />
            <label
              className="font-satoshi text-2xl "
              onClick={() => handleFilters("fashion")}
            >
              {/* <input type="checkbox" className="mr-3" onChange={handleClick} /> */}
              Fashion
            </label>
            <br /> <br />
            <label
              htmlFor="vehicle3"
              className="font-satoshi text-2xl "
              onClick={() => handleFilters("optics")}
            >
              {/* <input type="checkbox" className="mr-3" onChange={handleClick} /> */}
              Optics
            </label>
            <br /> <br />
            <label
              htmlFor="vehicle3"
              className="font-satoshi text-2xl "
              onClick={() => handleFilters("art & museum")}
            >
              {/* <input type="checkbox" className="mr-3" onChange={handleClick} /> */}
              Art & Museum
            </label>
            <br /> <br />
            <label
              htmlFor="vehicle3"
              className="font-satoshi text-2xl "
              onClick={() => handleFilters("nature")}
            >
              {/* <input type="checkbox" className="mr-3" onChange={handleClick} /> */}
              Nature
            </label>
            <br /> <br />
          </form>
        }
        <div className="flex items-center justify-between mt-10">
          <p className="font-satoshi text-xl font-medium">{title[1]}</p>
          <img
            src={dropdown}
            alt=""
            className="w-4 h-2.5 cursor-pointer"
            onClick={() => {
              handleDrop(1);
            }}
          />
        </div>
        {
          <div className={``} id="2">
            <p className=" font-satoshi text-xl my-8">$100.00 - $150.00</p>
            <Slider />
          </div>
        }
        <div className={`flex items-center justify-between mt-10 `}>
          <p className="font-satoshi text-xl font-medium">{title[2]}</p>
          <img
            src={dropdown}
            alt=""
            className="w-4 h-2.5 cursor-pointer"
            onClick={() => handleDrop(title[2], 2)}
          />
        </div>
        <ByArtist drop={drop} id={3} />
        <br></br>
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
          {products
            .filter((prd) => prd.name.toLowerCase().includes(query))
            .slice(0, visible)
            .map((data) => {
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
