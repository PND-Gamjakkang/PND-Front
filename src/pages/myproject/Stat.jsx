import React from 'react';
import { StatContainer,StatItem,StatNumber,StatTitle } from './Styles/StatStyles';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


const Stat =({userTotalDocs, userTotalReadmes, userTotalDiagrams, userTotalReports}) => {
  const navigate = useNavigate();

  // const READMEClick = () => {
  //   navigate('/mypageReadme'); 
  // };
  // const documentClick = () => {
  //   navigate('/mypageDocument'); 
  // };
  // const classDiagramClick = () => {
  //   navigate('/mypageClassDiagram'); 
  // };
  // const sequenceDiagramClick = () => {
  //   navigate('/mypageSequenceDiagram'); 
  // };
  // const ERDClick = () => {
  //   navigate('/mypageERD'); 
  // };
  // const githubReportClick = () => {
  //   navigate('/mypageGithubReport'); 
  // };

  return (
    <StatContainer>
    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
    </Helmet>
      <StatItem>
        <StatTitle>생성한 문서</StatTitle>
        <StatNumber>{userTotalDocs}</StatNumber>
      </StatItem>
      <StatItem>
        <StatTitle>생성한 리드미</StatTitle>
        <StatNumber>{userTotalReadmes}</StatNumber>
      </StatItem>
      <StatItem >
        <StatTitle>생성한 다이어그램</StatTitle>
        <StatNumber>{userTotalDiagrams}</StatNumber>
      </StatItem>
      <StatItem >
        <StatTitle>생성한 깃허브 리포트</StatTitle>
        <StatNumber>{userTotalReports}</StatNumber>
      </StatItem>
    </StatContainer>
  );
};

export default Stat;
