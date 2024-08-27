import styled from 'styled-components';
import 'github-markdown-css/github-markdown.css';

export const MdResult = styled.div`
  min-height: 62.81vh;
  max-height: 62.81vh;
  font-size: 1.8vh;
  color: black;
  overflow: auto;
  white-space: pre-wrap;
  text-align: left;
  padding: 1vh;
`;

export const MarkdownBody = styled.div`
  width: 100%; /* 600px out of 1920px */
  height: auto;
  min-height: 64.81vh;
  max-height: 64.81vh;
  padding: 1vh;
  box-sizing: border-box;
  background-color: #fff;
  overflow: auto;
  border-radius: 2.13vh;
  border: 1px solid var(--main, #5B59FC);
  
  /* GitHub markdown-css 덮어쓰기 */
  .markdown-body & {
    font-family: 'Noto Sans', sans-serif; 
  }
`;
