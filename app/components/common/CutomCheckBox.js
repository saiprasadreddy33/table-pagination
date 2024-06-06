import React, { useState } from 'react';

function CustomCheckbox({ isChecked: initialChecked, checkedStyle, uncheckedStyle, onCheckChange }) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onCheckChange) {
      onCheckChange(newChecked);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor="custom-checkbox"
        className={`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer border-2 ${isChecked ? checkedStyle : uncheckedStyle}`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </label>
    </div>
  );
}

export default CustomCheckbox;
