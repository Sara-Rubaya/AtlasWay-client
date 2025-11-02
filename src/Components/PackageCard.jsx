import React from 'react';
import { Link } from 'react-router'; 

const PackageCard = ({ package: pkg }) => {
  if (!pkg) return null;

  const {
    _id, tourName, image, duration, price, departureDate, name, photo
  } = pkg;

  return (
    <div
      className="
        card bg-base-100 rounded-xl overflow-hidden
        shadow-lg transition-all duration-500 transform
        hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(13,148,136,0.6)]
        hover:border hover:border-teal-400
        group
      "
    >
      {/* Image with zoom effect */}
      <figure className="h-64 overflow-hidden">
        <img
          src={image}
          alt={tourName}
          className="
            h-full w-full object-cover rounded-t-xl
            transition-transform duration-700 ease-in-out
            group-hover:scale-110
          "
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-6">
        <h2 className="card-title text-2xl mb-1">{tourName}</h2>

        <div className="flex items-center gap-2 mb-2">
          <img
            src={photo}
            alt={name || 'Guide'}
            className="w-8 h-8 rounded-full object-cover border-2 border-teal-500"
          />
          <p className="text-base font-medium text-gray-700">{name}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-gray-600 border-t pt-2">
          <p><span className="font-semibold text-teal-600">Duration:</span> {duration}</p>
          <p><span className="font-semibold text-teal-600">Departure:</span> {departureDate}</p>
        </div>

        <p className="text-xl font-bold text-teal-600 mt-3">৳ {price}</p>

        <div className="card-actions justify-end mt-4">
          <Link 
            to={`/package/${_id}`} 
            className="
              w-full text-white bg-gradient-to-r from-teal-600 to-lime-500 
              hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 
              focus:ring-4 focus:outline-none focus:ring-lime-600 
              dark:focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
