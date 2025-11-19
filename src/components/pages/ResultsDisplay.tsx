import React, { useState } from 'react';
import MarkdownViewer from './MarkdownViewer';
import PdfViewer from './PdfViewer';
import { convertMarkdownToPdf } from '../../lib/api';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileDown, Loader2 } from 'lucide-react';

interface ResultsDisplayProps {
  markdown: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ markdown }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePdf = async () => {
    setIsGenerating(true);
    try {
      const blob = await convertMarkdownToPdf(markdown);
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto mt-8">
      <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Results
        </CardTitle>
        <Button onClick={handleGeneratePdf} disabled={isGenerating} variant="outline">
          {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
          Generate PDF
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="markdown" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="markdown">Markdown</TabsTrigger>
            <TabsTrigger value="pdf">PDF Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="markdown" className="min-h-[500px] border rounded-md p-6 bg-muted/10 text-left">
            <MarkdownViewer markdown={markdown} />
          </TabsContent>
          <TabsContent value="pdf" className="min-h-[500px] bg-muted/10 rounded-md border flex items-center justify-center">
            {pdfUrl ? (
              <div className="w-full h-full p-4">
                <PdfViewer pdfUrl={pdfUrl} />
              </div>
            ) : (
              <div className="text-center text-muted-foreground p-10">
                <p>PDF not generated yet.</p>
                <Button variant="link" onClick={handleGeneratePdf}>Generate PDF now</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
