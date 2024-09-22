import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 91.75vw; 
  margin: 3px 0;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
  }

  background: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5vw 1.25vw; /* 24px 20px */
  margin-bottom: 1.25vw; /* 20px */

  font-family: 'Inter', sans-serif;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  line-height: 0.625rem; /* 10px */
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2vw;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1.25vw; /* 20px */

  @media (max-width: 768px) {
    gap: 2vw;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #5B59FC' : 'none')};
  padding-bottom: 0.3125rem; /* 5px */

  &:hover {
    color: #5B59FC;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.625vw; /* 10px */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2vw;
  }
`;

export const EditButton = styled.button`
  padding: 0.5rem 1rem; /* 8px 16px */
  font-size: 0.875rem; /* 14px */
  border-radius: 0.3125rem; /* 5px */
  border: 0.0625rem solid #00bfff; /* 1px */
  background-color: #FFF;
  color: #36CDFF;
  cursor: pointer;
  width: 7.5rem; /* 120px */
  height: 2.5rem; /* 40px */
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 0.625rem; /* 10px */

  &:hover {
    background-color: #e0f7ff;
  }
`;

export const SaveButton = styled.button`
  padding: 0.5rem 1rem; /* 8px 16px */
  font-size: 0.875rem; /* 14px */
  border-radius: 0.3125rem; /* 5px */
  border: 0.0625rem solid #00bfff; /* 1px */
  background-color: #36CDFF;
  color: #FFF;
  width: 7.5rem; /* 120px */
  height: 2.5rem; /* 40px */
  cursor: pointer;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 0.625rem; /* 10px */

  &:hover {
    background-color: #009ACD;
  }
`;

export const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  line-height: 0.625rem; /* 10px */
  text-align: left;
  color: black;
  height: 59px;
  display: flex;
  margin-bottom: 1.25vw; /* 20px */
  align-items: center;
  padding-left: 0.625vw; /* 10px */ 

`;

export const ContentArea = styled.div`
  width: 89.375vw; /* 1430px */
  max-wdith : 89.375vw;
  height: 43.75vw; /* 700px */
  background-color: #f8f8ff;
  flex-shrink: 0;
  color: black;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Divider = styled.div`
  width: 0.0625rem; /* 1px */
  height: 0.875rem; /* 14px */
  background-color: #DADEE4;
  margin: 0 0.625vw; /* 10px */
`;
export const MdResult = styled.div`
  min-height: 62.81vh;
  width : 89vw;
  max-width : 89vw;
  max-height: 62.81vh;
  font-size: 1.8vh;
  color: black;
  overflow: auto;
  white-space: pre-wrap;
  text-align: left;
  padding: 1vh;
`;

export const DiagramResultBox = styled.div`
width: 100%;
height: 100%;
border-radius: 10px;
border: 1px solid #D9D9FF;
background: #FFF;
margin-top: 17px;
`;
