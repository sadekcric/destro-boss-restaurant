import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bnr1 from "../../assets/home/01.jpg";
import bnr2 from "../../assets/home/02.jpg";
import bnr3 from "../../assets/home/03.png";
import bnr4 from "../../assets/home/04.jpg";
import bnr5 from "../../assets/home/05.png";
import bnr6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div className="lg:h-[804px]">
          <img className="h-full" src={bnr1} alt="" />
        </div>
        <div className="lg:h-[804px]">
          <img className="h-full" src={bnr2} alt="" />
        </div>
        <div className="lg:h-[804px]">
          <img src={bnr3} alt="" />
        </div>
        <div className="lg:h-[804px]">
          <img className="h-full" src={bnr4} alt="" />
        </div>
        <div className="lg:h-[804px]">
          <img className="h-full" src={bnr5} alt="" />
        </div>
        <div className="lg:h-[804px]">
          <img className="h-full" src={bnr6} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
