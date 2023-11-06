import React from 'react';

const ExportPDFButton = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/public/memorial.pdf"; 
    link.download = 'memorial.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div class="container">
      <div class="button-container">
        <button onClick={handleDownload}>Informativo - USJT</button>
      </div>
    </div>
  );
};


export default ExportPDFButton;
