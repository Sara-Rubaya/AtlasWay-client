import React, { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://your-backend.com/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleConfirm = (id) => {
    fetch(`https://your-backend.com/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'completed' }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          Swal.fire('Confirmed!', 'Booking marked as completed.', 'success');
          setBookings(prev =>
            prev.map(b => (b._id === id ? { ...b, status: 'completed' } : b))
          );
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-base-100 shadow">
            <thead>
              <tr className="bg-base-200 text-base font-semibold text-center">
                <th>#</th>
                <th>Tour Name</th>
                <th>Guide</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Special Note</th>
                <th>Status</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, idx) => (
                <tr key={b._id} className="text-center">
                  <td>{idx + 1}</td>
                  <td>{b.tourName}</td>
                  <td>
                    <p className="font-medium">{b.guideName}</p>
                    <p className="text-xs text-gray-500">{b.contactNo}</p>
                  </td>
                  <td>{b.departureDate} <br /> {b.departureLocation}</td>
                  <td>{b.destination}</td>
                  <td>{b.specialNote || '—'}</td>
                  <td>
                    <span className={`badge ${b.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    {b.status !== 'completed' && (
                      <button
                        onClick={() => handleConfirm(b._id)}
                        className="btn btn-xs btn-outline btn-primary"
                      >
                        Confirm
                      </button>
                    )}
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

export default MyBookings;
