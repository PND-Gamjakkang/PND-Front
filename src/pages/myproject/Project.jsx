import React, { useState, useEffect } from 'react';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectDetails, ProjectTitle, ProjectDate, Divider, StyledLink, LinkContainer } from './Styles/ProjectStyles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Project = () => {
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    //Test용 가짜 데이터
    const fetchData = () => {
      const data = ["README", "CLASS DIAGRAM", "SEQUENCE DIAGRAM", "ERD", "GITHUB REPORT"];
      setAvailableTags(data);
    };

    fetchData();
  }, []);

  // 사용자 정보 조회 api (api/pnd/user/profile) 통신코드

  return (
    <ProjectsContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      {/* totalReports 개수만큼 ProjectCard 불러오기 */}
      <ProjectCard>
        <LinkContainer>
          {availableTags.includes("README") && <StyledLink to="/mypageReadme">README</StyledLink>}
          {availableTags.includes("CLASS DIAGRAM") && <StyledLink to="/mypageClassDiagram">CLASS DIAGRAM</StyledLink>}
          {availableTags.includes("SEQUENCE DIAGRAM") && <StyledLink to="/mypageSequenceDiagram">SEQUENCE DIAGRAM</StyledLink>}
          {availableTags.includes("ERD") && <StyledLink to="/mypageERD">ERD</StyledLink>}
          {availableTags.includes("GITHUB REPORT") && <StyledLink to="/mypageGithubReport">GITHUB REPORT</StyledLink>}
        </LinkContainer>
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <Divider />
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard>
      {/* <ProjectCard>
        <LinkContainer>
          {availableTags.includes("README") && <StyledLink to="/mypageReadme">README</StyledLink>}
          {availableTags.includes("CLASS DIAGRAM") && <StyledLink to="/mypageClassDiagram">CLASS DIAGRAM</StyledLink>}
          {availableTags.includes("SEQUENCE DIAGRAM") && <StyledLink to="/mypageSequenceDiagram">SEQUENCE DIAGRAM</StyledLink>}
          {availableTags.includes("ERD") && <StyledLink to="/mypageERD">ERD</StyledLink>}
          {availableTags.includes("GITHUB REPORT") && <StyledLink to="/mypageGithubReport">GITHUB REPORT</StyledLink>}
        </LinkContainer>
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <Divider />
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard>
      <ProjectCard>
        <LinkContainer>
          {availableTags.includes("README") && <StyledLink to="/mypageReadme">README</StyledLink>}
          {availableTags.includes("CLASS DIAGRAM") && <StyledLink to="/mypageClassDiagram">CLASS DIAGRAM</StyledLink>}
          {availableTags.includes("SEQUENCE DIAGRAM") && <StyledLink to="/mypageSequenceDiagram">SEQUENCE DIAGRAM</StyledLink>}
          {availableTags.includes("ERD") && <StyledLink to="/mypageERD">ERD</StyledLink>}
          {availableTags.includes("GITHUB REPORT") && <StyledLink to="/mypageGithubReport">GITHUB REPORT</StyledLink>}
        </LinkContainer>
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <Divider />
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard> */}

    </ProjectsContainer>
  );
};

export default Project;
