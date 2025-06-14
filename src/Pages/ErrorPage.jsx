import React from 'react';
import { Link } from 'react-router';
import errorPage from '../assets/lotties/error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-base-100">
      <Lottie animationData={errorPage} className='w-60 pb-5' loop={true}></Lottie>

      <h2 className="text-3xl font-bold text-teal-600 mb-4">
        Oops! You seem lost in the Himalayas 🏔️
      </h2>

      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="btn bg-red-600">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;