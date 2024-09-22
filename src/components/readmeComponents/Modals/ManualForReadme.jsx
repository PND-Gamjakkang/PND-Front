import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import logo from '../../../assets/images/main-logo.png';
import readmeImage1 from '../../../assets/images/manualForReadme/readme_1.PNG';
import readmeImage2 from '../../../assets/images/manualForReadme/readme_2.PNG';
import readmeImage3 from '../../../assets/images/manualForReadme/readme_3.PNG';
import readmeImage4 from '../../../assets/images/manualForReadme/readme_4.PNG';
import readmeImage5 from '../../../assets/images/manualForReadme/readme_5.PNG';
import readmeImage6 from '../../../assets/images/manualForReadme/readme_6.PNG';
import readmeImage7 from '../../../assets/images/manualForReadme/readme_7.PNG';
import readmeImage8 from '../../../assets/images/manualForReadme/readme_8.PNG';



const ModalContent = styled.div`
  padding: 1.5rem;
  line-height: 1.6;
  overflow-y: auto;
  background-color: #f4f4f4;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #aaa;
  font-size: 1.25rem;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const MarkdownExample = styled.div`
  background-color: #fff;
  padding: 1rem;
  font-size : 1.2rem;
  font-weight:550;
  border-left: 4px solid #4caf50;
  font-family: 'Inter', sans-serif;
  margin-top: 1rem;
`;

const Title = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight : 800;
    font-size : 1.4rem;
    text-align : center;
`

const ContentTitle = styled.div`
font-family: 'Inter', sans-serif;
font-weight : 800;
font-size : 1.8rem;
margin-top:30px;
padding:10px;
`

const ImageExample50 = styled.img`
    width: 50%; 
    height: 20vw; 
    object-fit: cover; 
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius : 10px;
`;

const ImageExamplemini = styled.img`
    max-width : 30%;
        object-fit: cover; 

    max-height : 30%;
    margin-top:1rem;
    border : 2px solic #ccc;
    margin-bottom:1rem;
`;
const ImageExample100 = styled.img`
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom:1rem;
    border: 2px solid #ccc;
`;

const StartButton = styled.button`
width: 18.75rem; /* 약 300px */
height: 3.75rem; /* 약 60px */
flex-shrink: 0;
background-color: #FFF;
color: #5B59FC;
border-radius: 0.5rem; /* 버튼에 라운드 처리 */
font-family: 'Inter', sans-serif;
font-size: 1rem; /* 약 16px */
font-weight: 600;
text-align: center;
cursor: pointer;
border: 2px solid #5B59FC; /* 테두리 추가 */

&:hover {
  background-color: #E0E0FF; /* 호버 시 배경색 변경 */
  color: #4A49D1; /* 호버 시 텍스트 색상 변경 */
}
&:focus {
  outline: none; /* 포커스 시 외곽선 제거 */
}
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: center;  /* 수평 가운데 정렬 */
align-items: center;      /* 수직 가운데 정렬 */
margin-top: 2rem;         /* 위쪽에 약간의 여백 추가 */
`;
const Logo = styled.img`
  width: 120px;
  height: 35px; 
`;
const ImageBox = styled.div`
    display:flex;
    justify-content : space-between;
    align-items : center;
    gap : 1rem;
    width: 100%;
    padding : 10px;
`;

// 모달 컴포넌트
const ManualForReadme = ({ closeModal }) => {
  return (
<Modal
  isOpen={true}
  onRequestClose={closeModal}
  contentLabel="Markdown Manual"
  style={{
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxHeight: '90%',
      overflowY: 'auto',
      background: '#f9f9f9', /* 백그라운드 색상 적용 */
      borderRadius: '10px',  /* 모서리를 둥글게 */
      padding: '20px'  /* 내부 여백 추가 */
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', /* 모달 외부 영역의 배경색 적용 */
    },
  }}
>
    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

      <CloseButton onClick={closeModal}>닫기</CloseButton>
      <ModalContent>
        <Title><Logo src={logo}/>에서는 마크다운이 쉬워집니다!</Title>
        <br></br><hr></hr><br></br><br></br>
        <ContentTitle>마크다운 문법 적용 버튼 </ContentTitle>
        <MarkdownExample>
          원하는 텍스트를 드래그하고, 해당 버튼을 눌러 적용할 수 있습니다.<br></br>
          직접 눌러보며 마크다운 문법을 익히고, 문서를 만들어 보세요!<br></br><br></br>
          실수를 했다면 Ctrl + Z, Ctrl + Y 키를 통해 편하게 수정하세요.<br></br>
          물론 ↺, ↻ 버튼으로도 할 수 있습니다!
        </MarkdownExample>
        <ImageBox>
            <ImageExample50 src={readmeImage1} />
            <ImageExample50 src={readmeImage2} />
        </ImageBox>
        <br></br><br></br><hr></hr>
        <ContentTitle>Top Languages 버튼</ContentTitle>
        <MarkdownExample>
          가장 많이 사용한 언어를 한 눈에 볼 수 있습니다.
        </MarkdownExample>
        <ImageExample100 src={readmeImage3}/>
        <br></br><br></br><hr></hr>

        <ContentTitle>Badge 버튼</ContentTitle>
        <MarkdownExample>
          내용을 나타내는 배지를 쉽게 생성할 수 있습니다.
          Sample Badge를 클릭하면 바로 적용됩니다.
        </MarkdownExample>
        <ImageBox>
            <ImageExample50 src={readmeImage4}/>
            <ImageExample50 src={readmeImage5}/>
        </ImageBox>
        <br></br><br></br><hr></hr>
        <ContentTitle>Image 버튼</ContentTitle>
        <MarkdownExample>
          S3 배포하고 추가하기
        </MarkdownExample>
        <br></br><br></br><hr></hr>
        <ContentTitle>AI 자동생성</ContentTitle>
        <MarkdownExample>
          Chat-GPT 4o로 해당 프로젝트의 README.md를 자동 생성합니다!<br></br>
          약 5초 정도의 시간이 소요됩니다.
        </MarkdownExample>
        <ImageExample50 src={readmeImage6}/>
       {/* 
            GPT 서버 고치고 GPT 작동 사진 추가 
          */}
        <br></br><br></br><hr></hr>
        <ContentTitle>저장하기 버튼</ContentTitle>
        <MarkdownExample>
          저장하기를 눌러 파일을 관리해보세요.<br></br>
          파일은 마이페이지에 저장되어 언제든 확인하고 수정할 수 있어요!
        </MarkdownExample>
        <ImageBox>
          <ImageExample50 src={readmeImage7}/>
          <ImageExample50 src={readmeImage8}/>
          </ImageBox>
          <br></br><br></br><hr></hr>
      </ModalContent>
      <ButtonContainer>
      <StartButton onClick={closeModal}>시작해보기</StartButton>
      </ButtonContainer>
    </Modal>
  );
};

export default ManualForReadme;
