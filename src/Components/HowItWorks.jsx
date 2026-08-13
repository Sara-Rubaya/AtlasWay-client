import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-24 w-full my-15 mb-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 
          className="text-3xl font-bold text-teal-600 mb-6" 
          data-aos="fade-up"
        >
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div 
            className="p-10 rounded-xl shadow-lg bg-base-100 transition transform duration-300 hover:scale-105" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">1. Browse Packages</h3>
            <p>
              Explore a wide variety of travel destinations and curated tour packages that suit your interests and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div 
            className="p-10 rounded-xl shadow-lg bg-base-100 transition transform duration-300 hover:scale-105" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">2. Book Easily</h3>
            <p>
              Secure your spot with just a few clicks. Our booking system is fast, simple, and safe.
            </p>
          </div>

          {/* Step 3 */}
          <div 
            className="p-10 rounded-xl shadow-lg bg-base-100 transition transform duration-300 hover:scale-105" 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">3. Enjoy Your Trip</h3>
            <p>
              Pack your bags and relax. We handle the details so you can enjoy every moment of your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
