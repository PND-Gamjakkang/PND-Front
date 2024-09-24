import React from 'react';
import {PageContainer,Header,NavItem,NavMenu,ButtonGroup,EditButton,SaveButton,Title,ContentArea, Divider,DiagramResultBox} from '../Styles/MyPageStyles';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Download from '../Download';
import { API } from '../../../api/axios';
import RepoSettingModalForMyPage from '../../../components/Common/RepoSettingModalForMyPage';
import mermaid from 'mermaid';
import { Navigate } from 'react-router-dom';
const MyPageSequenceDiagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [sequenceDiagramContent, setSequenceDiagramContent] = useState(''); 
  const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error,setError] = useState('');
  const [repoId, setRepoId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const handleButtonClick=(type)=>{
    if(type=='save'){
      downloadDiagram();
    }
    else if(type=='edit'){
      navigate(`/diagram/sequence?edit=${repoId}&type=sequence`);
    }
  };
  const fetchUserSequenceDiagram = async (repoId) => {
    try {
        const response = await API.get(`api/pnd/diagram/sequence?repoId=${repoId}`);
        console.log(response.data);
        setSequenceDiagramContent(response.data.data);
        setError(null); 
        
    } catch (error) {
        if (error.response && error.response.status === 404) {
            setError("선택한 프로젝트에 대한 SequenceDiagram을 찾을 수 없습니다."); 
        } else {
            setError("sequence Diagram을 불러오는 중 오류가 발생했습니다."); 
        }
        setSequenceDiagramContent(error);
    }
  };

  useEffect(() => {
    console.log("선택한 프로젝트 아이디: " + selectedProjectId);
}, [selectedProjectId]);


  useEffect(()=>{
    const sessionRepoId = sessionStorage.getItem('repoId');
    if(sessionRepoId!==null){
      setRepoId(sessionRepoId);
      fetchUserSequenceDiagram(sessionRepoId);
    }
    else{
    setIsModalOpen(true);
    }
  },[]);

  useEffect(() => {
    const renderDiagram = () => {
      // console.log("Rendering diagram with sequenceDiagramContent:", sequenceDiagramContent); 
      const diagramContainer = document.getElementById("diagram-container");
      
      if (diagramContainer && sequenceDiagramContent && sequenceDiagramContent.trim()) {
        diagramContainer.innerHTML = `<div class="mermaid">${sequenceDiagramContent}</div>`;
        try {
          mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
    
          setTimeout(() => {
            const svgElement = diagramContainer.querySelector("svg");
            if (svgElement) { 
              svgElement.setAttribute('style', 'width:100%; height: 100%; min-width: 80%; max-width: none !important;');
            }
          }, 1); // 1ms 지연
            } catch (error) {
          console.error("Mermaid rendering error:", error);
        }

      }
    };

    renderDiagram(); 
  }, [sequenceDiagramContent]); 

  const downloadDiagram = () => {
    const repoTitle = sessionStorage.getItem('repoTitle');
    const diagramContainer = document.getElementById("diagram-container");    
    const svgElement = diagramContainer.querySelector("svg");
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${repoTitle}_sequence_diagram.svg`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);  
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
      <ContentArea>
        <DiagramResultBox>
          {error ? error : (
            <div id="diagram-container" style={{width : '100%'}}>Class Diagram을 로드 중입니다...</div>
            )}
        </DiagramResultBox>
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
            fetchUserSequenceDiagram(id); 
          }}
        />
      )}

      </PageContainer>
  );
};

export default MyPageSequenceDiagram;

