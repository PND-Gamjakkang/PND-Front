import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 1500px;
  height: 970px;  
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding : 24px 20px;
  margin-bottom: 20px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;

`;

export const NavMenu = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #5B59FC' : 'none')};
  padding-bottom: 5px;

  &:hover {
    color: #5B59FC;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #00bfff;
    background-color: #FFF;
    color: #36CDFF;
    cursor: pointer;
    width:120px;
    height:40px;
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;   
    line-height: 10px;
    &:hover {
    background-color: '#e0f7ff';
    }

`;
export const SaveButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #00bfff;
    background-color: #36CDFF;
    color: #FFF;
    width:120px;
    height:40px;
    cursor: pointer;
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;   
    line-height: 10px;
  

    &:hover {
    background-color: '#009ACD';
    }

`;


export const Title = styled.div`
font-family: 'Inter', sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 10px;
text-align: left;
color: black;
height: 59px;
display: flex;
margin-bottom:20px;
align-items: center;
padding-left: 10px; 
`;

export const ContentArea = styled.div`
  width: 1430px;
  height: 700px;
  background-color: #f8f8ff;
  flex-shrink:0;
  color : black;
`;
export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: #DADEE4;
  margin: 0 10px;
`;
