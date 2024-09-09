import styled from "styled-components";

export const MyProjectsLayout = styled.div`
  width: 100%;
  max-width: 88.75vw; /* 1500px / 1600px */
  height: 50vw; /* 800px / 1600px */
  margin: auto;
  padding: 0.5vh 1.5vw; 
  @media (max-width: 768px) {
    max-width: 90vw;
    height: auto;
  }
  background: white;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 18vw; /* 기존 height 값을 적절히 변경 */
  margin-bottom: 2.9375vw; /* 47px / 1600px */
  background-color: #ffffff;
  border-radius: 0.625vw; /* 10px / 1600px */
  box-shadow: 0 0.125vw 0.3125vw rgba(0, 0, 0, 0.1);
  padding-left: 1vw;
  overflow: hidden; /* 추가: 컨텐츠가 넘칠 경우 숨기기 */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 5vw;
  }
 
`;

export const ProfileContainer = styled.div`
  width: 20.9375vw; /* 335px / 1600px */
  height: 18.75vw; /* 300px / 1600px */
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.625vw; /* 10px / 1600px */
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-bottom: 2vw;
  }
`;

export const ProfileImage = styled.img`
  width: 12.5vw; /* 200px / 1600px */
  height: 12.5vw; /* 200px / 1600px */
  object-fit: cover; 

  @media (max-width: 768px) {
    width: 50vw;
    height: 50vw;
  }
`;

export const StatContainer = styled.div`
  width: 57vw; /* 912px / 1600px */
  height: 85%; /* 300px / 1600px */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25vw; /* 20px / 1600px */
  background-color: #f9f9ff;
  border-radius: 0.625vw; /* 10px / 1600px */
  margin-left: auto; 
  margin-right: 3.3125vw; /* 53px / 1600px */
  
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 2vw;
    margin-right: 0;
    margin-top: 2vw;
  }
`;
