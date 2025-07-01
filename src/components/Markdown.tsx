import React from 'react';

type MarkdownProps = {
  children: string;
  className?: string;
}


/**
 * Tiny Markdown parser, currently recognizes whitespace and bullet points only
 */
export const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
  const lines = children.split('\n');
  const result: React.ReactNode[] = [];
  let currentList: string[] = [];
  
  lines.forEach((line) => {
    const trimmedLine = line.trim();
    
    // Check if line is a bullet point (starts with - or *)
    if (trimmedLine.match(/^[-*]\s+/)) {
      const bulletText = trimmedLine.replace(/^[-*]\s+/, '');
      currentList.push(bulletText);
    } else {
      // If we have accumulated bullet points, render them as UL
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${result.length}`} className="list-disc list-inside text-neutral-01 font-sm font-normal leading-relaxed mb-2">
            {currentList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      
      // Add non-bullet line as paragraph (if not empty)
      if (trimmedLine) {
        result.push(
          <p key={`para-${result.length}`} className="text-neutral-01 font-sm font-normal leading-relaxed mb-2">
            {trimmedLine}
          </p>
        );
      }
    }
  });
  
  // Handle any remaining bullet points at the end
  if (currentList.length > 0) {
    result.push(
      <ul key={`list-${result.length}`} className="list-disc list-inside text-neutral-01 font-sm font-normal leading-relaxed mb-2">
        {currentList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  
  
  return (
    <div className={className}>
      {result}
    </div>
  );
};
