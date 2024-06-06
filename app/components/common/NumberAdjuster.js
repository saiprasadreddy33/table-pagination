import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

const NumberAdjuster = ({ number, increment, decrement }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-lg font-medium">{number}</span>
      <div className="flex flex-col items-center space-y-1">
        <button 
          onClick={increment} 
          className="transition duration-200"
        >
          < MdKeyboardArrowUp
            size={15}
          />
        </button>
        <button 
          onClick={decrement} 
          className="transition duration-200 "
        >
          <MdKeyboardArrowDown
            size={15}
          />
        </button>
      </div>
    </div>
  );
};

export default NumberAdjuster;
