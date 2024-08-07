import React, { useState } from 'react';
import FileUpload from './Components/FileUpload';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import PageSelector from './Components/PageSelector';
import './Assets/App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="container">
      <FileUpload setData={setData} setPage={setPage} />
      <PageSelector rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      <Table data={currentRows} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default App;