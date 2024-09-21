import React from 'react';
import {PageContainer,Header,NavItem,NavMenu,ButtonGroup,EditButton,SaveButton,Title,ContentArea, Divider} from '../Styles/MyPageStyles';
import {Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Download from '../Download';
import RepoSettingModalForMyPage from '../../../components/Common/RepoSettingModalForMyPage';
import { API } from '../../../api/axios';
import Loader from '../../../components/Diagram/Loader';
import * as S from '../../report/ReportStyle';
import SaveBtn from '../../../components/Common/SaveButton';

const MyPageGithubReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [githubReportContent, setGithubReportContent] = useState(''); 
  const [isSelectedProject, setIsSelectedProject] = useState(false); 
  const [error,setError] = useState('');
  const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  // 각 이미지 상태 추가
  const [imageGreen, setImageGreen] = useState(null);
  const [imageSeason, setImageSeason] = useState(null);
  const [imageSouthSeason, setImageSouthSeason] = useState(null);
  const [imageNightView, setImageNightView] = useState(null);
  const [imageNightGreen, setImageNightGreen] = useState(null);
  const [imageNightRainbow, setImageNightRainbow] = useState(null);
  const [imageGitblock, setImageGitblock] = useState(null);
  const [createdAt, setCreatedAt] = useState(null); // 생성일자
  const [title, setTitle] = useState(''); // 제목

  const location = useLocation();

  
  const handleButtonClick=(type)=>{
    if(type=='save'){
      setIsDownloadModalOpen(true);
    }
    else if(type=='edit'){

    }
  };
    

  const fetchUserGithubReport = async (repoId) => {
    try {
        const response = await API.get(`api/pnd/report/${repoId}`);
        console.log(response.data);
        setImageGreen(response.data.data.imageGreen);
        setImageGitblock(response.data.data.imageGitblock);
        setImageNightGreen(response.data.data.imageNightGreen);
        setImageNightRainbow(response.data.data.imageNightRainbow);
        setImageNightView(response.data.data.imageNightView);
        setImageSeason(response.data.data.imageSeason);
        setImageSouthSeason(response.data.data.imageSouthSeason);
        setTitle(response.data.data.repoTitle);
        setCreatedAt(response.data.data.createdAt);
        setError(null); 
    } catch (error) {
        if (error.response && error.response.status === 404) {
            setError("선택한 프로젝트에 대한 GR을 찾을 수 없습니다."); 
        } else {
            setError("GR을 불러오는 중 오류가 발생했습니다."); 
        }
        setGithubReportContent('');
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
      <Title>GITHUB REPORT</Title>
      {/* Import Rendering Code */}
      <S.Report>  
        <S.ReportLayout>
            <S.ReportTopBarContainer>
                <S.ReportTitleText>GITHUB  COLLABORATION REPORT</S.ReportTitleText>
            </S.ReportTopBarContainer>
            <S.ReportContainer>
                <S.ReportLeft>
                    <S.Github3D>
                        
                            <>
                                <S.Github3DImg
                                    src={imageGreen}
                                    alt="imageGreen"
                                />
                                <S.Github3DImg
                                    src={imageSeason}
                                    alt="imageSeason"
                                />
                                <S.Github3DImg
                                    src={imageSouthSeason}
                                    alt="imageSouthSeason"
                                />
                                <S.Github3DImg
                                    src={imageNightView}
                                    alt="imageNightView"
                                />
                            </>
                        
                    </S.Github3D>
                </S.ReportLeft>
                <S.ReportRight>
                    <S.ReportInfo>
                        <h3>{title}</h3>
                        <div>레포트 생성 일자 : {createdAt}</div>
                    </S.ReportInfo>
                    <S.Github3D>
                            <>
                                <S.Github3DImg
                                    src={imageNightGreen}
                                    alt="imageNightGreen"
                                />
                                <S.Github3DImg
                                    src={imageNightRainbow}
                                    alt="imageNightRainbow"
                                />
                                <S.Github3DImg
                                    src={imageGitblock}
                                    alt="imageGitblock"
                                />
                            </>
                        
                            </S.Github3D>
                        </S.ReportRight>
                    </S.ReportContainer>
                </S.ReportLayout>
            </S.Report>
            
      {isDownloadModalOpen && (
        <Download closeModal={closeDownloadModal} />
      )}
            {isModalOpen && (
        <RepoSettingModalForMyPage
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)}
          onSelectedProjectId={(id) => {
            setSelectedProjectId(id);
            fetchUserGithubReport(id); 
          }}
        />
      )}

      </PageContainer>
  );
};

export default MyPageGithubReport;
