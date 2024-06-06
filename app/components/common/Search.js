import React from 'react';

function Search({ placeholder, icon: Icon, value, onChange, fullWidth }) {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-50'}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none text-black placeholder-black"
        style={{ color: 'black' }}
      />
      {Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Icon className="text-gray-500" />
        </div>
      )}
    </div>
  );
}

export default Search;
