import styled from "styled-components";

export const MyProjectsLayout = styled.div`
  width: 1500px;
  height: 800px;
  margin: auto;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: flex-start; /* 아이템을 왼쪽 정렬 */
  align-items: center;
  height : 346px;
  margin-bottom: 47px;
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
  overflow: hidden; 
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover; 
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
  margin-left: auto; 
  margin-right: 53px;
`;
