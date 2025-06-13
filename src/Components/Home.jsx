import React from 'react';
import Banner from './Banner/Banner';
import WhyChooseUs from './WhyChooseUs';
import FeaturedDestinations from './FeaturedDestinations';
import Testimonials from './HowItWorks';
import HowItWorks from './HowItWorks';


const Home = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto' >
           
           <h2 className='text-5xl font-bold text-teal-600 text-center py-10'>Travel Gallery</h2>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <FeaturedDestinations></FeaturedDestinations>
            <HowItWorks></HowItWorks>
            
                
            
           
        </div>
    );
};

export default Home;