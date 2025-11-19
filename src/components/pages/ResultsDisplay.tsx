import MarkdownViewer from './MarkdownViewer';

interface ResultsDisplayProps {
  markdown: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ markdown }) => {
  return <MarkdownViewer markdown={markdown} />;
};

export default ResultsDisplay;
