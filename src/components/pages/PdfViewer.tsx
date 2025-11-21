import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfViewerProps {
  pdfUrl: string | null;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState<number>(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  if (!pdfUrl) {
    return <div>No PDF to display.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4 sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => setScale((s) => Math.max(0.5, s - 0.1))} disabled={scale <= 0.5} className="h-8 w-8 rounded-full">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-xs font-medium w-12 text-center">{Math.round(scale * 100)}%</span>
        <Button variant="ghost" size="icon" onClick={() => setScale((s) => Math.min(2.5, s + 0.1))} disabled={scale >= 2.5} className="h-8 w-8 rounded-full">
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className="flex flex-col gap-4">
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} className="shadow-lg border rounded-sm overflow-hidden" />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
