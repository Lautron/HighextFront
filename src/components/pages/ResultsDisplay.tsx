import React, { useState } from 'react';
import MarkdownViewer from './MarkdownViewer';
import PdfViewer from './PdfViewer';
import { convertMarkdownToPdf } from '../../lib/api';
import { Button } from '@/components/ui/button';

interface ResultsDisplayProps {
  markdown: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ markdown }) => {
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleGeneratePdf = async () => {
    try {
      const blob = await convertMarkdownToPdf(markdown);
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      setShowPdf(true);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-end gap-4 mb-4">
        <Button onClick={() => setShowPdf(false)} disabled={!pdfUrl}>
          Markdown
        </Button>
        <Button onClick={() => setShowPdf(true)} disabled={!pdfUrl}>
          PDF
        </Button>
        <Button onClick={handleGeneratePdf}>Generate PDF</Button>
      </div>
      {showPdf && pdfUrl ? (
        <PdfViewer pdfUrl={pdfUrl} />
      ) : (
        <MarkdownViewer markdown={markdown} />
      )}
    </div>
  );
};

export default ResultsDisplay;
