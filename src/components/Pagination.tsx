"use client";

import React from 'react';

// Define the props for the component
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    // Determine the range of page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage <= 3) {
            endPage = Math.min(5, totalPages);
        }
        if (currentPage > totalPages - 3) {
            startPage = Math.max(1, totalPages - 4);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    // Don't render pagination if there's only one page
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center space-x-2 text-sm">
                {/* First Page Button */}
                <li>
                    <button
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        aria-label="First page"
                    >
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11 17-5-5 5-5m7-5-5 5 5 5" />
                        </svg>
                    </button>
                </li>
                {/* Previous Page Button */}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        aria-label="Previous page"
                    >
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </li>

                {/* Page Number Buttons */}
                {pageNumbers.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`flex items-center justify-center h-8 w-8 transition-all ${
                                currentPage === page
                                    ? 'bg-[#891e6d] text-white rounded-md font-bold'
                                    : 'text-gray-600 hover:text-[#891e6d] font-semibold'
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next Page Button */}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        aria-label="Next page"
                    >
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </li>
                {/* Last Page Button */}
                <li>
                    <button
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        aria-label="Last page"
                    >
                        <svg className="w-5 h-5 text-gray-500 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m13 5 5 5-5 5m-7 5 5-5-5-5" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;