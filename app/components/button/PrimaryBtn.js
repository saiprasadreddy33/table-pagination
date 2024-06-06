import React from 'react';

const PrimaryBtn = ({ children, onClick }) => {
  return (
    <button
      className="px-2 py-1 bg-black text-white rounded hover:bg-gray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;