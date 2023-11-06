import React from 'react';

const ExportPDFButtonTutorial = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/public/tutorial.pdf"; 
    link.download = 'tutorial.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div class="container">
        <div class="button-container">
            <button onClick={handleDownload}>Tutorial</button>
        </div>
    </div>
  );
};


export default ExportPDFButtonTutorial;
