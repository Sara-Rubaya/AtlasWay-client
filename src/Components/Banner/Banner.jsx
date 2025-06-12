import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const Banner = () => {
  return (
    <section className=" lg:px-60 md:px-10 sm:px-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/tMgLLRM9/sylhet.jpg"
            className="rounded-xl w-[900px] h-[500px] object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gbvWbmzY/keokadong.jpg"
            className="rounded-xl w-[900px] h-[500px] object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/27w43yWs/coxs.jpg"
            className="rounded-xl w-[900px] h-[500px] object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NdYYXpqQ/puthia.jpg"
            className="rounded-xl w-[900px] h-[500px] object-cover"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/n8fKb7Qm/sundarban.jpg"
            className="rounded-xl w-[900px] h-[500px] object-cover"
            alt="Slide 5"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
