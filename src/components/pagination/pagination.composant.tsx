import React from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    if (onPageChange && typeof onPageChange === "function") {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="p-2 disabled:opacity-50"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentPage === page ? "bg-[#E8F2E8]" : "hover:bg-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="p-2 disabled:opacity-50"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
