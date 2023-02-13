import { useParams } from "react-router-dom";
import dropdown from "./../images/dropdown.png";
import ethereum from "./../images/ethereum.png";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Navigated({
  product,
  handleAddToCart,
  cart,
  cartItemNo,
  handleIncrement,
  handleDecrement,
}) {
  const [closeDropdown, setcloseDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [like, setLike] = useState(true);
  const handleDropdown = (i) => {
    setcloseDropdown(!closeDropdown);
    setActiveItem(activeItem === i ? null : i);
  };
  const handleLike = () => {
    setLike(!like);
  };

  const { id } = useParams();
  const name = product[id].name.toLowerCase();

  return (
    <div className="px-5 large:px-0 max-w-6xl mx-auto ">
      <div className="border-b md:border-none border-black my-10">
        <p className="mb-8 font-satoshi font-medium">
          <span className="text-[#BCB7B7]">Home/</span>
          <span className="text-[#BCB7B7]">Marketplace/</span>
          <span className="text-[#BCB7B7]">Editorials/</span>
          <span className="">
            {name.replace(name[0], name[0].toUpperCase())}
          </span>
        </p>
      </div>
      <div className="lg:flex  lg:border border-black">
        <div className="mb-8 max-w-[525px] mx-auto h-full lg:mx-0 lg:px-6 lg:py-12 lg:pb-0 ">
          <img src={product[id].image} alt="jwkk" className=" w-full " />
          {/* mobile render */}
          <div className="flex justify-between mt-4 md:hidden">
            <p className="font-satoshi text-base font-medium">
              {product[id].name.toUpperCase()}
            </p>
            <p className="font-satoshi text-base font-medium">
              ${product[id].price}
            </p>
          </div>
        </div>

        <div
          className="w-full lg:max-w-[670px] lg:border-l border-black lg:px-0 "
          key={id}
        >
          <div className="flex justify-between items-center lg:py-14 lg:border-b border-black lg:pr-14 ">
            <p className="font-satoshi font-bold text-4xl lg:pl-8">
              {name.replace(name[0], name[0].toUpperCase())}
            </p>
            <div className=" gap-4 items-center hidden lg:flex">
              <img src={ethereum} alt="" className="w-8 h-9" />
              <p className="font-stix  text-2xl font-extralight">0.09</p>
            </div>
          </div>
          <p className="font-satoshi mb-8 lg:text-2xl lg:pl-8 mt-14">
            Creator : <span className="text-[#006CA2]">Ali Dawa</span>
          </p>
          <p className="font-satoshi mb-8 lg:text-2xl lg:pl-8">Made in Italy</p>
          <p className="font-satoshi mb-8 lg:text-2xl lg:pl-8">
            Total views : 1.7K
          </p>

          <div
            className="flex 
          items-center gap-7 lg:ml-8 mb-16"
          >
            <Link to="/cart">
              <button
                className="bg-[#3341C1] px-8 py-4 text-xl rounded text-white font-satoshi"
                // onClick={() => {
                //   handleAddToCart(product[id]);
                // }}
              >
                Add to cart
                <BsArrowRightShort className="inline-block ml-2 text-3xl" />
              </button>
            </Link>
            <button
              className="py-4 px-5 rounded border border-black"
              onClick={handleLike}
            >
              {like ? (
                <BsHeart className=" text-3xl " />
              ) : (
                <BsHeartFill className="text-red-500 text-3xl" />
              )}
            </button>
          </div>
          <div className="">
            <div className="py-8 border-y border-black font-satoshi">
              {/* {items.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-between items-center">
                      <p className="text-xl lg:text-3xl lg:pl-8" id="1">
                        {item.title}
                      </p>
                      <img
                        src={dropdown}
                        alt=""
                        className="w-4 h-2.5 mr-8 cursor-pointer"
                        onClick={() => {handleDropdown();}}
                      />
                    </div>
                    {closeDropdown && (
                      <p className="mt-5 lg:px-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores reprehenderit optio dignissimos incidunt
                        rerum veniam officiis quisquam, quidem non eius at
                        architecto tenetur sit similique repellendus provident,
                        maiores nam. Placeat?
                      </p>
                    )}
                  </div>
                );
              })} */}

              <div className="flex justify-between items-center">
                <p className="text-xl lg:text-3xl lg:pl-8" id="1">
                  {" "}
                  Description
                </p>
                <img
                  src={dropdown}
                  alt=""
                  className="w-4 h-2.5 mr-8 cursor-pointer"
                  onClick={handleDropdown}
                />
              </div>

              {closeDropdown && (
                <p className="mt-5 lg:px-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reprehenderit optio dignissimos incidunt rerum
                  veniam officiis quisquam, quidem non eius at architecto
                  tenetur sit similique repellendus provident, maiores nam.
                  Placeat?
                </p>
              )}
            </div>
            <div className="py-8 font-satoshi border-b border-black">
              <div className="flex justify-between items-center">
                <p className="text-xl lg:text-3xl lg:pl-8" id="2">
                  Listings
                </p>
                <img
                  src={dropdown}
                  alt=""
                  className="w-4 h-2.5 mr-8 cursor-pointer"
                  onClick={() => {
                    handleDropdown();
                    setActiveItem({ id });
                    console.log(id);
                  }}
                />
              </div>

              {activeItem === id}
              {closeDropdown && (
                <p className="mt-5 lg:px-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reprehenderit optio dignissimos incidunt rerum
                  veniam officiis quisquam, quidem non eius at architecto
                  tenetur sit similique repellendus provident, maiores nam.
                  Placeat?
                </p>
              )}
            </div>
            <div className="py-8  font-satoshi ">
              <div className="flex justify-between items-center">
                <p className="text-xl lg:text-3xl lg:pl-8" id="3">
                  Status
                </p>
                <img
                  src={dropdown}
                  alt=""
                  className="w-4 h-2.5 mr-8 cursor-pointer"
                  onClick={handleDropdown}
                />
              </div>
              {closeDropdown && (
                <p className="mt-5 lg:px-8 mr-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores reprehenderit optio dignissimos incidunt rerum
                  veniam officiis quisquam, quidem non eius at architecto
                  tenetur sit similique repellendus provident, maiores nam.
                  Placeat?
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile render */}
    </div>
  );
}
export default Navigated;
