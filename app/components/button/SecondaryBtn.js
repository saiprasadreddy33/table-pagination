import React from 'react';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      className="px-2 py-1 bg-white text-black border border-black rounded hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
