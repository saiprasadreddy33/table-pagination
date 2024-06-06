import React from 'react';
import NumberAdjuster from '../common/NumberAdjuster';

const TableCount = ({ currentPage, totalPages }) => {
  return (
    <div className='flex gap-2'>
      <p className='text-[#64748B] leading-loose'>Displaying</p>
      <NumberAdjuster
        number={currentPage}
        increment={() => {}}
        decrement={() => {}}
      />
      <span className='text-[#64748B] leading-loose'>Out of <span className='text-[#000000] font-medium'>{totalPages}</span></span>
    </div>
  );
}

export default TableCount;
