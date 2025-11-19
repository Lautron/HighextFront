import React from 'react';

interface ResultsDisplayProps {
  markdown: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ markdown }) => {
  return <div>{markdown}</div>;
};

export default ResultsDisplay;
