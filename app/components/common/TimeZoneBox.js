import React, { useState, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

function TimeZoneBox({ isCollapsed }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  return (
    <>
      { !isCollapsed ? (
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg w-50 bg-[#F1F5F9]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-bold text-[#000000]">{formattedTime}</div>  
            <div className="text-sm text-gray-500 text-[#000000]">{formattedDate}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-700 text-[14px]">
              <FaGlobe />
              <span>UTC +5 hours</span>
            </div>
            <FaChevronDown className="text-gray-500" />
          </div>
        </div>
      ) : (
        <FaGlobe size={25} color='#000000'/>
      )}
    </>
  );
}

export default TimeZoneBox;
