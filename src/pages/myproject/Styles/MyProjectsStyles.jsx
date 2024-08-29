import styled from "styled-components";

export const MyProjectsLayout = styled.div`
  width: 1500px;
  margin: auto;
  padding: 20px;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: flex-start; /* 아이템을 왼쪽 정렬 */
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProfileContainer = styled.div`
  width: 335px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
  border-radius: 10px;
  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 설정 */
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover; /* 이미지를 컨테이너에 맞게 자르고 비율을 유지 */
`;

export const StatContainer = styled.div`
  width: 912px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f9f9ff;
  border-radius: 10px;
  margin-left: auto; /* 자동으로 왼쪽 여백 설정하여 오른쪽으로 배치 */
  margin-right: 53px; /* 우측에서 53px 떨어지도록 설정 */
`;
