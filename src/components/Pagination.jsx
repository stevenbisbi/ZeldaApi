import React from "react";

export function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-5">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="page-link color-dark"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
