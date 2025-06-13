import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">About Us</h2>
      
      <div className="bg-base-100  p-6">
        <p className="text-lg mb-4  leading-relaxed">
          Welcome to <span className="font-semibold text-teal-700">AtlasWay</span>, your trusted companion for discovering and booking unforgettable tour packages. Whether you're craving mountain adventures, cultural retreats, or coastal escapes — we bring the world closer to you with ease and confidence.
        </p>

        <p className=" mb-4">
          Our platform is built with simplicity and security in mind. Users can browse curated travel packages, explore detailed itineraries, and book trips — all while staying connected with experienced local guides. Every booking goes through our verified process, ensuring quality and reliability.
        </p>

        <p className="mb-4">
          As a full-stack platform developed with the MERN stack and Firebase authentication, we prioritize both performance and protection. Whether you're a traveler or a tour provider, you can count on us to deliver a seamless, secure, and memorable experience.
        </p>

        <p className=" font-medium mt-6">
          Start your journey today — with WanderScape, the world is just a click away.
        </p>
      </div>
    </div>
  );
};

export default About;
