import React, { useState, useRef, useEffect } from 'react';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';
import { Title, Divider, MdAreaHeader, Container, Content, ReadmeContainer, Container2 } from './ReadmeStyle';
import { Helmet } from 'react-helmet';
import RepoSettingModalForMyPage from '../../components/Common/RepoSettingModalForMyPage';
import { API } from '../../api/axios';

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

  const userToken = localStorage.getItem('token');

  const fetchUserReadme = async (repoId) => {
    try {
      const response = await API.get(`api/pnd/readme/${repoId}`);
      console.log(response.data);
      setContent(response.data.data.readmeScript);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("선택한 프로젝트에 대한 README를 찾을 수 없습니다.");
      } else {
        setError("README를 불러오는 중 오류가 발생했습니다.");
      }
      setContent('');
    }
  };

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
    console.log(imageURL);
    setimageURL(imageURL);
    setClickedButton('Image');
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      fetchUserReadme(selectedProjectId);
    }
  }, [selectedProjectId]); // selectedProjectId가 변경될 때마다 fetchUserReadme 호출

  return (
    <ReadmeContainer>
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
          {/* selectedProjectId가 존재할 때만 InputArea 렌더링 */}
          {selectedProjectId && (
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
          )}
        </Container>
        <Divider/>
        <Container2>
          <MdArea content={content} />
        </Container2>
      </Content>
      {isModalOpen && (
        <RepoSettingModalForMyPage
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)}
          onSelectedProjectId={(id) => setSelectedProjectId(id)} // RepoId를 받아와서 상태 업데이트
          onClickCreateBtn={() => setIsClickCreateBtn(true)}
        />
      )}
    </ReadmeContainer>
  );
}

export default Readme;
