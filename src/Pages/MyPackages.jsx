import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const ManagePackages = () => {
  const data = useLoaderData();
  const [packages, setPackages] = useState(data?.data || []);
  const { user } = useContext(AuthContext);
  const [selectedPackage, setSelectedPackage] = useState(null);

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

  const handleEdit = (pkg) => {
    setSelectedPackage(pkg);
    document.getElementById('edit_modal').showModal();
  };

  const myPackages = packages.filter(pkg => pkg?.email === user?.email);

  return (
    <div className='m-10'>
      <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Manage My Packages</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
        {
          myPackages.map(pkg => (
            <div key={pkg._id} className='relative rounded shadow p-4'>
              <img src={pkg.image} alt={pkg.tourName} className='w-full h-48 object-cover rounded' />
              <h3 className='text-xl font-bold mt-4'>{pkg.tourName}</h3>
              <p className='text-sm text-gray-600'>৳ {pkg.price}</p>
              <div className='flex justify-between mt-4'>
                <button
                  onClick={() => handleEdit(pkg)}
                  className='btn btn-sm btn-outline text-blue-600 flex items-center gap-1'
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className='btn btn-sm btn-outline text-red-600 flex items-center gap-1'
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {/* Edit Modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box w-full max-w-2xl">
          <h3 className="font-bold text-lg mb-4">Update Tour Package</h3>
          <form
            method="dialog"
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Optional: handle update logic here
              Swal.fire('Updated!', 'Package info has been updated.', 'success');
              document.getElementById('edit_modal').close();
            }}
          >
            <input type="text" placeholder="Tour Name" className="input input-bordered w-full"
              defaultValue={selectedPackage?.tourName} />
            <input type="text" placeholder="Image URL" className="input input-bordered w-full"
              defaultValue={selectedPackage?.image} />
            <input type="text" placeholder="Duration" className="input input-bordered w-full"
              defaultValue={selectedPackage?.duration} />
            <input type="number" placeholder="Price" className="input input-bordered w-full"
              defaultValue={selectedPackage?.price} />
            <input type="date" className="input input-bordered w-full"
              defaultValue={selectedPackage?.departureDate?.slice(0, 10)} />
            <textarea className="textarea textarea-bordered w-full" placeholder="Package Details">
              {selectedPackage?.packageDetails}
            </textarea>
            <div className="modal-action">
              <button type="submit" className="btn bg-teal-700 text-white">Update</button>
              <button type="button" className="btn" onClick={() => document.getElementById('edit_modal').close()}>Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManagePackages;
