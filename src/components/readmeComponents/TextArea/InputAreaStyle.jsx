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
  min-height: 600px; 
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  overflow: auto;
  white-space: pre-wrap; 
  color: black;
`;
