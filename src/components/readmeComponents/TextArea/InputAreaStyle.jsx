import styled from "styled-components";

export const InputAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`;

export const InputText = styled.div`
  width: 100%; /* 800px out of 1920px */
  height: 100%;
  min-height: 62.81vh; 
  max-height: 62.81vh;
  padding: 1vh;
  box-sizing: border-box;
  border-radius: 2.13vh; /* 둥근 모서리 */
  border: 1px solid var(--main, #D9D9FF); /* 테두리 색상 */
  background: #F8F8FF; /* 배경색 */
  overflow: auto;
  white-space: pre-wrap; 
  color: black;
  font-size: 1.8vh;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.6;
  letter-spacing: 0.05vh;
`;
