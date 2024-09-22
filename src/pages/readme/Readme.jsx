import React, { useState, useRef, useEffect } from 'react';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';
import { Title, Divider, MdAreaHeader, Container, Content, ReadmeContainer, Container2 } from './ReadmeStyle';
import { Helmet } from 'react-helmet';
import RepoSettingModalForMyPage from '../../components/Common/RepoSettingModalForMyPage';
import { API } from '../../api/axios';
import LoginModal from '../../components/Login/LoginModal';
import Loader from '../../components/Diagram/Loader';
import RepoSettingModal from '../../components/Common/RepoSettingModal';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
function Readme() {
  const inputRef = useRef(null);
  const [content, setContent] = useState("");
  const [clickedButton, setClickedButton] = useState("");
  const [badgeURL, setBadgeURL] = useState('');
  const [imageURL, setimageURL] = useState('');
  const [isSelectedProject, setIsSelectedProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [needLogin, setNeedLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isBaseInfoSet, setIsBaseInfoSet] = useState(null); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태

  const location = useLocation();
  const userToken = localStorage.getItem('token');
  
  const fetchUserReadme = async (repoId) => {
    setLoading(true);
    try {
      const response = await API.get(`api/pnd/readme/${repoId}`);
      setContent( response.data.data.readmeScript);
      // console.log(response.data.data.readmeScript);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("선택한 프로젝트에 대한 README를 찾을 수 없습니다.");
      } else {
        setError("README를 불러오는 중 오류가 발생했습니다.");
      }
      setContent('err');
    }
    finally{
      setLoading(false);
    }
  };

  const putRepoInfo = async () => {
    console.log("새로 저장하는 경우");
    try {
      const formData = new FormData();

      const jsonData = {
        title: title,
        period: `${moment(startDate).format('YYYY.MM.DD')} ~ ${moment(endDate).format('YYYY.MM.DD')}`
      };
  
      const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      formData.append('data', jsonBlob); 
      formData.append('image',null);
      const response = await API.put(`api/pnd/repo/${selectedProjectId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('response:', response);

        
    } catch (err) {
        console.log("API 통신 중 오류 발생:", err);
    }
};

    // 생성하러가기 버튼 클릭 유무 확인
    useEffect(() => {
      console.log("생성하러가기 버튼 클릭 유무: " + isClickCreateBtn);
      setIsModalOpen(false);
  }, [isClickCreateBtn]);

  const handleInputChange = (newContent) => {
    setContent(newContent);
  };

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleMarkdownApplied = () => {
    setClickedButton("");
    setBadgeURL("");
    setimageURL("");
  };

  const handleBadgeAdd = (badgeURL) => {
    setBadgeURL(badgeURL);
    setClickedButton('Badge');
  };

  const handleImageAdd = (imageURL) => {
    // console.log(imageURL);
    setimageURL(imageURL);
    setClickedButton('Image');
  };
  function setStateBaseInfo() {
    setIsBaseInfoSet(true);
}

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    const queryParam = new URLSearchParams(location.search);
    const repoId = queryParam.get('edit');
    if(userInfo!==null && repoId===null){
      setIsModalOpen(true);
    }
    else if(repoId!==null){
      fetchUserReadme(repoId);
    }
    else{
      setNeedLogin(true);
    }
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      fetchUserReadme(selectedProjectId);
    }
  }, [selectedProjectId]); // selectedProjectId가 변경될 때마다 fetchUserReadme 호출

  useEffect(() => {
    console.log("isBaseInfoSet : ",isBaseInfoSet);
    console.log('isClickCreateBtn',isClickCreateBtn);
    if (isClickCreateBtn && !isBaseInfoSet) { // 기본 정보가 저장되어있지 않은 상태 && 기본 정보가 이미 저장되어있다면 기본 정보를 저장한다
        putRepoInfo();
    }
}, [isClickCreateBtn]);

  return (
    <ReadmeContainer>
      {loading && <Loader />}
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <InputAreaHeader 
        onButtonClick={handleButtonClick}  
        onBadgeAdd={handleBadgeAdd}
        onImageAdd={handleImageAdd}
        content={content}
        selectedProjectId={selectedProjectId}  
        userToken={userToken}
      />
      <Content>
        <Container>
            <InputArea
              onChange={handleInputChange}
              content={content}
              inputRef={inputRef}
              clickedButton={clickedButton}
              onMarkdownApplied={handleMarkdownApplied}
              badgeURL={badgeURL}
              imgURL={imageURL}
              selectedProjectId={selectedProjectId}  // selectedProjectId를 InputArea에 전달
            />
        </Container>
        <Divider/>
        <Container2>
          <MdArea content={content} />
        </Container2>
      </Content>
      {isModalOpen && (
        <RepoSettingModal
        closeModal={() => setIsModalOpen(false)} // 모달창 닫는 명령어 전달
        onSelectProject={() => setIsSelectedProject(true)} // 상태 업데이트 핸들러 전달
        onSelectedProjectId={(id) => setSelectedProjectId(id)} // 선택한 프로젝트 아이디 전달
        onClickCreateBtn={() => setIsClickCreateBtn(true)} // 생성하기 버튼 클릭된 상태 전달
        onTitleChange={(newTitle) => setTitle(newTitle)}
        onImageChange={(newImage) => setImage(newImage)}
        onDateChange={(start, end) => { setStartDate(start); setEndDate(end); }}
        stateBaseInfo={setStateBaseInfo}
        />
      )}
      {needLogin &&(
        <LoginModal></LoginModal>
      )}
    </ReadmeContainer>
  );
}

export default Readme;
