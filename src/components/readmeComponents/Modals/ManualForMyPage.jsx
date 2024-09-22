import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import logo from '../../../assets/images/main-logo.png';

import projectImage1 from '../../../assets/images/manualForMyProjects/project_1.PNG';
import projectImage2 from '../../../assets/images/manualForMyProjects/project_2.PNG';
import projectImage3 from '../../../assets/images/manualForMyProjects/project_3.PNG';
import projectImage4 from '../../../assets/images/manualForMyProjects/project_4.PNG';
import projectImage5 from '../../../assets/images/manualForMyProjects/project_5.PNG';
import projectImage6 from '../../../assets/images/manualForMyProjects/project_6.PNG';


const ModalHeader = styled.div`
margin-top:3rem;
  font-size: 1.8rem;
  font-weight : 1000;
  text-align: center;
  margin-bottom: 1rem;
`;

const ModalContent = styled.div`
  padding: 1.5rem;
  line-height: 1.6;
  overflow-y: auto;
  background-color : #f4f4f4;
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
    font-size : 1.3rem;
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
  max-width: 50%;
  height: auto;
  margin-top: 1rem;
  margin-bottom : 1rem;
  border-radius : 10px;
`;

const ImageExamplemini = styled.img`
    max-width : 30%;
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
border-radius : 10px;
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
const ManualForMyPage = ({ closeModal }) => {
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
>    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

      <CloseButton onClick={closeModal}>닫기</CloseButton>
      <ModalContent>
        <Title><Logo src={logo}/>와 함께 생성한 파일들을 편하게 관리하고 수정하세요!</Title>
        <br></br><hr></hr><br></br><br></br>
        <ContentTitle>프로젝트별 파일 관리 </ContentTitle>
        <MarkdownExample>
            파일들은 프로젝트 단위로 저장되어 쉽게 관리할 수 있습니다.
            <br></br>
            프로젝트의 수 만큼 카드가 생성되며, 이름과 날짜로 알아볼 수 있습니다.
        </MarkdownExample>
        <ImageBox>
        <ImageExample100 src={projectImage1} />
        </ImageBox>
        <br></br><br></br><hr></hr>
        <ContentTitle>파일 수정하기</ContentTitle>
        <MarkdownExample>
            카드에 생성된 각각의 태그를 눌러 마이페이지에서 내용을 확인할 수 있습니다. <br></br>
            상단의 수정하기를 클릭하면 수정 페이지로 이동할 수 있습니다.
        </MarkdownExample>
        <ImageBox>
        <ImageExample100 src={projectImage2}/>
        </ImageBox><br></br><br></br><hr></hr>

        <ContentTitle>다이어그램 저장하기</ContentTitle>
        <MarkdownExample>
            수정하기 버튼을 클릭하면 바로 해당 다이어그램 수정 페이지로 이동합니다.<br></br>
            저장하기 버튼을 클릭해 다이어그램을 svg 파일로 다운로드 할 수 있습니다.
        </MarkdownExample>
        <ImageBox>
        <ImageExample100 src={projectImage3}/>
        </ImageBox><br></br><br></br><hr></hr>
        <ContentTitle>깃허브 리포트 저장하기</ContentTitle>
        <MarkdownExample>
            깃허브 리포트는 각 이미지의 아무 곳이나 클릭하면 svg 파일로 다운로드 됩니다.<br></br>
            이미지는 총 7가지 종류입니다.
        </MarkdownExample>
        <ImageBox>
        <ImageExample100 src={projectImage4}/>
        </ImageBox>
        <br></br><br></br><hr></hr>
        <ContentTitle>프로젝트 이름과 날짜 수정하기</ContentTitle>
        <MarkdownExample>
            카드 하단 영역을 클릭해서<br></br>
            프로젝트의 제목과 날짜를 자유롭게 수정할 수 있습니다.
        </MarkdownExample>
        <ImageBox>
        <ImageExample50 src={projectImage5}/>
        <ImageExample50 src={projectImage6}/>
        </ImageBox><br></br><br></br><hr></hr>
      </ModalContent>
      <ButtonContainer>
      <StartButton onClick={closeModal}>시작해보기</StartButton>
      </ButtonContainer>
    </Modal>
  );
};

export default ManualForMyPage;
