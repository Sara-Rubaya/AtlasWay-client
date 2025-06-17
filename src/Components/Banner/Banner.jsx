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
      autoplay={{ delay: 2000 }}
      loop
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/rG4sd0Jr/train-darjeeling1.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/KjPTLt3K/ssiv-general-04.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/DgQSDM6J/c5e391093f86b9b3fe22bc7cc0a9897a-25198-dubai-evening-desert-safari-002.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/Gvsc9j70/120210044639-eiffel-tower.jpg"
          className="rounded-xl w-full h-[500px] object-cover"
          alt="Slide 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/7Njn41WQ/Mount-Everest.jpg"
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


