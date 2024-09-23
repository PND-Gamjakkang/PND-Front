import React, { useState, useEffect } from 'react';
import { ProjectsContainer, ProjectCard, ProjectDetails, ProjectTitle, ProjectDate, Divider, StyledLink, LinkContainer, ProjectCardImage } from './Styles/ProjectStyles';
import { Helmet } from 'react-helmet';
import { API } from '../../api/axios';
import RepoSettingModalForEdit from '../../components/Common/RepoSettingModalForEdit';
import InputRepoInfo from '../../components/Common/InputRepoInfo';
const Project = () => {
  const [projects, setProjects] = useState([]); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProject, setUpdatedProject] = useState(null);
  const fetchUserProject = async () => {
    try {
      const response = await API.get('api/pnd/repo/docs');
      console.log(response.message);
      setProjects(response.data.data); 

      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const settingRepoTitle = (repoId)=>{
    let repoTitle = null;
    for(let i=0; i < projects.length; i++){
      if(projects[i].id === repoId){
        repoTitle = projects[i].title;
        break;
      }
    }
    console.log(repoTitle);
    sessionStorage.setItem('repoTitle',repoTitle);
  };
  const handleProjectClick = (project) => {
    setSelectedProject(project); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  useEffect(() => {
    fetchUserProject(); // 컴포넌트가 처음 렌더링될 때 프로젝트 데이터를 불러옴
  }, []);
  
  useEffect(()=>{
    fetchUserProject();
  },[updatedProject]);

  const handleSave = (updatedProject) => {
    console.log('저장된 데이터:', updatedProject);
    setUpdatedProject(updatedProject);
    // fetchUserProject();s
  };

  const handleLinkClick = (projectId)=>{
    sessionStorage.setItem('repoId',projectId);
    settingRepoTitle(projectId);
  }
  const formatPeriod = (period) => {
    if (!period) return '0000.00.00 ~ 0000.00.00'; // 기간이 없는 경우 기본값
    const [startDateStr, endDateStr] = period.split(' ~ ');

    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}.${month}.${day}`;
    };

    return `${formatDate(startDateStr)} ~ ${formatDate(endDateStr)}`;
  };

  return (
    <ProjectsContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      
      {(projects) && projects.map((project, index) => (
        <ProjectCard key={project.id}>
          <ProjectCardImage src={project.image}/>
          <LinkContainer>
            {project.existReadme && <StyledLink to="/mypageReadme" onClick={()=>handleLinkClick(project.id)}>README</StyledLink>}
            {project.existClassDiagram && <StyledLink to="/mypageClassDiagram" onClick={()=>handleLinkClick(project.id)}>CLASS DIAGRAM</StyledLink>}
            {project.existSequenceDiagram && <StyledLink to="/mypageSequenceDiagram" onClick={()=>handleLinkClick(project.id)}>SEQUENCE DIAGRAM</StyledLink>}
            {project.existErDiagram && <StyledLink to="/mypageERD" onClick={()=>handleLinkClick(project.id)}>ERD</StyledLink>}
            {project.existReport && <StyledLink to="/mypageGithubReport" onClick={()=>handleLinkClick(project.id)}>GITHUB REPORT</StyledLink>}
          </LinkContainer>
          <ProjectDetails onClick={() => handleProjectClick(project)}>
            <ProjectTitle>{project.title || `Project ${index + 1}`}</ProjectTitle>
            <Divider />
            <ProjectDate>{formatPeriod(project.period)}</ProjectDate>
          </ProjectDetails>
        </ProjectCard>
      ))}
      {isModalOpen && (
        <RepoSettingModalForEdit
        repoId={selectedProject.id}
        isOpen={isModalOpen}
        closeModal={closeModal}
        initialTitle={selectedProject.title}
        initialStartDate={selectedProject.startDate}
        initialEndDate={selectedProject.endDate}
        onSave={handleSave}
      />      
      )}
    </ProjectsContainer>
  );
};

export default Project;
