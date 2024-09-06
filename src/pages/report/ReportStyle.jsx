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
`;

export const ReportTitleText = styled.div`

`;