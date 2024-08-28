import styled from "styled-components";

export const Diagram = styled.div`
width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
display:flex;
justify-content: center;
`;

export const DiagramLayout = styled.div`
width: 85%; /* 부모 요소(Content)의 전체 너비를 차지 */
height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
position: relative;
display:flex;
flex-direction: column;
`;

export const DiagramTopBarContainer = styled.div`
width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
height: 10%; /* 부모 요소(Content)의 전체 높이를 차지 */
display:flex;
align-items: center;
background-color:white;
margin: 0.4vh 0;
`;

export const DiagramNavBar = styled.div`

`;

export const DiagramContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color:white;
  display:flex;
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

