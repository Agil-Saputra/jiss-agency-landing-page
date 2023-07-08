import React from "react";

const loadingPDF = () => {
  return (
    <div className="grid place-items-center text-center">
      <p>Mohon Tunggu Sebentar, Sedang Memuat File PDF...</p>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loadingPDF;
