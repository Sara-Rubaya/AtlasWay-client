import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';

const ManagePackages = () => {
  const data = useLoaderData();
  const [packages, setPackages] = useState(data?.data || []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://your-api.com/packages/${id}`, {
          method: 'DELETE',
        });
        const json = await res.json();
        if (json.success) {
          Swal.fire('Deleted!', 'Your package has been deleted.', 'success');
          setPackages(packages.filter(pkg => pkg._id !== id));
        }
      } catch (err) {
        Swal.fire('Error!', 'Something went wrong.', err);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-package/${id}`);
  };

  const myPackages = packages.filter(pkg => pkg?.email === user?.email);

  return (
    <div className='m-10'>
      <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Manage My Packages</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
        {
          myPackages.map(pkg => (
            <div key={pkg._id} className='relative  rounded shadow p-4'>
              <img src={pkg.image} alt={pkg.tourName} className='w-full h-48 object-cover rounded' />
              <h3 className='text-xl font-bold mt-4'>{pkg.tourName}</h3>
              <p className='text-sm text-gray-600'>৳ {pkg.price}</p>
              <div className='flex justify-between mt-4'>
                <button onClick={() => handleEdit(pkg._id)} className='btn btn-sm btn-outline text-blue-600 flex items-center gap-1'>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete(pkg._id)} className='btn btn-sm btn-outline text-red-600 flex items-center gap-1'>
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>

    
    </div>
  );
};

export default ManagePackages;
