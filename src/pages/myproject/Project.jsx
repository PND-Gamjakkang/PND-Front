import React from 'react';
import { ProjectCard,ProjectDate,ProjectDetails,ProjectImage,ProjectTitle,ProjectsContainer } from './Styles/ProjectStyles';

const Project = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <ProjectImage />
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage />
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage />
        <ProjectDetails>
          <ProjectTitle>PND - SERVER</ProjectTitle>
          <ProjectDate>0000.00.00 ~</ProjectDate>
        </ProjectDetails>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Project;
