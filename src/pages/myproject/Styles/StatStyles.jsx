import styled from "styled-components";
export const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 아이템이 위쪽에 맞춰지도록 설정 */
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f9f9ff;
  border-radius: 10px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 10px;
  height: 100%; /* 부모 높이 전부 사용 */
  position: relative; /* 자식 요소의 절대 위치 조정을 위해 설정 */

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

export const StatTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 43px; /* 상위 컨테이너로부터 43px 아래에 위치 */
  color:black;
  font-family: 'Inter', sans-serif;

`;

export const StatNumber = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  position: absolute;
  color:black;
  top: 135px; /* 제목으로부터 92px 아래, 상위 컨테이너로부터 총 135px 아래에 위치 */
`;
