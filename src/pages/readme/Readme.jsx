import React, { useState, useRef, useEffect } from 'react';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';
import { Title, Divider, MdAreaHeader, Container, Content, ReadmeContainer, Container2 } from './ReadmeStyle';
import { Helmet } from 'react-helmet';
import RepoSettingModal from '../../components/Common/RepoSettingModal';
function Readme() {
  const inputRef = useRef(null);
  const [content, setContent] = useState("");
  const [clickedButton, setClickedButton] = useState("");
  const [badgeURL, setBadgeURL] = useState('');
  const [imageURL, setimageURL] = useState('');
  const [isSelectedProject, setIsSelectedProject] = useState(false); // 다이어그램 생성할 프로젝트 담는 변수
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 열림/닫힘 상태

  const userToken=localStorage.getItem('token');
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

  // 페이지 로드 시 모달을 자동으로 열기 위한 useEffect
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

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
          <InputArea
            onChange={handleInputChange}
            content={content}
            inputRef={inputRef}
            clickedButton={clickedButton}
            onMarkdownApplied={handleMarkdownApplied}
            badgeURL={badgeURL}
            imgURL={imageURL}
          />
        </Container>
        <Divider/>
        <Container2>
          <MdArea content={content} />
        </Container2>
      </Content>
      {isModalOpen && (
        <RepoSettingModal
          closeModal={() => setIsModalOpen(false)}
          onSelectProject={() => setIsSelectedProject(true)} // 상태 업데이트 핸들러 전달
          onSelectedProjectId={(id) => setSelectedProjectId(id)}
          onClickCreateBtn={() => setIsClickCreateBtn(true)}
        />
      )}
    </ReadmeContainer>
  );
}

export default Readme;
