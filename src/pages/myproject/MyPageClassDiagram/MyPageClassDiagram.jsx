import React from 'react';
import {PageContainer,Header,NavItem,NavMenu,ButtonGroup,EditButton,SaveButton,Title,ContentArea, Divider} from '../Styles/MyPageStyles';
import {Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Download from '../Download';
import RepoSettingModalForMyPage from '../../../components/Common/RepoSettingModalForMyPage';
import { API } from '../../../api/axios';
const MyPageClassDiagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [classDiagramContent, setClassDiagramContent] = useState(''); 
  const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error,setError] = useState('');
  const location = useLocation();

  const handleButtonClick=(type)=>{
    if(type=='save'){
      setIsDownloadModalOpen(true);
    }
    else if(type=='edit'){

    }
  };

  const fetchUserClassDiagram = async (repoId) => {
    try {
        const response = await API.get(`api/pnd/diagram/class/${repoId}`);
        console.log(response.data);
        setClassDiagramContent(response.data.data);
        setError(null); 
    } catch (error) {
        if (error.response && error.response.status === 404) {
            setError("선택한 프로젝트에 대한 Class Diargam을 찾을 수 없습니다."); 
        } else {
            setError("ClassDiagram을 불러오는 중 오류가 발생했습니다."); 
        }
        setClassDiagramContent('');
    }
  };
  useEffect(() => {
    console.log("선택한 프로젝트 아이디: " + selectedProjectId);
}, [selectedProjectId]);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);


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
      <Title>CLASS DIAGRAM</Title>
      <ContentArea>
      {error ? error : (classDiagramContent || 'Class Diagram을 로드 중입니다...')}
      </ContentArea>
      {isDownloadModalOpen && (
        <Download closeModal={closeDownloadModal} />
      )}
      {isModalOpen && (
        <RepoSettingModalForMyPage
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)}
          onSelectedProjectId={(id) => {
            setSelectedProjectId(id);
            fetchUserClassDiagram(id); 
          }}
        />
      )}
      </PageContainer>
  );
};

export default MyPageClassDiagram;
