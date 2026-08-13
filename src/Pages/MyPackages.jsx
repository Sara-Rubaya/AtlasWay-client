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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/packages/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remainingPackages = packages.filter(pkg => pkg._id !== id);
              setPackages(remainingPackages);
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };

  const openEditModal = (pkg) => {
    setSelectedPackage(pkg);
    document.getElementById('edit_modal').showModal();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPackage = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/packages/${selectedPackage._id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(updatedPackage)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Package updated successfully.",
            showConfirmButton: false,
            timer: 1500
          });

          const updatedList = packages.map(pkg =>
            pkg._id === selectedPackage._id ? { ...pkg, ...updatedPackage } : pkg
          );
          setPackages(updatedList);
          document.getElementById('edit_modal').close();
        }
      });
  };

  return (
    <div className='m-10'>
      <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Manage My Packages</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
        {
          packages
            .filter(pkg => pkg?.email === user?.email)
            .map(pkg => (
              <div key={pkg._id} className='relative rounded shadow p-4'>
                <img src={pkg.image} alt={pkg.tourName} className='w-full h-48 object-cover rounded' />
                <h3 className='text-xl font-bold mt-4'>{pkg.tourName}</h3>
                <p className='text-sm text-gray-600'>৳ {pkg.price}</p>
                <div className='flex justify-between mt-4'>
                  <button
                    onClick={() => openEditModal(pkg)}
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
            onSubmit={handleEditSubmit}
          >
            <input name="tourName" type="text" placeholder="Tour Name" className="input input-bordered w-full"
              defaultValue={selectedPackage?.tourName} />
            <input name="image" type="text" placeholder="Image URL" className="input input-bordered w-full"
              defaultValue={selectedPackage?.image} />
            <input name="duration" type="text" placeholder="Duration" className="input input-bordered w-full"
              defaultValue={selectedPackage?.duration} />
            <input name="price" type="number" placeholder="Price" className="input input-bordered w-full"
              defaultValue={selectedPackage?.price} />
            <input name="departureDate" type="date" className="input input-bordered w-full"
              defaultValue={selectedPackage?.departureDate?.slice(0, 10)} />
            <textarea name="packageDetails" className="textarea textarea-bordered w-full" placeholder="Package Details"
              defaultValue={selectedPackage?.packageDetails}
            ></textarea>
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
