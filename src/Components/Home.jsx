import React, { useState } from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs';
import FeaturedDestinations from './FeaturedDestinations';
import Testimonials from './HowItWorks';
import HowItWorks from './HowItWorks';
import { useLoaderData, Link } from 'react-router';
import PackageCard from './PackageCard';
import ContactUs from './ContactUs';

const Home = () => {
    const data = useLoaderData()
    const [packages, setPackages] = useState(data?.data || [])
    console.log(data.data)

    return (
        <div className='min-h-screen max-w-7xl mx-auto '>
            <h2 className='text-5xl font-bold text-teal-600 text-center py-10'>Travel Gallery</h2>
            <Banner></Banner>

            <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Featured Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
                {
                    packages.slice(0, 6).map(pkg => (
                        <PackageCard key={pkg._id} package={pkg}></PackageCard>
                    ))
                }
                <div data-aos="fade-up"></div>
            </div>

            
            <div className='text-center mb-15'>
                <Link to="/all-packages" className="text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    See More Packages
                </Link>
            </div>

            <WhyChooseUs></WhyChooseUs>
            <FeaturedDestinations></FeaturedDestinations>
            <HowItWorks></HowItWorks>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
