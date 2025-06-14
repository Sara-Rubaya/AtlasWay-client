import { useState } from 'react';



const AllPackages = () => {
   
  
    
  
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

     
    </div>
  );
};

export default AllPackages;
