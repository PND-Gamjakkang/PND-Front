import React, { useState, useEffect } from 'react';
import { PageContainer, Header, NavItem, NavMenu, ButtonGroup, EditButton, SaveButton, Title, ContentArea, Divider, MdResult } from '../Styles/MyPageStyles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { API } from '../../../api/axios';
import RepoSettingModalForMyPage from '../../../components/Common/RepoSettingModalForMyPage';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';
import { Navigate } from 'react-router-dom';

const MyPageReadme = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [readmeContent, setReadmeContent] = useState('');   const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error, setError] = useState(null);
  const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const location = useLocation();
  const [repoId,setRepoId] = useState(null); //세션에 설정된 유저 레포 정보 있는지 -> 마이페이지에서 카드로 클릭해서 온 경우에 있음.
  const handleButtonClick = (type) =>
   {
    if (type === 'save') {
      downloadMD();
    } else if (type === 'edit') {
      // console.log('edit');
      navigate(`/readme?edit=${repoId}`);
    }
  };


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
    const sessionRepoId = sessionStorage.getItem('repoId');
    if(sessionRepoId!==null){
      console.log(sessionRepoId);
      setRepoId(sessionRepoId);
      fetchUserReadme(sessionRepoId);
    }
    else{
      setIsModalOpen(true);
    }
  }, []);

  const downloadMD = () => {
      const repoTitle = sessionStorage.getItem('repoTitle');
      const element = document.createElement("a");
      const file = new Blob([readmeContent], { type: 'text/markdown' });
      element.href = URL.createObjectURL(file);
      element.download = `${repoTitle}_README.md`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  };
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
        <EditButton onClick={() => handleButtonClick('edit')}>수정하기</EditButton>
        <SaveButton onClick={()=>handleButtonClick('save')}>저장하기</SaveButton>
        </ButtonGroup>
      </Header>
      <Title>READ ME</Title>
      <ContentArea>
        <MdResult>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>     
      {error ? error : (readmeContent || 'README를 로드 중입니다...')}
     </ReactMarkdown>
     </MdResult>
      </ContentArea>
      {isModalOpen && (
        <RepoSettingModalForMyPage
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)}
          onClickCreateBtn={() => setIsClickCreateBtn(true)} // 생성하기 버튼 클릭된 상태 전달
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
