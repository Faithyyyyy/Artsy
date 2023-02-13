import designimg1 from "./../images/designimg1.png";
import designimg2 from "./../images/designimg2.png";
import designimg3 from "./../images/designimg3.png";
import { useState } from "react";
// import { useEffect } from "react";
// import { useMemo } from "react";

function Designsection() {
  const imgs = [designimg1, designimg2, designimg3];
  const [imageNo, setImageNo] = useState(0);

  return (
    <section className="bg-bgGray px-5 pt-5 mt-10 mb-16">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex  justify-between">
          <div>
            <h3 className="font-clashDisplay text-2xl mb-10 md:pt-10 md:text-5xl font-semibold md:mb-16 max-w-[535px] lg:leading-[1.5] lg:text-6xl">
              TOP CREATORS OF THE WEEK
            </h3>
          </div>
          {/* hidden aesthetics */}
          <div className="h-[250px] hidden lg:flex justify-between gap-10">
            <div className="bg-lineGray w-[10px] h-full rounded flex">
              <div className="bg-black h-9 w-full self-end rounded"></div>
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-clashDisplay text-3xl">Editorials</p>
              <p className="font-clashDisplay text-3xl">Fashion</p>
              <p className="font-clashDisplay text-3xl">Lifestyle</p>
              <p className="font-clashDisplay text-3xl">Blueprint</p>
            </div>
          </div>
          {/* hidden aesthetics */}
        </div>
        <p className="font-clashDisplay text-sm md:text-xl text-left font-extralight max-w-[1000px]">
          "Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <div className="relative bottom-7  left-0 flex flex-col  items-end">
          <p className="font-clashDisplay font-bold text-3xl text-center lg:text-5xl mb-5 ">
            CIRCA
          </p>
          <p className="font-clashDisplay font-bold line-through text-5xl lg:text-9xl">
            1985
          </p>
        </div>
        <div className=" absolute z-50 lg:h-96 lg:w-96 hidden left-8 smaller:top-24 pich:hidden lg:block  lg:top-72 lg:left-72 w-9/12">
          <img src={imgs[imageNo]} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default Designsection;
