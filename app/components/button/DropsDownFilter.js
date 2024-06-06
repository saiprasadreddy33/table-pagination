import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaFilter } from 'react-icons/fa'; // Example icon from react-icons

const DropsDownFilter = ({ label, options, IconComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedItem}
          {IconComponent && <IconComponent className="ml-2 -mr-1 h-5 w-5 text-gray-400" />}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full z-10">
          <div className="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left w-full"
              >
                {item}
                {/* {IconComponent && <IconComponent className="ml-2 -mr-1 h-5 w-5 text-gray-400 float-right" />} */}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ReusableDropdownFilter.propTypes = {
//   label: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   IconComponent: PropTypes.elementType, // Accepts an icon component
// };

// ReusableDropdownFilter.defaultProps = {
//   IconComponent: FaFilter, // Default icon
// };

export default DropsDownFilter;
