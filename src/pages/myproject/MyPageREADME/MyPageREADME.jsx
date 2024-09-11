import React, { useState, useEffect } from 'react';
import { PageContainer, Header, NavItem, NavMenu, ButtonGroup, EditButton, SaveButton, Title, ContentArea, Divider } from '../Styles/MyPageStyles';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { API } from '../../../api/axios';
import RepoSettingModal from '../../../components/Common/RepoSettingModal';

const MyPageReadme = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [readmeContent, setReadmeContent] = useState('');   const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error, setError] = useState(null); 
  const location = useLocation();

  const fetchUserReadme = async (repoId) => {
    try {
        const response = await API.get(`api/pnd/readme/${repoId}`);
        console.log(response.data);
        //db에 저장된 readme content(String)으로 내용 설정
        setReadmeContent(response.data.data.readmeScript);
        setError(null); 
    } catch (error) {
        if (error.response && error.response.status === 404) {
            setError("선택한 프로젝트에 대한 README를 찾을 수 없습니다."); 
        } else {
            setError("README를 불러오는 중 오류가 발생했습니다."); 
        }
        setReadmeContent('');
    }
  };

  useEffect(() => {
    console.log("선택한 프로젝트 아이디: " + selectedProjectId);
}, [selectedProjectId]);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <Header>
        <NavMenu>
          <NavItem to='/mypageReadme' isActive={location.pathname === '/mypageReadme'}>README</NavItem>
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
          <EditButton>수정하기</EditButton>
          <SaveButton>저장하기</SaveButton>
        </ButtonGroup>
      </Header>
      <Title>READ ME</Title>
      <ContentArea>
        {error ? error : (readmeContent || 'README를 로드 중입니다...')}
      </ContentArea>
      {isModalOpen && (
        <RepoSettingModal
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)}
          onSelectedProjectId={(id) => {
            setSelectedProjectId(id);
            fetchUserReadme(id); 
          }}
        />
      )}
    </PageContainer>
  );
};

export default MyPageReadme;
