import React from 'react';

const RowsPerPageSelector = ({ rowsPerPage, setRowsPerPage }) => {
  return (
    <div>
      <label>
        Rows per page:
        <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </label>
    </div>
  );
};

export default RowsPerPageSelector;
