import { ProjectsContainer, ProjectCard, ProjectImage, ProjectDetails, ProjectTitle, ProjectDate, Divider, StyledLink, LinkContainer } from './ProjectCardStyle';

function ProjectCard() {
    return (
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
    )
}

export default ProjectCard;