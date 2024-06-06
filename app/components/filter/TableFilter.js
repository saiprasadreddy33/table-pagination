import React, { useState, useRef, useEffect } from 'react';
import { CiFilter } from 'react-icons/ci';
import IconButton from '../button/IconButton';
import SearchInput from '../common/IconSearchBox';
import { FiRefreshCcw } from 'react-icons/fi';
import { TbBook } from 'react-icons/tb';
import { MdDownload } from 'react-icons/md';
import FilterModal from '../modal/FilterModal';
import { useAppContext } from '@/app/provider/AppContext';
import EditModal from '../modal/EditModal';
import useTable from './hooks/useTable';

const TableFilter = () => {
  const { isModal, handleAddFilter } = useAppContext();
  const { tableColumn, columnVisibility, handleColumnToggle, handleApplyChanges, resetToDefault } = useTable();
  const [searchState, setSearchState] = useState('');
  const btnRef = useRef(null);
  const columnRef = useRef(null);
  const [modalStyle, setModalStyle] = useState({});
  const [columnStyle, setColumnStyle] = useState({});
  const [isEditModal, setIsEditModal] = useState(false);

  useEffect(() => {
    if (btnRef.current) {
      const buttonRect = btnRef.current.getBoundingClientRect();
      setModalStyle({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    if (columnRef.current) {
      const buttonRect = columnRef.current.getBoundingClientRect();
      setColumnStyle({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX - 220,
      });
    }
  }, [isModal, isEditModal]);

  return (
    <div className="flex flex-col justify-between w-full items-center my-2 md:flex-row">
      <IconButton
        onClick={handleAddFilter}
        text={'Add Filter'}
        icon={CiFilter}
        ref={btnRef}
      />
      {isModal && (
        <div
          className="absolute z-10 mt-2 bg-white border border-gray-300 shadow-lg rounded"
          style={modalStyle}
        >
          <FilterModal />
        </div>
      )}
      <div className="flex gap-4 items-center">
        <SearchInput
          value={searchState}
          placeholder={'Search Client'}
          onChange={(e) => setSearchState(e.target.value)}
        />
        <FiRefreshCcw
          size={25}
          color="#000000"
          style={{ cursor: 'pointer' }}
        />
        <div ref={columnRef}>
          <TbBook
            size={25}
            color="#000000"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsEditModal((prev) => !prev)}
          />
        </div>
        <MdDownload size={25} color="#000000" style={{ cursor: 'pointer' }} />
        {isEditModal && (
          <div
            className="absolute z-10 mt-2 bg-white border border-gray-300 shadow-lg rounded"
            style={columnStyle}
          >
            <EditModal
              isOpen={isEditModal}
              title="Edit Columns"
              subTitle="Select the column to rearrange"
              columns={tableColumn}
              columnVisibility={columnVisibility}
              handleColumnToggle={handleColumnToggle}
              handleApplyChanges={handleApplyChanges}
              resetToDefault={resetToDefault}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableFilter;
