import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';


const AllPackages = () => {
  const { user } = useContext(AuthContext);
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://your-backend.com/tourPackages')
      .then(res => res.json())
      .then(data => setPackages(data))
      .catch(err => console.error(err));
  }, []);

  const filteredPackages = packages.filter(pkg =>
    pkg.tourName.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (id) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/package/${id}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Explore Tour Packages</h2>

      {/* Search Field */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search tour by name"
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPackages.length > 0 ? (
          filteredPackages.map(pkg => (
            <div key={pkg._id} className="card bg-base-100 shadow-md">
              <figure>
                <img src={pkg.image} alt={pkg.tourName} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl text-primary">{pkg.tourName}</h3>
                
                {/* Guide Info */}
                <div className="flex items-center gap-3 mt-2">
                  <img src={pkg.guidePhoto} alt={pkg.guideName} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{pkg.guideName}</p>
                    <p className="text-xs text-gray-500">{pkg.guideEmail}</p>
                  </div>
                </div>

                <p><strong>Duration:</strong> {pkg.duration}</p>
                <p><strong>Price:</strong> ${pkg.price}</p>
                <p><strong>Departure:</strong> {pkg.departureDate}</p>

                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleViewDetails(pkg._id)}
                    className="btn btn-outline btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No tour packages found.</p>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
