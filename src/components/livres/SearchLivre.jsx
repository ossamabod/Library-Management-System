import React, { useState } from 'react';

const SearchLivre = ({ data }) => {
  const [filterOption, setFilterOption] = useState('bookName');
  const [searchQuery, setSearchQuery] = useState('');
  const [editionDate, setEditionDate] = useState('');
  const [type, setType] = useState('ouvrage');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((item) => {
      const matchesBookName = item.bookName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAuthorName = item.authorName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesEditionDate = editionDate ? item.editionDate === editionDate : true;
      const matchesType = type ? item.type === type : true;

      return (filterOption === 'bookName' ? matchesBookName : matchesAuthorName) && matchesEditionDate && matchesType;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-4">
        <label htmlFor="filter" className="block text-gray-700 font-medium mb-2">Filter By:</label>
        <select
          id="filter"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="bookName">Book Name</option>
          <option value="authorName">Author Name</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search by ${filterOption === 'bookName' ? 'Book Name' : 'Author Name'}`}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          value={editionDate}
          onChange={(e) => setEditionDate(e.target.value)}
          placeholder="Edition Date"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="ouvrage">Ouvrage</option>
          <option value="mf">MF</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Search
      </button>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3 text-left">Book Name</th>
              <th className="p-3 text-left">Author Name</th>
              <th className="p-3 text-left">Edition Date</th>
              <th className="p-3 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-3">{item.bookName}</td>
                  <td className="p-3">{item.authorName}</td>
                  <td className="p-3">{item.editionDate}</td>
                  <td className="p-3">{item.type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchLivre;
