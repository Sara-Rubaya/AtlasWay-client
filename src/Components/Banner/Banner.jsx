import { Link } from "react-router";
import SplitText from "../../Components/ScrollVelocity/SplitText";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="relative w-full h-screen" data-aos="fade-up">
      <div className="relative w-full h-screen">
        <img
          src="https://i.ibb.co/rG4sd0Jr/train-darjeeling1.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
        />
        {/* overlay text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <SplitText
              text="Adventure Awaits. Discover Your Next Journey Today."
              className="text-6xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

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
    </div>
  );
};

export default Banner;
