import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold text-accent mb-2">1. Browse Packages</h3>
            <p className="text-gray-600">
              Explore a wide variety of travel destinations and curated tour packages that suit your interests and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold text-accent mb-2">2. Book Easily</h3>
            <p className="text-gray-600">
              Secure your spot with just a few clicks. Our booking system is fast, simple, and safe.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold text-accent mb-2">3. Enjoy Your Trip</h3>
            <p className="text-gray-600">
              Pack your bags and relax. We handle the details so you can enjoy every moment of your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
