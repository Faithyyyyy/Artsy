import avatar1 from "./../images/avatar1.png";
import avatar2 from "./../images/avatar2.png";
import avatar3 from "./../images/avatar3.png";
import avatar4 from "./../images/avatar4.png";
import avatar5 from "./../images/avatar5.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useState } from "react";

function FeaturedProducts() {
  return (
    <div className="px-5 max-w-6xl mx-auto">
      <h2 className="text-2xl font-satoshi lg:text-5xl font-semibold mb-10">
        Featured products
      </h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-24 mb-9 md:border-t md:border-b border-black md:py-9">
        <div className="relative h-64 md:h-h7 max-w-pici ">
          <Link to="marketplace">
            <div
              className={`bg-cover w-full  max-w-pici1 h-full md:h-h7 flex flex-col justify-between md:w-96 large:w-w4 img py-16  relative`}
            >
              <span className="text-4xl text-white text-center font-clashDisplay sm:hidden">
                Boolean Egyptian
              </span>
              <div className="border  border-white rounded-round w-12 h-12 flex items-center justify-center self-end mr-36 sm:hidden">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex hide absolute top-24 left-32 gap-6 items-center">
              <span className=" font-clashDisplay text-3xl text-white">
                View Product
              </span>
              <div className="border border-white rounded-round w-16 h-16 flex items-center justify-center">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
          </Link>
        </div>
        <div className="max-w-maxlh">
          <h3 className=" hidden pich:block mb-3 font-STIX text-3xl lg:text-4xl md:mb-5">
            The Boolean Egyptian
          </h3>
          <p className="font-satoshi font-normal text-base max-w-sm mb-6 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex lg:flex items-center gap-4 border-b border-b-black md:border-none pb-6 w-80 md:w-auto md:mt-5">
            <div className="flex">
              <img src={avatar1} alt="avatar1" className="w-11 h-11 " />
              <img src={avatar2} alt="avatar2" className="w-11 h-11 -ml-4" />
              <img src={avatar3} alt="avatar3" className="w-11 h-11 -ml-4" />
              <img src={avatar4} alt="avatar4" className="w-11 h-11 -ml-4" />
              <img src={avatar5} alt="avatar5" className="w-11 h-11 -ml-4" />
            </div>
            <p className="font-satoshi font-medium">64 major creators</p>
            <div className="hidden lg:flex border border-black rounded-round w-14 h-14  items-center justify-center self-end mr-12">
              <Link to="marketPlace">
                <BsArrowRight className="text-3xl text-arrowblack" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* second item(I feel like i am defeating the whole purpose of react. Ask Questions) */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-24 mb-9  md:border-b border-black md:py-9">
        <div className="relative h-64 md:h-h7 max-w-pici lg:order-2">
          <Link to="marketplace">
            <div
              className={`bg-cover w-full  max-w-pici1 h-full md:h-h7 flex flex-col justify-between md:w-96 large:w-w4 img py-16  relative`}
              id="featured2"
            >
              <span className="text-4xl text-white text-center font-clashDisplay sm:hidden">
                Are We There Yet?
              </span>
              <div className="border  border-white rounded-round w-12 h-12 flex items-center justify-center self-end mr-36 sm:hidden">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex hide absolute top-24 left-32 gap-6 items-center">
              <span className=" font-clashDisplay text-3xl text-white">
                View Product
              </span>
              <div className="border border-white rounded-round w-16 h-16 flex items-center justify-center">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
          </Link>
        </div>
        <div className="max-w-maxl">
          <h3 className=" hidden pich:block mb-3 font-STIX text-3xl lg:text-4xl md:mb-5">
            Are We There Yet?
          </h3>
          <p className="font-satoshi font-normal text-base max-w-sm mb-6 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex  lg:flex items-center gap-4 border-b border-b-black md:border-none pb-6 w-80 md:w-auto md:mt-5">
            <div className="flex">
              <img src={avatar1} alt="avatar1" className="w-11 h-11 " />
              <img src={avatar2} alt="avatar2" className="w-11 h-11 -ml-4" />
              <img src={avatar3} alt="avatar3" className="w-11 h-11 -ml-4" />
              <img src={avatar4} alt="avatar4" className="w-11 h-11 -ml-4" />
              <img src={avatar5} alt="avatar5" className="w-11 h-11 -ml-4" />
            </div>
            <p className="font-satoshi font-medium">64 major creators</p>
            <div className="hidden lg:flex border border-black rounded-round w-14 h-14  items-center justify-center self-end mr-12">
              <Link to="marketPlace">
                <BsArrowRight className="text-3xl text-arroblack" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* third item(I feel like i am defeating the whole purpose of react. Ask Questions) */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-32 mb-9   md:py-9">
        <div className="relative h-64 md:h-h7 max-w-pici ">
          <Link to="marketplace">
            <div
              className={`bg-cover w-full  max-w-pici1 h-full md:h-h7 flex flex-col justify-between md:w-96 large:w-w4 img py-16  relative`}
              id="featured3"
            >
              <span className="text-4xl text-white text-center font-clashDisplay sm:hidden">
                Oloibiri 1997
              </span>
              <div className="border  border-white rounded-round w-12 h-12 flex items-center justify-center self-end mr-36 sm:hidden">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex hide absolute top-24 left-32 gap-6 items-center">
              <span className=" font-clashDisplay text-3xl text-white">
                View Product
              </span>
              <div className="border border-white rounded-round w-16 h-16 flex items-center justify-center">
                <BsArrowRight className="text-4xl text-white" />
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-maxl">
          <h3 className=" hidden pich:block mb-3 font-STIX text-3xl lg:text-4xl md:mb-5">
            Oloibiri 1997
          </h3>
          <p className="font-satoshi font-normal text-base max-w-sm mb-6 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex  lg:flex items-center gap-4 border-b border-b-black md:border-none pb-6 w-80 md:w-auto md:mt-5">
            <div className="flex">
              <img src={avatar1} alt="avatar1" className="w-11 h-11 " />
              <img src={avatar2} alt="avatar2" className="w-11 h-11 -ml-4" />
              <img src={avatar3} alt="avatar3" className="w-11 h-11 -ml-4" />
              <img src={avatar4} alt="avatar4" className="w-11 h-11 -ml-4" />
              <img src={avatar5} alt="avatar5" className="w-11 h-11 -ml-4" />
            </div>
            <p className="font-satoshi font-medium">64 major creators</p>
            <div className="hidden lg:flex border border-black rounded-round w-14 h-14  items-center justify-center self-end mr-12">
              <Link to="marketPlace">
                <BsArrowRight className="text-3xl text-arroblack" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
