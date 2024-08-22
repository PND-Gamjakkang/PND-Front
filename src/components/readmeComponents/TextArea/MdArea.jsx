import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';
import { MdResult } from './MdAreaStyle';
const MdArea = ({ content }) => {
  return (
    <div className='markdown-body'>
      <MdResult>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
      </MdResult>
    </div>
  );
};

export default MdArea;
