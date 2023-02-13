import illustration from "./../images/womanIllustration.png";
import successIllustration from "./../images/sucessIllustration.png";
function Successpage({ yourName }) {
  return (
    <div className="mb-36 max-w-6xl mx-auto">
      <img
        src={successIllustration}
        alt="successIllustration"
        className="absolute w-[500px] h-[500px] z-0  hidden sm:block -top-60 -left-11"
      />
      <div className="relative hidden smallest:block sm:hidden mb-16">
        <div className="bg-[#9B62EC] h-32 w-32 rounded-round absolute right-20 top-8"></div>
        <div className="bg-bgblue h-32 w-32 rounded-round absolute -left-8 top-5"></div>
        <div className="bg-bgbrown h-32 w-32 rounded-round absolute right-4 bottom-6"></div>
        <div className="glass h-96 ">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <img
        src={illustration}
        alt="illustration"
        className="hidden sm:block max-w-[454px] h-[405px] mx-auto"
      />
      <h6 className="font-satoshi text-center text-2xl mt-16 px-5 illustrationP:mt-28 pich:mt-36 sm:mt-16">
        Hey {yourName}, thank you for your purchase.{" "}
      </h6>
      <p className="font-satoshi text-center text-xl mt-7 text-[#616161] px-5">
        You are amazing. Cheers to being{" "}
        <span className="text-[#006CA2]">ARTSY!</span>
        {""} 🎉
      </p>
    </div>
  );
}

export default Successpage;
