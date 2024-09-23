import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2vw;
  justify-content: space-between;
  // min-height: 43vh;
  background-color: #f8f8ff;  

  @media (max-width: 768px) {
    justify-content: center;
    gap: 4vw;
  }
`;

export const ProjectCard = styled.div`
  width: 25vw;

  max-width: 100%;
  height: 400px;
  // height: 43vh;
  background-color: #FFF;
  border-radius: 1rem;
  border: 0.1rem solid #D9D9FF;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
    //min-height: 40vh;
  }
  
`;

export const ProjectCardImage = styled.img`
width: 100%;
height: 330px;
  border-radius: 1rem;
  border: 0.1rem solid #D9D9FF;

`;

export const ProjectImage = styled.div`
  height: 60%;
  background-color: #e0e0f8;
  border-radius: 1rem 1rem 0 0;
`;

export const ProjectDetails = styled.div`
  padding: 2rem;
  background-color: #4a4a4a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  // height: 5vh;
  border-radius: 0 0 1rem 1rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
    height: auto;
  }
`;

export const ProjectTitle = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1.0rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 1.4rem;
  background-color: #ccc;
  margin: 0 1rem;

  @media (max-width: 768px) {
    height: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem;
  margin: 5px 0;
  background-color: #FFF;
  color: #07061F;
  border: 0.1rem solid #D9D9FF;
  text-align: center;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;

  &:hover {
    background-color: #A6A6FF;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }

`;

export const LinkContainer = styled.div`
  position: absolute;  // 절대 위치 지정
  bottom: 62px;  // 이미지의 맨 위에 위치
  right: 2px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: auto;
  width: 6.25vw;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

`;
