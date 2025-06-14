import React, { useState } from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs';
import FeaturedDestinations from './FeaturedDestinations';
import Testimonials from './HowItWorks';
import HowItWorks from './HowItWorks';
import { useLoaderData, Link } from 'react-router';
import PackageCard from './PackageCard';

const Home = () => {
    const data = useLoaderData()
    const [packages, setPackages] = useState(data?.data || [])
    console.log(data.data)

    return (
        <div className='min-h-screen max-w-7xl mx-auto'>
            <h2 className='text-5xl font-bold text-teal-600 text-center py-10'>Travel Gallery</h2>
            <Banner></Banner>

            <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Featured Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
                {
                    packages.slice(0, 6).map(pkg => (
                        <PackageCard key={pkg._id} package={pkg}></PackageCard>
                    ))
                }
            </div>

            
            <div className='text-center'>
                <Link to="/all-packages" className='btn btn-outline hover:bg-teal-600'>
                    See More Packages
                </Link>
            </div>

            <WhyChooseUs></WhyChooseUs>
            <FeaturedDestinations></FeaturedDestinations>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;
