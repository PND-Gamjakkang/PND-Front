import styled from "styled-components";

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 2%; 
  background-color: #f9f9ff;
  border-radius: 0.625rem; 
  
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  //padding: 0.625rem; 
  height: 100%;
  position: relative;
  //background:lightblue;

  &:not(:last-child) {
    border-right: 0.0625rem solid #ddd; 
  }
  /* 추가: overflow 속성을 사용하여 내용을 부모 요소 내부로 제한 */
  overflow: hidden;
`;

export const StatTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 25%;
  color: black;
  font-family: 'Inter', sans-serif;

  /* 추가: 부모 요소 내에서의 크기 제한 */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatNumber = styled.p`
  font-size: 1.5rem; 
  font-weight: bold;
  margin: 0;
  position: absolute;
  color: black;
  top: 70%;; 
  
  /* 추가: 부모 요소 내에서의 크기 제한 */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
