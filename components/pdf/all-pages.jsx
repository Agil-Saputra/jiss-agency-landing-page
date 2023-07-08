import {useState} from 'react'
import LoadingPDF from './loadingPDF';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AllPages({pdf}) {
	

	const [numPages, setNumPages] = useState(null);
  
	function onDocumentLoadSuccess({ numPages }) {
	  setNumPages(numPages);
	}

  return (
	<div>
		<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={<LoadingPDF/>}>
		{Array.from(new Array(numPages), (el, index) => (
		  <Page
			key={`page_${index + 1}`}
			pageNumber={index + 1}
			renderTextLayer={false}
			renderAnnotationLayer={false}
		  />
		))}
		 </Document>
	</div>
  )
}
