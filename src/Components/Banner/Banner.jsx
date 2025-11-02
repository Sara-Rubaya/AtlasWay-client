import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative w-full h-screen" data-aos="fade-up">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // smoother, slower speed
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
      >
        {[
          "https://i.ibb.co/rG4sd0Jr/train-darjeeling1.jpg",
          "https://i.ibb.co/KjPTLt3K/ssiv-general-04.jpg",
          "https://i.ibb.co/DgQSDM6J/c5e391093f86b9b3fe22bc7cc0a9897a-25198-dubai-evening-desert-safari-002.jpg",
          "https://i.ibb.co/Gvsc9j70/120210044639-eiffel-tower.jpg",
          "https://i.ibb.co/7Njn41WQ/Mount-Everest.jpg",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              {/* overlay text */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    "Adventure Awaits. Discover Your Next Journey Today."
                  </h2>
                  <p className="mb-6 text-lg md:text-xl">
                    Find the perfect tour package and explore the world your way —
                    simple, secure, and unforgettable.
                  </p>
                  <Link to="/all-packages">
                    <button className="btn hover:bg-teal-700 text-lg px-6 py-2">
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
