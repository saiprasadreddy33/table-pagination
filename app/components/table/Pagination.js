import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageSize = 3;
  const [startPage, setStartPage] = React.useState(1);

  React.useEffect(() => {
    const calculateStartPage = () => {
      const newStartPage = Math.max(1, Math.ceil(currentPage / pageSize) * pageSize - pageSize + 1);
      setStartPage(newStartPage);
    };
    calculateStartPage();
  }, [currentPage, pageSize]);

  const handlePrevious = () => {
    if (startPage > 1) {
      onPageChange(startPage - 1);
    }
  };

  const handleNext = () => {
    if (startPage + pageSize <= totalPages) {
      onPageChange(startPage + pageSize);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = startPage; i < startPage + pageSize && i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-2 py-1 mx-1 text-sm ${
            i === currentPage ? 'font-bold bg-gray-300 rounded-md' : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className={`px-2 py-1 mx-1 text-sm text-[#334155]`}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className={`px-2 py-1 mx-1 text-sm text-[#334155]`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
