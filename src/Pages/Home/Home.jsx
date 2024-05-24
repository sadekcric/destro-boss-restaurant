import Banner from "./Banner";
import BistroSection from "./BistroSection";
import Callus from "./Callus";
import Featured from "./Featured";
import OrderOnline from "./OrderOnline";
import OurMenu from "./OurMenu";
import Testimonial from "./Testimonial";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <OrderOnline />
        <BistroSection />
        <OurMenu />
        <Callus />
        <Featured />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
