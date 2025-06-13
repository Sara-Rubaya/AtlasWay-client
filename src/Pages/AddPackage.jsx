import React, { useContext, useState } from 'react';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

const AddPackage = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    tourName: '',
    image: '',
    duration: '',
    departureLocation: '',
    destination: '',
    price: '',
    departureDate: '',
    packageDetails: '',
    contactNo: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const packageData = {
      ...formData,
      guideName: user?.displayName,
      guidePhoto: user?.photoURL,
      guideEmail: user?.email,
    };

    try {
      const res = await fetch('https://your-backend-url.com/tourPackages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packageData),
      });

      const result = await res.json();
      if (result.insertedId) {
        toast.success('Package added successfully!');
        setFormData({
          tourName: '',
          image: '',
          duration: '',
          departureLocation: '',
          destination: '',
          price: '',
          departureDate: '',
          packageDetails: '',
          contactNo: '',
        });
      } else {
        toast.error('Failed to add package');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.error(err);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-base-100 shadow rounded-xl my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">Add Tour Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="tourName"
            value={formData.tourName}
            onChange={handleChange}
            placeholder="Tour Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (e.g., 3 Days 2 Nights)"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleChange}
            placeholder="Departure Location"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Contact No."
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="guideName"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Guide Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="guidePhoto"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Guide Photo"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="guideEmail"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Guide Email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <textarea
          name="packageDetails"
          value={formData.packageDetails}
          onChange={handleChange}
          placeholder="Package Details"
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn bg-teal-700 text-white w-full mt-4">
          Add Package
        </button>
      </form>
    </section>
  );
};

export default AddPackage;
