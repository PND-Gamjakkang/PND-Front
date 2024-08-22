import styled from "styled-components";
export const InputAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
`;

export const InputText = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px; 
  max-height: 800px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  overflow: auto;
  white-space: pre-wrap; 
  border: 1px solid ; 
  color : black;
  font-size:24px;
  font-family: 'Noto Sans', sans-serif;
  line-height : 1.6;
  letter-spacing : 0.5px;
`;