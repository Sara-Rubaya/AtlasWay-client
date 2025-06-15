import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';


const PackageDetails = () => {
  const { data: pkg } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [specialNote, setSpecialNote] = useState('');

  const {
    _id, tourName, image, duration, price, departureDate,
    name, photo, departureLocation, destination,
    contactNo, packageDetails, email
  } = pkg || {};

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      tourId: _id,
      tourName,
      price,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      bookingDate: new Date().toISOString(),
      note: specialNote,
      status: 'pending',
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      const result = await res.json();

      setShowModal(false); // Close modal first

      setTimeout(() => {
        if (result.success) {
          Swal.fire({
            title: 'Booked!',
            text: 'Your tour package has been booked successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: result.message || 'Something went wrong!',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      }, 300);

    } catch (error) {
      setShowModal(false);
      setTimeout(() => {
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }, 300);
    }
  };

  return (
    <div>
      <h1 className='text-4xl text-center text-teal-600 font-bold pt-10'>Details : {tourName}</h1>
      <div className="flex justify-center">
        <div className="card bg-base-100 shadow-md w-2/4 m-10">
          <figure>
            <img src={image} alt={tourName} className="h-65 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{tourName}</h2>
            <div className="flex items-center gap-2 mt-1">
              <img src={photo} className="w-8 h-8 rounded-full object-cover" />
              <p className="text-sm">{name}</p>
            </div>
            <p className="text-sm text-gray-500">🕒 {duration}</p>
            <p className="text-sm text-gray-500">Departure Location: {departureLocation}</p>
            <p className="text-sm text-gray-500">Destination: {destination}</p>
            <p className="text-sm text-gray-500">📅 {departureDate}</p>
            <p className="text-sm text-gray-500">Details: {packageDetails}</p>
            <p className="text-sm text-gray-500">Guide's Email: {email}</p>
            <p className="text-sm text-gray-500">Guide's Phone: {contactNo}</p>
            <p className="text-lg font-semibold text-teal-600">৳ {price}</p>
            <div className="card-actions justify-end mt-2">
             <Link >
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-900 bg-gradient-to-r from-teal-600 to-lime-500 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
              >
                Book Now
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Book Tour Package</h3>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-2">
                <label>Tour Name:</label>
                <input type="text" value={tourName} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-2">
                <label>Price:</label>
                <input type="text" value={`৳ ${price}`} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-2">
                <label>Your Name:</label>
                <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-2">
                <label>Your Email:</label>
                <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label>Special Note:</label>
                <textarea
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="textarea textarea-bordered w-full"
                  placeholder="Any special requests or notes"
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => setShowModal(false)}
                >Cancel</button>
                <button
                  type="submit"
                  className="btn bg-teal-600 text-white btn-sm"
                >Book Now</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;