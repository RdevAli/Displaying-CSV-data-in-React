import React from 'react';
import Papa from 'papaparse';

const FileUpload = ({ setData, setPage }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: false ,
        complete: (results) => {
          setData(results.data);
          setPage(1); // Reset to first page on file change
        },
      });
    }
  };

  return (
    <div className="custom-file-input">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
      <button onClick={() => document.querySelector('.custom-file-input input').click()}>
        Choose File
      </button>
    </div>
  );
};

export default FileUpload;
