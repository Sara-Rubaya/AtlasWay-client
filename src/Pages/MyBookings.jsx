import React, { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../Hook/UseAxiosSecure';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure()


  const fetchBookings = async () => {
    try {
      
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);

      setBookings(res.data || []);
    } catch (err) {
      console.error('Failed to fetch bookings', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchBookings();
    }
  }, [user,axiosSecure ]);

 
  const handleConfirm = async (id) => {
    try {
       
      const res = await axiosSecure.patch(
        `/bookings/${id}`
        
      );

      if (res.data.modifiedCount > 0 || res.data.success) {
        Swal.fire('Success', 'Booking confirmed!', 'success');
        fetchBookings(); 
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="px-5 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-600">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th>#</th>
                <th>Tour Name</th>
                <th>Guide Name</th>
                <th>Contact</th>
                <th>Departure Date</th>
                <th>From</th>
                <th>To</th>
                <th>Note</th>
                <th>Status</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>{booking.tourName || '-'}</td>
                  <td>{booking.name || '-'}</td>
                  <td>{booking.contactNo || '-'}</td>
                  <td>{booking.departureDate || '-'}</td>
                  <td>{booking.departureLocation || '-'}</td>
                  <td>{booking.destination || '-'}</td>
                  <td>{booking.note || '-'}</td>
                  <td>
                    <span className={`badge ${booking.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {booking.status === 'pending' ? (
                      <button
                        onClick={() => handleConfirm(booking._id)}
                        className="btn btn-xs bg-lime-600 text-white"
                      >
                        Confirm
                      </button>
                    ) : (
                      <button className="btn btn-xs btn-disabled">Done</button>
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
