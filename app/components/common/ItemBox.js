import React from 'react';

const ItemBox = ({ heading, subheading }) => {
  return (
    <div className="flex items-center bg-white border border-gray-500 rounded-md p-2 w-full max-w-xs md:max-w-none">
      <div className="text-sm  mr-2">{heading}</div>
      <div className="text-xs text-gray-600">{subheading}</div>
    </div>
  );
};

export default ItemBox