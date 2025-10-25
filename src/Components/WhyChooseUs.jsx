import React from 'react';

const WhyChooseUs = () => {
  return (
    
    <section className="py-24 my-15"> 
      <div className="max-w-7xl mx-auto text-center"> 
        <h2 className="text-3xl font-bold mb-4 text-teal-600">Why Choose Us</h2>
        <p className="mb-10 text-gray-400">We make your travel simple, secure, and unforgettable.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-14 bg-base-100 rounded-xl shadow-lg hover:shadow-md transition"> 
            <h3 className="text-xl font-semibold mb-2">Curated Packages</h3>
            <p>Handpicked destinations and experiences tailored for every traveler.</p>
          </div>
          <div className="p-14 bg-base-100 rounded-xl shadow-lg hover:shadow-md transition"> 
            <h3 className="text-xl font-semibold mb-2">Secure Bookings</h3>
            <p>Trusted partners and secure payment gateways ensure peace of mind.</p>
          </div>
          <div className="p-14 bg-base-100 rounded-xl shadow-lg hover:shadow-md transition"> 
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Our team is always here to assist you before, during, and after your trip.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;