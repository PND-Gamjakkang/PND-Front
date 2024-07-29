import styled from "styled-components";

// InputAreadHeader
export const InputAreaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
`;

export const Toolbar = styled.div`
display: flex;
gap: 10px;
`;

export const InputAreaTitle = styled.h2`
color: black;
`;

// InputArea
export const InputArea = styled.div`
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
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    overflow: auto;
    white-space: pre-wrap; /* 줄 바꿈과 공백을 유지합니다 */
    border: 1px solid #000; /* 테두리 색상 설정 */
    color: black;
`;

// MdArea
export const MdArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

export const MdResult = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    overflow: auto;
    white-space: pre-wrap; /* 줄 바꿈과 공백을 유지합니다 */
    border: 1px solid #000; /* 테두리 색상 설정 */
    color: black;
`;
