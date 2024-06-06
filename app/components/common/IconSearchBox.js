import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-black text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
      />
    </div>
  );
};

export default SearchInput


