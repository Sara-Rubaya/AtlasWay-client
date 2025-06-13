import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";


const Banner = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 items-center pb-5">
  <section className="md:col-span-2 w-full">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/tMgLLRM9/sylhet.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/gbvWbmzY/keokadong.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/27w43yWs/coxs.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/NdYYXpqQ/puthia.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/n8fKb7Qm/sundarban.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 5"
        />
      </SwiperSlide>
    </Swiper>
  </section>

  <div className="card bg-base-300  w-full">
    <div className="card-body">
      <h2 className="card-title">"Adventure Awaits. Discover Your Next Journey Today."</h2>
      <p>Find the perfect tour package and explore the world your way — simple, secure, and unforgettable.</p>
      <div className="card-actions justify-end">
       <Link to="/all-packages">
        <button className="btn hover:bg-teal-700">Explore More</button>
       </Link>
      </div>
    </div>
  </div>
</div>

    
  );
};

export default Banner;


