import React from 'react';
import { OmniTable } from '@/app/components/table/Table';
import useTable from './hooks/useTable';
import TableCount from '../table/TableCount';
import Pagination from '../table/Pagination';

const MainTable = () => {
  const {
    isLoading,
    tableColumn,
    tableData,
    currentPage,
    totalPages,
    onPageChange,
  } = useTable();

  return (
    <div className="flex flex-col h-screen">
        <OmniTable
          data={tableData}
          columns={tableColumn}
          title="Payer Table"
          searchable={false}
          isLoading={isLoading}
          pageSize={10}
          isScroll
        />
        <div className="flex md:flex-row flex-col md:justify-between gap-3 items-center">
          <TableCount currentPage={currentPage} totalPages={totalPages} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
    </div>
  );
};

export default MainTable;
