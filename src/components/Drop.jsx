import dropimg1 from "./../images/dropimg1.png";
import dropimg2 from "./../images/dropimg2.png";
import dropimg3 from "./../images/dropimg3.png";
import dropimg4 from "./../images/dropimg4.png";
import { SlEnvolope } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

function Drop() {
  return (
    <div className="px-5 max-w-6xl mx-auto font-satoshi">
      <h1 className="font-satoshi font-bold text-2xl md:text-4xl text-center mt-10 mb-5">
        Upcoming drops
      </h1>
      <p className="text-lg text-center">
        You may turn on notifications so that no drop will miss you.
      </p>
      <div className="flex w-full mt-9">
        <button className="border border-black w-[70%] mx-auto max-w-[370px] h-[50px] rounded">
          Notify me
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-10 mt-10 first:mb-0 md:mb-20 ">
        <div class="md:w-1/2 custom-h  h-[224px] md:h-auto shrink-0 relative px-4 md:px-8 pb-4 rounded-[10px] overflow-hidden flex justify-end flex-col">
          <img
            src={dropimg1}
            alt=""
            class="absolute w-full h-full left-0 bottom-0"
          />
          <button class="absolute md:hidden bg-[#4693ED] text-white top-4 right-4 rounded-[15px] bg-blue font-medium leading-[95%] text-sm py-1.5 px-10">
            UPCOMING
          </button>
          <div class="w-full text-white backdrop-blur-[1.5px] lightbg md:flex items-end justify-between rounded-[0.5rem] border-[0.5px] border-white pt-4 pr-2 pl-4 md:pl-8 pb-2">
            <article class="flex flex-col gap-3">
              <p class="text-lg leading-[175.5%] font-satoshi">
                Time remaining
              </p>
              <h4 class="text-[1.7rem] md:text-[2rem] font-STIX">
                06 hrs : 45 min : 22 s
              </h4>
            </article>
            <button class="hidden md:block top-0 right-1 rounded-[15px] bg-[#4693ED] font-medium leading-[95%] text-sm py-1.5 px-6">
              Join
            </button>
          </div>
        </div>
        <article class="flex flex-col items-start gap-4 md:gap-8">
          <p class="text-white font-inter text-sm py-1 rounded-[10px] px-8 uppercase bg-[#4693ED]">
            upcoming
          </p>
          <p class="text-black">November 21 at 11 am WAT</p>
          <h4 class="text-[1.5rem] text-black font-medium ">
            Eyo: Eko For Show
          </h4>
          <p class="text-[#616161] leading-[157%]">
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p class="text-black text-xl md:text-base font-medium">
            Creator: <span class="text-[#006CA2]">Aliya Minat</span>{" "}
          </p>
          <span class="text-[#006CA2] underline  md:text-sm">Get notified</span>
        </article>
      </div>
      {/* second one */}
      <div class="flex flex-col md:flex-row gap-10 mt-10 first:mb-0 md:mb-20 ">
        <div class="md:w-1/2 custom-h  h-[224px] md:h-auto shrink-0 relative px-4 md:px-8 pb-4 rounded-[10px] overflow-hidden flex justify-end flex-col">
          <img
            src={dropimg2}
            alt=""
            class="absolute w-full h-full left-0 bottom-0"
          />
          <button class="absolute md:hidden bg-[#3EA03B] text-white top-4 right-4 rounded-[15px] bg-blue font-medium leading-[95%] text-sm py-1.5 px-10">
            LIVE NOW
          </button>
          <div class="w-full text-white backdrop-blur-[1.5px] lightbg md:flex items-end justify-between rounded-[0.5rem] border-[0.5px] border-white pt-4 pr-2 pl-4 md:pl-8 pb-2">
            <article class="flex flex-col gap-3">
              <p class="text-lg leading-[175.5%] font-satoshi">
                Time remaining
              </p>
              <h4 class="text-[1.7rem] md:text-[2rem] font-STIX">
                06 hrs : 45 min : 22 s
              </h4>
            </article>
            <button class="hidden md:block top-0 right-1 rounded-[15px] bg-[#4693ED] font-medium leading-[95%] text-sm py-1.5 px-6">
              Join
            </button>
          </div>
        </div>
        <article class="flex flex-col items-start gap-4 md:gap-8">
          <p class="text-white font-inter text-sm py-1 rounded-[10px] px-8 uppercase bg-[#3EA03B]">
            Live
          </p>
          <p class="text-black">November 21 at 11 am WAT</p>
          <h4 class="text-[1.5rem] text-black font-medium ">Ginger Suburbs</h4>
          <p class="text-[#616161] leading-[157%]">
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p class="text-black text-xl md:text-base font-medium">
            Creator:<span class="text-[#006CA2]">Tina Benson </span>{" "}
          </p>
          <span class="text-[#006CA2] underline  md:text-sm">Join now</span>
        </article>
      </div>
      {/* third one */}
      <div class="flex flex-col md:flex-row gap-10 mt-10 first:mb-0 md:mb-20 ">
        <div class="md:w-1/2 custom-h  h-[224px] md:h-auto shrink-0 relative px-4 md:px-8 pb-4 rounded-[10px] overflow-hidden flex justify-end flex-col">
          <img
            src={dropimg3}
            alt=""
            class="absolute w-full h-full left-0 bottom-0"
          />
          <button class="absolute md:hidden bg-[#999EA5] text-white top-4 right-4 rounded-[15px] bg-blue font-medium leading-[95%] text-sm py-1.5 px-10">
            ENDED
          </button>
          <div class="w-full text-white backdrop-blur-[1.5px] lightbg md:flex items-end justify-between rounded-[0.5rem] border-[0.5px] border-white pt-4 pr-2 pl-4 md:pl-8 pb-2">
            <article class="flex flex-col gap-3">
              <p class="text-lg leading-[175.5%] font-satoshi">
                Aunction ended
              </p>
              <h4 class="text-[1.7rem] md:text-[2rem] font-STIX">
                2 hours ago
              </h4>
            </article>
            <button class="hidden md:block top-0 right-1 rounded-[15px] bg-[#999EA5] font-medium leading-[95%] text-sm py-1.5 px-6">
              view
            </button>
          </div>
        </div>
        <article class="flex flex-col items-start gap-4 md:gap-8">
          <p class="text-white font-inter text-sm py-1 rounded-[10px] px-8 uppercase bg-[#999EA5]">
            Ended
          </p>
          <p class="text-black">November 21 at 11 am WAT</p>
          <h4 class="text-[1.5rem] text-black font-medium ">Sink</h4>
          <p class="text-[#616161] leading-[157%]">
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p class="text-black text-xl md:text-base font-medium">
            Creator :<span class="text-[#006CA2]"> Aliya Minat</span>{" "}
          </p>
          <span class="text-[#006CA2] underline  md:text-sm">View</span>
        </article>
      </div>
      {/* fourth one */}
      <div class="flex flex-col md:flex-row gap-10 mt-10 first:mb-0 md:mb-20 ">
        <div class="md:w-1/2 custom-h  h-[224px] md:h-auto shrink-0 relative px-4 md:px-8 pb-4 rounded-[10px] overflow-hidden flex justify-end flex-col">
          <img
            src={dropimg4}
            alt=""
            class="absolute w-full h-full left-0 bottom-0 "
          />
          <button class="absolute md:hidden bg-[#999EA5] text-white top-4 right-4 rounded-[15px] bg-blue font-medium leading-[95%] text-sm py-1.5 px-10">
            ENDED
          </button>
          <div class="w-full text-white backdrop-blur-[1.5px] lightbg md:flex items-end justify-between rounded-[0.5rem] border-[0.5px] border-white pt-4 pr-2 pl-4 md:pl-8 pb-2">
            <article class="flex flex-col gap-3">
              <p class="text-lg leading-[175.5%] font-satoshi">
                Aunction ended
              </p>
              <h4 class="text-[1.7rem] md:text-[2rem] font-STIX">
                5 hours ago
              </h4>
            </article>
            <button class="hidden md:block top-0 right-1 rounded-[15px] bg-[#999EA5] font-medium leading-[95%] text-sm py-1.5 px-6">
              view
            </button>
          </div>
        </div>
        <article class="flex flex-col items-start gap-4 md:gap-8">
          <p class="text-white font-inter text-sm py-1 rounded-[10px] px-8 uppercase bg-[#999EA5]">
            Ended
          </p>
          <p class="text-black">November 21 at 11 am WAT</p>
          <h4 class="text-[1.5rem] text-black font-medium ">Warped ‘99</h4>
          <p class="text-[#616161] leading-[157%]">
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p class="text-black text-xl md:text-base font-medium">
            Creator :<span class="text-[#006CA2]"> Aliya Minat</span>{" "}
          </p>
          <span class="text-[#006CA2] underline  md:text-sm">View</span>
        </article>
      </div>
      <div className=" pb-9 mt-14 lg:mt-32 max-w-6xl mx-auto">
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
    </div>
  );
}

export default Drop;
