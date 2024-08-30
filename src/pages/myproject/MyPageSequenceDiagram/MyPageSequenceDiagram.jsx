import React from 'react';
import {PageContainer,Header,NavItem,NavMenu,ButtonGroup,EditButton,SaveButton,Title,ContentArea, Divider} from '../Styles/MyPageStyles';
import {Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Download from '../Download';

const MyPageSequenceDiagram = () => {

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const location = useLocation();

  const handleButtonClick=(type)=>{
    if(type=='save'){
      setIsDownloadModalOpen(true);
    }
    else if(type=='edit'){

    }
  };

  const closeDownloadModal = () =>setIsDownloadModalOpen(false);

  return (
    <PageContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <Header>
        <NavMenu>
          <NavItem to='/mypageReadme' isActive={location.pathname === '/mypagereadme'}>README</NavItem>
          <Divider/>
          <NavItem to='/mypageClassDiagram' isActive={location.pathname === '/mypageClassDiagram'}>
            CLASS DIAGRAM
          </NavItem>
          <Divider/>
          <NavItem to='/mypageSequenceDiagram' isActive={location.pathname === '/mypageSequenceDiagram'}> SEQUENCE DIAGRAM</NavItem>
          <Divider/>
          <NavItem to='/mypageERD' isActive={location.pathname === '/mypageERD'}>ERD</NavItem>
          <Divider/>
          <NavItem to='/mypageGithubReport' isActive={location.pathname === '/mypageGithubReport'}>GITHUB REPORT</NavItem>
        </NavMenu>
        <ButtonGroup>
        <EditButton onClick={() => handleButtonClick('edit')}>수정하기</EditButton>
          <SaveButton onClick={() => handleButtonClick('save')}>저장하기</SaveButton>
        </ButtonGroup>
      </Header>
      <Title>SEQUENCE DIAGRAM</Title>
      <ContentArea> test 1234</ContentArea>
      {isDownloadModalOpen && (
        <Download closeModal={closeDownloadModal} />
      )}
      </PageContainer>
  );
};

export default MyPageSequenceDiagram;
