import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TableFooter = ({ currentPage, totalPages, handlePageChange, itemsPerPage, setItemsPerPage }) => {
  const pagesToShow = 3;
  const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const handleItemsPerPageChange = (change) => {
    const newItemsPerPage = itemsPerPage + change;
    if (newItemsPerPage > 0) {
      setItemsPerPage(newItemsPerPage);
      handlePageChange(1); // Reset to first page whenever items per page change
    }
  };

  return (
    <div className="flex justify-between mt-3">
      {/* FOOTER LEFT */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1 min-w-[100px]">
          <h4 className="text-gray-500 text-[.8rem]">Displaying</h4>{" "}
          <span className="font-strong text-[.8rem]">{currentPage}</span>
          <div className="flex flex-col items-center space-y-1">
            <button
              className="transition duration-200"
              onClick={() => handleItemsPerPageChange(1)}
            >
              <ArrowDropUpIcon sx={{ fontSize: "15px", cursor: "pointer" }} />
            </button>
            <button
              className="transition duration-200"
              onClick={() => handleItemsPerPageChange(-1)}
            >
              <ArrowDropDownIcon sx={{ fontSize: "15px", cursor: "pointer" }} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 min-w-[100px]">
          <h4 className="text-gray-500 text-[.8rem]">Out of</h4>{" "}
          <span className="font-medium text-[.8rem]">{totalPages}</span>
        </div>
      </div>
      {/* FOOTER RIGHT */}
      <div className="flex px-4 items-center gap-3">
        <button
          className="cursor-pointer active:scale-[.9] duration-200 ease-in-out"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
        </button>
        <h4 className="text-[.8rem] text-gray-500">Previous</h4>
        {[...Array(endPage - startPage + 1)].map((_, index) => (
          <span
            key={startPage + index}
            className={`text-[.9rem] cursor-pointer p-1 px-2 ${
              currentPage === startPage + index ? "border rounded-md" : ""
            }`}
            onClick={() => handlePageChange(startPage + index)}
          >
            {startPage + index}
          </span>
        ))}
        <h4 className="text-[.8rem] text-gray-500">Next</h4>
        <button
          className="cursor-pointer active:scale-[.9] duration-200 ease-in-out"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
