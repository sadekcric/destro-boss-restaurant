import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// Image
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../CommonRoute/SectionTitle";

const OrderOnline = () => {
  return (
    <section className="container mx-auto p-3">
      {/* title */}
      {/* <div className="text-center space-y-5 mt-10 ">
        <p className="text-lg font-semibold text-[#D99904]">---From 11:00am to 10:00pm---</p>
        <h1 className="lg:text-5xl text-3xl font-semibold py-4 border-y-4 inline-block lg:px-10 px-6">ORDER ONLINE</h1>
      </div> */}

      <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"} />

      {/* Slider */}
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="">
              <img className="w-full h-[450px]" src={slider1} alt="" />
              <p className="text-3xl text-center mt-3 relative bottom-14 uppercase font-semibold text-white">Salad</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className=" w-full h-[450px]" src={slider2} alt="" />
              <p className="text-3xl text-center mt-3 relative bottom-14 uppercase font-semibold text-white">Pizzas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="w-full h-[450px]" src={slider3} alt="" />
              <p className="text-3xl text-center mt-3 relative bottom-14 uppercase font-semibold text-white">Soups</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="w-full h-[450px]" src={slider4} alt="" />
              <p className="text-3xl text-center mt-3 relative bottom-14 uppercase font-semibold text-white">Desserts</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="w-full h-[450px]" src={slider5} alt="" />
              <p className="text-3xl text-center mt-3 relative bottom-14 uppercase font-semibold text-white">Visitable</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnline;
