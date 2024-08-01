import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MdAreaContainer,MdResult } from './MdAreaStyle';

const MdArea = ({ content }) => {
  return (
    <MdAreaContainer>
      <MdResult>
        <ReactMarkdown>{content}</ReactMarkdown>
      </MdResult>
    </MdAreaContainer>
  );
};

export default MdArea;
