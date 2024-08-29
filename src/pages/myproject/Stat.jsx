import React from 'react';
import { StatContainer,StatItem,StatNumber,StatTitle } from './Styles/StatStyles';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


const Stat = () => {
  const navigate = useNavigate();
  
  const READMEClick = () => {
    navigate('/mypageReadme'); 
  };
  const documentClick = () => {
    navigate('/document'); 
  };
  const classDiagramClick = () => {
    navigate('/classDiagram'); 
  };
  const sequenceDiagramClick = () => {
    navigate('/sequenceDiagram'); 
  };
  const ERDClick = () => {
    navigate('/ERD'); 
  };
  const githubReportClick = () => {
    navigate('/githubReport'); 
  };

  return (
    <StatContainer>
    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
    </Helmet>
      <StatItem onClick={documentClick}>
        <StatTitle>생성한 문서</StatTitle>
        <StatNumber>0</StatNumber>
      </StatItem>
      <StatItem onClick={READMEClick}>
        <StatTitle>생성한 리드미</StatTitle>
        <StatNumber>0</StatNumber>
      </StatItem>
      <StatItem onClick={classDiagramClick}>
        <StatTitle>생성한 다이어그램</StatTitle>
        <StatNumber>0</StatNumber>
      </StatItem>
      <StatItem onClick={githubReportClick}>
        <StatTitle>생성한 깃허브 리포트</StatTitle>
        <StatNumber>0</StatNumber>
      </StatItem>
    </StatContainer>
  );
};

export default Stat;
