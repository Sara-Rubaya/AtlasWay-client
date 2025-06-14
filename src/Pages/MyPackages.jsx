import React, { useContext, useEffect, useState } from 'react';


import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';

const ManagePackages = () => {
  const { user } = useContext(AuthContext);
  const [myPackages, setMyPackages] = useState([]);

  useEffect(() => {
    fetch(`https://your-backend.com/tourPackages?guideEmail=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyPackages(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to delete this package!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://your-backend.com/tourPackages/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              toast.success("Package deleted successfully!");
              setMyPackages(myPackages.filter(pkg => pkg._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Manage My Packages</h2>

      {myPackages.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any packages yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table bg-base-100 shadow w-full">
            <thead>
              <tr className="bg-base-200 text-center">
                <th>#</th>
                <th>Tour Name</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Departure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPackages.map((pkg, idx) => (
                <tr key={pkg._id} className="text-center">
                  <td>{idx + 1}</td>
                  <td>{pkg.tourName}</td>
                  <td>{pkg.duration}</td>
                  <td>${pkg.price}</td>
                  <td>{pkg.departureLocation} <br /> {pkg.departureDate}</td>
                  <td className="space-x-2">
                    <Link to={`/update-package/${pkg._id}`} className="btn btn-xs btn-outline btn-warning">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="btn btn-xs btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManagePackages;
