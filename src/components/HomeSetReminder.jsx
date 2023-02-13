import { Link } from "react-router-dom";
function HomeSetReminder() {
  return (
    <section className="section  w-full p-10 mb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-satoshi hidden lg:block">
          See Upcoming Auctions and Exhibitions
        </h2>
        <div className="h-[0.5px] w-[667px] hidden lg:block bg-white my-6"></div>
        <article className="article  py-8 px-3 w-full lg:px-10 md:h-[546px] md:flex flex-col md:justify-end">
          <div className="flex gap-6 lg:gap-6">
            <div className="bg-white h-4 w-4 md:h-6 md:w-6 rounded-round mt-1 sm:mt-0"></div>
            <h3 className="text-white font-bellefair text-base md:text-xl">
              MONALISA REDEFINED IN STYLE.
            </h3>
          </div>
          <div className="flex gap-4 mt-8 ">
            <span className="font-bellefair text-4xl text-white">01</span>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-20 largest:gap-32">
              <div>
                <h3 className="font-popins text-white uppercase text-sm ">
                  Start on : 08:00 GTS . Monday{" "}
                </h3>
                <p className="mt-5 text-white  text-xs lg:text-base tracking-wide md:max-w-[450px] large:max-w-[600px]">
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>
              </div>
              <div className="flex items-center justify-end gap-8 mt-7 ">
                <p className="text-white underline font-satoshi text-sm lg:text-base">
                  See More
                </p>
                <Link to="drop">
                  <button className="border border-white text-white font-satoshi text-sm rounded-lg  p-1.5 lg:py-2 lg:text-base lg:px-2">
                    Set a Reminder
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HomeSetReminder;
