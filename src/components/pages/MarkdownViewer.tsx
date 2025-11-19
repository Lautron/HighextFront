import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownViewerProps {
  markdown: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown }) => {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-6" {...props} />,
          h2: ({ ...props }) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 mt-8" {...props} />,
          h3: ({ ...props }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-6" {...props} />,
          h4: ({ ...props }) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4 mt-6" {...props} />,
          p: ({ ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
          ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
          ol: ({ ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
          blockquote: ({ ...props }) => <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground" {...props} />,
          code: ({ ...props }) => <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer
