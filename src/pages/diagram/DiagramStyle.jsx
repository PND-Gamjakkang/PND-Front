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
  height: 10%; /* 부모 요소(Content)의 전체 높이를 차지 */
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
flex: 1;
text-align: center;
padding: 0 35px;
font-size: 0.8rem;
`;

export const NavDivider = styled.div`
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

export const DiagramContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color: white;
  display: flex;
  padding: 10vh 2.5vh;
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


