import React from 'react';
// ✅ 'react-router-dom' এর বদলে শুধু 'react-router' থেকে Link ইম্পোর্ট করা হলো
import { Link } from 'react-router'; 

const PackageCard = ({ package: pkg }) => {
  if (!pkg) return null;

  const {
   _id, tourName, image, duration, price, departureDate, name, photo
  } = pkg;
 

  return (
    
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
      
     
      <figure className="h-64"> 
        <img 
          src={image} 
          alt={tourName} 
          className="h-full w-full object-cover rounded-t-xl" 
        />
      </figure>
      
      
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
            <p className="">**Duration:** {duration}</p>
            <p className="">**Departure:** {departureDate}</p>
        </div>

       
        <p className="text-xl font-bold text-teal-600 mt-3">৳ {price}</p>
        
        
        <div className="card-actions justify-end mt-4">
          <Link 
            to={`/package/${_id}`} 
            className="w-full text-white bg-gradient-to-r from-teal-600 to-lime-500 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;