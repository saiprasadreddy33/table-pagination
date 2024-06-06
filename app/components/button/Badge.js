import React from 'react';

const Badge = ({ status }) => {
  let bgColor, dotColor;

  switch (status) {
    case 'active':
      bgColor = 'bg-[#F0FDF9]';
      dotColor = 'bg-green-500';
      break;
    case 'inactive':
      bgColor = 'bg-[#F1F5F9]';
      dotColor = 'bg-gray-500';
      break;
    case 'lead':
      bgColor = 'bg-[#E0F2FE]';
      dotColor = 'bg-blue-500';
      break;
    default:
      bgColor = 'bg-[#F1F5F9]';
      dotColor = 'bg-gray-500';
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full ${bgColor}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor} mr-2`}></span>
      <span className="text-sm font-medium text-gray-700">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
};

export default Badge;
