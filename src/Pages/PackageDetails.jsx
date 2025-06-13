import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router';

const PackageDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tour, setTour] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [specialNote, setSpecialNote] = useState('');

  useEffect(() => {
    fetch(`https://your-backend.com/tourPackages/${id}`)
      .then(res => res.json())
      .then(data => setTour(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleBooking = async e => {
    e.preventDefault();

    const booking = {
      packageId: id,
      tourName: tour?.tourName,
      price: tour?.price,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      bookingDate: new Date().toISOString(),
      specialNote,
      status: 'pending',
    };

    try {
      const res = await fetch('https://your-backend.com/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      const result = await res.json();
      if (result.insertedId) {
        toast.success('Booking placed successfully!');
        setShowModal(false);
        setSpecialNote('');
      } else {
        toast.error('Booking failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.error(err);
    }
  };

  if (!tour) return <p className="text-center mt-10">Loading package details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-base-100 shadow rounded-xl">
      <img src={tour.image} alt={tour.tourName} className="w-full rounded-lg mb-6" />
      <h2 className="text-3xl font-bold text-primary mb-2">{tour.tourName}</h2>
      <p className="text-gray-600 mb-4">{tour.packageDetails}</p>
      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
        <p><strong>Guide:</strong> {tour.guideName}</p>
        <p><strong>Contact:</strong> {tour.contactNo}</p>
        <p><strong>Duration:</strong> {tour.duration}</p>
        <p><strong>Price:</strong> ${tour.price}</p>
        <p><strong>Departure:</strong> {tour.departureLocation} on {tour.departureDate}</p>
        <p><strong>Destination:</strong> {tour.destination}</p>
        <p><strong>Booking Count:</strong> {tour.bookingCount || 0}</p>
      </div>

      <div className="mt-6">
        <button onClick={() => setShowModal(true)} className="btn btn-primary">Book Now</button>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-red-500">✕</button>
            <h3 className="text-xl font-bold mb-4">Book: {tour.tourName}</h3>
            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                value={tour.tourName}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                type="text"
                value={`$${tour.price}`}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
              <textarea
                value={specialNote}
                onChange={e => setSpecialNote(e.target.value)}
                placeholder="Special Note (optional)"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
