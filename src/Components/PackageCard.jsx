import React from 'react';
import { Link } from 'react-router';
// use react-router-dom not 'react-router'

const PackageCard = ({ package: pkg }) => {
  if (!pkg) return null;

  const {
   _id, tourName,image, duration,departureLocation,destination, price,departureDate,contactNo,packageDetails,email,name,photo
  } = pkg;

 

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      <figure>
        <img src={image} alt={tourName} className="h-65 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tourName}</h2>
        <div className="flex items-center gap-2 mt-1">
          <img
            src={photo }
            
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-sm">{name}</p>
        </div>
        <p>Email: {email}</p>
        <p className="text-sm text-gray-500">🕒 {duration}</p>
        <p className="text-sm text-gray-500">📅 {departureDate}</p>
        <p>{packageDetails}</p>
        <p className="text-lg font-semibold text-teal-600">৳ {price}</p>
        <div className="card-actions justify-end mt-2">
          <Link to={`/package/${_id}`} className="btn btn-sm btn-outline bg-teal-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
