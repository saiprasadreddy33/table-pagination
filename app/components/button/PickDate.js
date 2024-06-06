// components/IconButton.js
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const PickDate = ({ onClick }) => {
  return (
    <button
      className="flex items-center px-4 py-2 bg-white text-[#000000] rounded hover:bg-gray-800 border-1"
      onClick={onClick}
    >
      <FaCalendarAlt className="mr-2 text-[#000000]" />
      Pick a Date
    </button>
  );
};

export default PickDate;
