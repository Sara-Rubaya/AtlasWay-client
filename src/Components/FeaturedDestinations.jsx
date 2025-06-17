import React from 'react';

const FeaturedDestinations = () => {
  const destinations = [
    { name: 'Dubai', img: 'https://i.ibb.co/DgQSDM6J/c5e391093f86b9b3fe22bc7cc0a9897a-25198-dubai-evening-desert-safari-002.jpg' },
    { name: 'Darjeeling', img: 'https://i.ibb.co/rG4sd0Jr/train-darjeeling1.jpg' },
    { name: 'Maldivs', img: 'https://i.ibb.co/KjPTLt3K/ssiv-general-04.jpg' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Featured Destinations</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((dest, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <figure>
                <img src={dest.img} alt={dest.name} className="h-48 w-full object-cover rounded-t-xl" />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p>Explore the beauty and culture of {dest.name} with our custom packages.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
