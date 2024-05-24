import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../CommonRoute/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import coat from "../../assets/icon/Group.png";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`review.json`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <section className="mt-10 lg:mt-24 container mx-auto p-3">
      <SectionTitle subHeading={"---What Our Clients Say---"} heading={"Testimonial"} />

      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((r) => (
            <SwiperSlide key={r._id}>
              <div className="flex items-center justify-center h-[300px] ">
                <div className="lg:w-1/2 w-4/5 flex flex-col items-center space-y-5">
                  <Rating style={{ maxWidth: 180 }} value={3} readOnly />
                  <img src={coat} alt="" />
                  <p className="text-lg">{r.details}</p>
                  <h3 className="text-3xl font-bold text-[#CD9003]">{r.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
