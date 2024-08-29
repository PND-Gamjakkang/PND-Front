// src/pages/myproject/README/README.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Link를 사용하여 네비게이션 구현

const PageContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
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
const SaveButton = styled.button`
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


const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f8f8ff;
  border-radius: 10px;
`;

const MyPageReadme = () => {
  return (
    <PageContainer>
      <Header>
        <NavMenu>
          <NavItem>README</NavItem>
          <NavItem>CLASS DIAGRAM</NavItem>
          <NavItem>SEQUENCE DIAGRAM</NavItem>
          <NavItem>ERD</NavItem>
          <NavItem>GITHUB REPORT</NavItem>
        </NavMenu>
        <ButtonGroup>
          <EditButton>수정하기</EditButton>
          <SaveButton primary>저장하기</SaveButton>
        </ButtonGroup>
      </Header>
      <Title>CLASS DIAGRAM</Title>
      <ContentArea />
    </PageContainer>
  );
};

export default MyPageReadme;
