import styled from "styled-components";

export const Diagram = styled.div`
  width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
  display: flex;
  justify-content: center;
`;

export const DiagramLayout = styled.div`
  width: 85%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
  position: relative;
  display: flex;
  flex-direction: column;
  filter: ${(props) => (props.isModalOpen ? 'blur(5px)' : 'none')}; /* 모달이 열렸을 때 배경 흐림 */
`;

/* 다이어그램 네비게이션바 */
export const DiagramTopBarContainer = styled.div`
  width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 8vh; /* 부모 요소(Content)의 전체 높이를 차지 */
  display: flex;
  align-items: center;
  background-color: white;
  margin: 0.4vh 0;
  position: relative;
`;

export const DiagramNavBar = styled.div`
width: 27%;
height: 100%;
display:flex;
align-items: center;

`;

export const DiagramNavLink = styled.div`
color: ${({ isActive }) => (isActive ? '#5B59FC' : 'black')};
flex: 1;
text-align: center;
padding: 0 35px;
font-size: 0.8rem;
`;

export const Divider = styled.div`
width: 1px;
height: 20px;
flex-shrink: 0;
background-color: #DADEE4;
`;

// 저장하기 버튼
export const SaveBtn = styled.button`
position: absolute;
width: 7.3vw;
height: 35px;
top: 10px;
right: 10px;
color: white;
text-align: center;
font-size: 0.8rem;
border-radius: 5px;
background: #36CDFF;
display:flex;
justify-content: center;
align-items: center;
`;

// 다이어그램 페이지
export const DiagramContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color: white;
  padding: 0 2.5vh;
`;

export const DiagramsContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color: white;
  display: flex;
  padding: 10vh 0;
  gap: 2.5vh;
`;

export const DiagramPickerParagraph = styled.div`
  width: 100%;
  color: #181077;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 55px; /* 275% */
  margin-left: 1.2vw;
`;

/* 클래스 다이어그램 */
export const ClassLayout = styled.div`
width: 100%;
height: 100%;
display:flex;
margin: 2.5vh 0;
gap: 1.1vw;

`;

export const ClassLeft = styled.div`
width: 26vw;
position:relative;
`;

export const ClassMid = styled.div`
width: 28vw;
position:relative;
`;

export const ClassRight = styled.div`
width: 26vw;
position:relative;
`;

export const ClassTitleText = styled.div`
color: #181077;
text-align: center;
font-family: Inter;
font-size: 1.2rem;
font-style: normal;
font-weight: 600;
line-height: 1px; /* 5% */
text-transform: uppercase;
margin-top: 10px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

`;

export const ClassEditButtons = styled.div`
width: 100%;
height: 45px;
display: flex;
align-items: center;
flex-shrink: 0;
border-radius: 10px;
background: #F8F8FF;
flex: 1;
text-align: center;
font-size: 0.8rem;
margin-top: 30.4px;
`;

export const RemoveComponentBtn = styled.button`
width: 33%;
`;

export const RemoveAllBtn = styled.button`
width: 33%;
`;

export const GenerateAiBtn = styled.button`
width: 33%;
`;

export const ClassDiagramResultBox = styled.div`
width: 100%;
height: 100%;
border-radius: 10px;
border: 1px solid #D9D9FF;
background: #FFF;
margin-top: 17px;
`;


/* 클래스 에디터 */
export const EditDiagramContainer = styled.div`
width: 100%;
height:100%;
border-radius: 10px;
background-color: #F8F8FF;
margin-top: 30.4px;
padding: 5px 1.4vw;
position: relative;
`;

// 추가 버튼
export const AddButton = styled.button`
width:100%;
height:100%;
flex-shrink: 0;
border-radius: 5px;
background: #5B59FC;
color: white;
font-size: 0.8rem;
`;

export const ClassAddButtonBox = styled.div`
width: 4.5vw;
height: 30px;
position:absolute;
top: 8px;
right: 1.3vw;
`;

export const RelationshipAddButtonBox = styled.div`
width: 4.5vw;
height: 30px;
position:absolute;
top: 185px;
right:1.3vw;
`;

/* 코드 뷰 */
export const ClassRightContainer = styled.div`
width: 100%;
`;
export const ClassViewCode = styled.div`
width: 100%;
height : 50.4vh;

`;

/* 시퀀스 다이어그램 페이지  */
export const SequenceLayout = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 1.5vw;
margin-top: 10px;

`;

export const SequenceResultBox = styled.div`
width: 50%;
height: 80%;
border-radius: 10px;
background: #F8F8FF;
`;
export const SequenceCodeBox = styled.div`
width: 50%;
height: 80%;
border-radius: 10px;
background: #000;
`;




