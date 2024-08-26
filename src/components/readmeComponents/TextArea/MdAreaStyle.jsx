import styled from 'styled-components';
import 'github-markdown-css/github-markdown.css';


export const MdResult = styled.div`
  min-height:700px;
  max-height:700px;
  font-size: 24px;
  color: black;
  overflow: auto;
  white-space: pre-wrap;
  text-align: left;
  padding:10px;
`;
export const MarkdownBody = styled.div`
  width: 600px;
  height: auto;
  min-height: 700px;
  max-height: 700px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  overflow: auto;
  border-radius: 23px;
  border: 1px solid var(--main, #5B59FC);
  
  /* GitHub markdown-css 덮어쓰기 */
  .markdown-body & {
    font-family: 'Noto Sans', sans-serif; /* GitHub 스타일에 추가적인 스타일 적용 */
    /* 필요에 따라 더 많은 스타일을 덮어쓸 수 있음 */
  }
`;
