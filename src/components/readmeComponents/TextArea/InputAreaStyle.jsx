import styled from "styled-components";
export const InputAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const InputText = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px; /* 기본 높이를 설정합니다 */
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  overflow: auto;
  white-space: pre-wrap; /* 줄 바꿈과 공백을 유지합니다 */
  border: 1px solid #000; /* 테두리 색상 설정 */
  color : black;
`;