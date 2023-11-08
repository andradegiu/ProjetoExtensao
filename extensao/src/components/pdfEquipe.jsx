import React from 'react';

const ExportPDFButtonEquipe = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/public/equipe.pdf"; 
    link.download = 'equipe.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div class="container">
        <div class="button-container">
            <button onClick={handleDownload}>Conheça a Equipe</button>
        </div>
    </div>
  );
};


export default ExportPDFButtonEquipe;
