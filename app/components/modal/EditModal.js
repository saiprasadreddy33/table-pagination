import React from 'react';
import SecondaryButton from '../button/SecondaryBtn';
import PrimaryBtn from '../button/PrimaryBtn';

const EditModal = ({ isOpen, title, subTitle, columns, columnVisibility, handleColumnToggle, handleApplyChanges, resetToDefault }) => {
  const handleCheckboxChange = (columnId) => {
    handleColumnToggle(columnId);
  };

  const handleApply = () => {
    handleApplyChanges();
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-lg w-full max-w-lg p-2 relative lg:w-[300px] w-[250px]">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h3 className="text-sm mb-4">{subTitle}</h3>

      <div className="max-h-64 overflow-y-auto mb-16">
        <div className="mt-4 space-y-4">
          {columns.map((column) => (
            <div key={column.id} className="flex items-center">
              <input
                id={column.id}
                type="checkbox"
                checked={columnVisibility[column.id]}
                onChange={() => handleCheckboxChange(column.id)}
              />
              <label htmlFor={column.id} className="ml-2">{column.header()}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-end border-t gap-2">
        <SecondaryButton onClick={resetToDefault}>Reset To Default</SecondaryButton>
        <PrimaryBtn onClick={handleApply}>Apply</PrimaryBtn>
      </div>
    </div>
  );
};

export default EditModal;
