import { useState } from 'react';
import { useLoaderData } from 'react-router';
import PackageCard from '../Components/PackageCard';



const AllPackages = () => {
   const data = useLoaderData()
    const [packages, setPackages] = useState(data?.data || [])
    console.log(data.data)
  
    
  
  const [search, setSearch] = useState('');
  





  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Explore Tour Packages</h2>

      {/* Search Field */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search tour by name"
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

       <h1 className='text-4xl text-teal-700 font-bold text-center py-10'>Featured Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
                {
                    packages.map(pkg => (
                        <PackageCard key={pkg._id} package={pkg}></PackageCard>
                    ))
                }
            </div>

     
    </div>
  );
};

export default AllPackages;
