import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";

function LinkSection() {
  return (
    <section className="my-16 mt-32">
      <div className="border-t border-black ">
        <div className="max-w-6xl mx-auto py-8 large:px-0 flex justify-between px-5 ">
          <span className="text-2xl md:text-4xl font-satoshi">
            Explore marketplace
          </span>
          <Link to="marketPlace">
            <div className=" flex border border-black rounded-round w-10 h-10  items-center justify-center md:hidden">
              <BsArrowRight className="text-2xl text-arroblack" />
            </div>
            <HiArrowNarrowRight className="hidden md:inline-flex text-5xl text-arrowBlue" />
          </Link>
        </div>
      </div>
      <div className="border-t border-b border-black ">
        <div className="max-w-6xl mx-auto py-8 large:px-0 flex justify-between px-5 ">
          <span className="text-2xl md:text-4xl font-satoshi">
            See auctions
          </span>
          <Link to="aunction">
            <div className=" flex border border-black rounded-round w-10 h-10  items-center justify-center md:hidden">
              <BsArrowRight className="text-2xl text-arroblack" />
            </div>
            <HiArrowNarrowRight className="hidden md:inline-flex text-5xl text-arrowBlue" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LinkSection;
