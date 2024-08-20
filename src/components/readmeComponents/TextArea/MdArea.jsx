import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MdAreaContainer,MdResult } from './MdAreaStyle';

const MdArea = ({ content }) => {
  return (
      <MdResult>
        <ReactMarkdown>{content}</ReactMarkdown>
      </MdResult>
  );
};

export default MdArea;
