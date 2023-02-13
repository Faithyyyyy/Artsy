import aunctionimg1 from "./../images/aunctionimg1.png";
import aunctionimg2 from "./../images/aunctionimg2.png";
import aunctionimg3 from "./../images/aunctionimg3.png";

function Aunction() {
  return (
    <div className="px-5 font-satoshi">
      <div className="hidden md:block">
        <p className="mb-8 font-satoshi font-medium">
          <span className="text-[#BCB7B7]">Home/</span>
          <span>Aunction</span>
        </p>
      </div>
      <p>Here’s an overview of products actively on auction, explore!</p>
      <div className=" flex scrollbar-hide overflow-x-auto gap-5">
        <div className="relative">
          <img
            src={aunctionimg1}
            className="w-full max-w-[228px] h-[186px]"
            alt="aunctionimg1"
          />
          <div className="w-[90%] rounded-xl absolute timeframes h-12 border border-white text-black top-0 mx-auto"></div>
        </div>
        <img
          src={aunctionimg2}
          className=" max-w-[228px] h-[186px]"
          alt="aunctionimg2"
        />
        <img
          src={aunctionimg3}
          className=" max-w-[228px] h-[186px]"
          alt="aunctionimg3"
        />
      </div>
    </div>
  );
}

export default Aunction;
