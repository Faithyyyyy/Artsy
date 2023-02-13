import React from "react";
import { Suspense } from "react";
import HeroAnimation from "./HeroAnimatons";
// import FeaturedProducts from "./FeaturedProducts";
import HomeSetReminder from "./HomeSetReminder";
import LinkSection from "./LinkSection";
import Designsection from "./Designsection";
import Footer from "./Footer";
const FeaturedProducts = React.lazy(() => import("./FeaturedProducts"));

function Home() {
  return (
    <>
      <div className="mt-12">
        <h1 className="font-medium lg:font-semibold text-3xl font-clashDisplay text-center md:text-5xl  lg:text-6xl px-6 leading-lineHeight md:leading-lineHeight lg:leading-lineHeight md:max-w-3xl lg:max-w-5xl mx-auto">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="font-satoshi font-medium leading-7 text-center max-w-max mx-auto lg:max-w-medium lg:text-medium mt-10 lg:leading-9 px-4 md:px-0 mb-6">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <HeroAnimation />
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts />
      </Suspense>
      <HomeSetReminder />
      <LinkSection />
      <Designsection />
      <Footer />
    </>
  );
}

export default Home;
