import { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import PackageCard from '../Components/PackageCard';

const AllPackages = () => {
  const data = useLoaderData();
  const [packages] = useState(data?.data || []);
  const [search, setSearch] = useState('');
  
  const [sortOption, setSortOption] = useState('none'); 

  const filteredPackages = packages.filter(pkg =>
    pkg?.tourName?.toLowerCase().includes(search.toLowerCase())
  );

  
  const sortedAndFilteredPackages = useMemo(() => {
    let sortablePackages = [...filteredPackages];

    if (sortOption === 'price-asc') {
      
      sortablePackages.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'price-desc') {
   
      sortablePackages.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOption === 'name-asc') {
      
      sortablePackages.sort((a, b) => a.tourName.localeCompare(b.tourName));
    } else if (sortOption === 'name-desc') {
     
      sortablePackages.sort((a, b) => b.tourName.localeCompare(a.tourName));
    }

    return sortablePackages;
  }, [filteredPackages, sortOption]); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
        Explore Tour Packages
      </h2>

      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
       
        <input
          type="text"
          placeholder="Search tour by name"
          className="input input-bordered w-full max-w-sm border-teal-500 focus:border-teal-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        {/* ⚙️ Sort Dropdown */}
        <select
          className="select select-bordered w-full max-w-xs border-teal-500 focus:border-teal-700"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none" disabled>Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

     

      {/* 📦 Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {
          sortedAndFilteredPackages.length > 0 ? (
            sortedAndFilteredPackages.map(pkg => (
              <PackageCard key={pkg._id} package={pkg}></PackageCard>
            ))
          ) : (
            <p className="text-center text-xl text-gray-500 col-span-full">No packages found matching your search.</p>
          )
        }
      </div>
    </div>
  );
};

export default AllPackages;