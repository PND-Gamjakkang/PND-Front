import styled from "styled-components";

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1.25rem; 
  background-color: #f9f9ff;
  border-radius: 0.625rem; 
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 0.625rem; 
  height: 100%;
  position: relative;

  &:not(:last-child) {
    border-right: 0.0625rem solid #ddd; 
  }
`;

export const StatTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 2.6875rem;
  color: black;
  font-family: 'Inter', sans-serif;
`;

export const StatNumber = styled.p`
  font-size: 1.5rem; 
  font-weight: bold;
  margin: 0;
  position: absolute;
  color: black;
  top: 8.4375rem; 
`;
