import styled from "styled-components";

export const Report = styled.div`
  width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
  display: flex;
  justify-content: center;
`;

export const ReportLayout = styled.div`
  width: 85%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 100%; /* 부모 요소(Content)의 전체 높이를 차지 */
  position: relative;
  display: flex;
  flex-direction: column;
  filter: ${(props) => (props.isModalOpen ? 'blur(5px)' : 'none')}; /* 모달이 열렸을 때 배경 흐림 */

`;

export const ReportTopBarContainer = styled.div`
  width: 100%; /* 부모 요소(Content)의 전체 너비를 차지 */
  height: 8vh; /* 부모 요소(Content)의 전체 높이를 차지 */
  display: flex;
  align-items: center;
  background-color: white;
  margin: 0.4vh 0;
  position: relative;
  padding: 1.5vh 1vw 1.5vh 1.5vw;
  justify-content: space-between;

`;

export const ReportContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color: white;
  padding: 0 2.5vh;
  display:flex;
  flex-direction: column;
  // justify-content:center;
  // align-items:center;
  
`;

export const MyPageReportContainer = styled.div`
  width: 100%; /* 부모 요소의 전체 너비 */
  height: 100%; /* 부모 요소의 전체 높이 */
  background-color: #F8F8FF;
  padding: 0 2.5vh;
  display:flex;
  flex-direction: column;
`;

export const ReportTitleText = styled.div`

`;

export const ReportLeft = styled.div`
width: 50%;

`;

export const Github3D = styled.div`
width: 100%;
`;
export const Github3DImg = styled.img`
width: 100%;
`;

export const ReportRight = styled.div`
width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 내부 요소들을 오른쪽 정렬 */
  justify-content: flex-start; /* 위쪽에 붙도록 설정 */
  gap: 20px;
`;

export const ReportInfo = styled.div`
width: 100%;
height: 70px;
display:flex;
align-items: center;
justify-content: space-between;
font-weight: 700;
font-size: 1.4rem;
gap: 15px;

`;

export const RepoTitle = styled.h3`

`;

export const RepoDate = styled.div`

`;

export const ReportCreateAt = styled.div`

`;

export const ReportTypeContainer = styled.div`

margin-bottom: 10px;
`;
export const ReportTypeBtn = styled.button`
width: 7vw;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: ${({ isActive }) => (isActive ? '2px solid #5B59FC' : '1px solid #B7B6FF')};
background-color: ${({ isActive }) => (isActive ? '#D9D9FF' : '#E8E8FF')};
margin-right: 10px;
font-size: 0.8rem;

`;

// 로딩 중
export const LoadingOverlay = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8); /* 반투명 흰색 배경 */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem; /* 텍스트 크기 */
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
    color: #333; /* 텍스트 색상 */
    text-align: center; /* 텍스트 가운데 정렬 */
`;