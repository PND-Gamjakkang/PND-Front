import React, { useState, useEffect } from 'react';
import { PageContainer, Header, NavItem, NavMenu, ButtonGroup, EditButton, SaveButton, Title, ContentArea, Divider, DiagramResultBox } from '../Styles/MyPageStyles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Download from '../Download';
import RepoSettingModalForMyPage from '../../../components/Common/RepoSettingModalForMyPage';
import { API } from '../../../api/axios';
import mermaid from 'mermaid';
import ViewCode from '../../../components/Diagram/ViewCode.jsx';
import { Navigate } from 'react-router-dom';

const MyPageClassDiagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [classDiagramContent, setClassDiagramContent] = useState(''); 
  const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = (type) => {
    if (type === 'save') {
      setIsDownloadModalOpen(true);
    } else if (type === 'edit') {
      console.log('edit');
      //Navigate('readme');
    }
  };

  const fetchUserClassDiagram = async (repoId) => {
    try {
      const requestStr = `api/pnd/diagram/class?repoId=${repoId}`;
      console.log(requestStr);
      const response = await API.get(requestStr);
      console.log(response.data);
      setClassDiagramContent(response.data.data);
      setError(null); 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("선택한 프로젝트에 대한 Class Diagram을 찾을 수 없습니다."); 
      } else {
        setError("ClassDiagram을 불러오는 중 오류가 발생했습니다."); 
      }
      setClassDiagramContent('');
    }
  };

  useEffect(() => {
    const renderDiagram = () => {
      // console.log("Rendering diagram with classDiagramContent:", classDiagramContent); 
      const diagramContainer = document.getElementById("diagram-container");
      const c=`
      classDiagram
      MarketRepo --> FirebaseDataSource
      MarketRepo --> RemoteDataSource
      MarketRepo --> LocalDataSource
      MarketViewModel --> MarketRepo
      MarketViewModel --> MarketEvent
      MarketViewModel --> MarketUiState
      MarketAdapter --> RecyclerView
      MarketAdapter --> MarketViewHolder
      MarketViewHolder --> ItemMarketBinding
      
      class MarketRepo {
        +FirebaseDataSource firebaseDataSource
        +RemoteDataSource remoteDataSource
        +LocalDataSource localDataSource
      }
      
      class FirebaseDataSource {
        +fetchData()
        +uploadData()
      }
      
      class RemoteDataSource {
        +fetchRemoteData()
      }
      
      class LocalDataSource {
        +fetchLocalData()
        +saveLocalData()
      }
      
      class MarketViewModel {
        +MarketRepo marketRepo
        +MarketEvent marketEvent
        +MarketUiState marketUiState
      }
      
      class MarketEvent {
        +onEvent()
      }
      
      class MarketUiState {
        +state: String
      }
      
      class MarketAdapter {
        +RecyclerView: parent
        +onBindViewHolder()
        +onCreateViewHolder()
      }
      
      class MarketViewHolder {
        +ItemMarketBinding itemMarketBinding
      }
      
      class ItemMarketBinding {
        +binding: String
      }
      
      class RecyclerView {
        +adapter: Adapter
      }
      
      class Adapter {
        +onCreateViewHolder()
        +onBindViewHolder()
      }
            `;
      if (diagramContainer && classDiagramContent && classDiagramContent.trim()) {
        diagramContainer.innerHTML = `<div class="mermaid">${c}</div>`;
        try {
          mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
        } catch (error) {
          console.error("Mermaid rendering error:", error);
        }
      }
    };

    renderDiagram(); 
  }, [classDiagramContent]); 

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <PageContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <Header>
        <NavMenu>
          <NavItem to='/mypageReadme' isActive={location.pathname === '/mypagereadme'}>README</NavItem>
          <Divider />
          <NavItem to='/mypageClassDiagram' isActive={location.pathname === '/mypageClassDiagram'}>
            CLASS DIAGRAM
          </NavItem>
          <Divider />
          <NavItem to='/mypageSequenceDiagram' isActive={location.pathname === '/mypageSequenceDiagram'}> SEQUENCE DIAGRAM</NavItem>
          <Divider />
          <NavItem to='/mypageERD' isActive={location.pathname === '/mypageERD'}>ERD</NavItem>
          <Divider />
          <NavItem to='/mypageGithubReport' isActive={location.pathname === '/mypageGithubReport'}>GITHUB REPORT</NavItem>
        </NavMenu>
        <ButtonGroup>
          <EditButton onClick={() => handleButtonClick('edit')}>수정하기</EditButton>
          <SaveButton onClick={() => handleButtonClick('save')}>저장하기</SaveButton>
        </ButtonGroup>
      </Header>
      <Title>CLASS DIAGRAM</Title>
      <ContentArea>
        <DiagramResultBox>
          {error ? error : (
            <div id="diagram-container">Class Diagram을 로드 중입니다...</div>
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
            fetchUserClassDiagram(id); 
          }}
        />
      )}
    </PageContainer>
  );
};

export default MyPageClassDiagram;
