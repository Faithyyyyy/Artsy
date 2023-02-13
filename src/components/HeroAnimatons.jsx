import heroImg1 from "./../images/heroImg1.png";
import heroImg2 from "./../images/heroImg2.png";
import heroImg3 from "./../images/heroImg3.png";
import img1 from "./../images/img1.png";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.png";
import img4 from "./../images/img4.png";
import img5 from "./../images/img5.png";

function HeroAnimation() {
  return (
    <>
      <div className="relative hidden smallest:block sm:hidden mb-16">
        <div className="bg-bgred h-12 w-12 rounded-round absolute right-4 bottom-5"></div>
        <div className="bg-bgblue h-12 w-12 rounded-round absolute right-4 top-5"></div>
        <div className="bg-bgbrown h-12 w-12 rounded-round absolute left-4 bottom-6"></div>
        <div className="glass h-72 ">
          <div className="w-5/6 relative max-w-small mx-auto">
            <img src={heroImg1} alt="pic1" className="absolute" />
            <img src={heroImg2} alt="pic2" className="absolute" />
            <img
              src={heroImg3}
              alt="pic3"
              className="absolute h-h1 w-w1 left-4 top-5"
            />
          </div>
        </div>
      </div>
      <div className="scrollbar-hide hidden sm:flex overflow-x-auto  gap-5 mt-20 h-h6 mb-16">
        <img
          src={img1}
          alt="First slide pic"
          className="w-w2 h-h3 self-center"
        />
        <img
          src={img2}
          alt="second slide pic"
          className="w-w2 h-h4 self-center"
        />
        <img
          src={img3}
          alt="third slide pic"
          className="w-w2 h-h6 self-start"
        />
        <img src={img4} alt="Fourth slide pic" className="w-w2 h-h4 self-end" />
        <img src={img5} alt="Fifth slide pic" className="w-w2 h-h4" />
      </div>
    </>
  );
}

export default HeroAnimation;
