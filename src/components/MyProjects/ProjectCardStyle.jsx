import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 4vw;
  }
    background:red;
`;

export const ProjectCard = styled.div`
  width: 22vw;
  min-width: 280px;
  max-width: 100%;
  height: 33vh;
  background-color: #FFF;
  border-radius: 1rem;
  border: 0.1rem solid #D9D9FF;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90vw;
    min-height: 40vh;
  }
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
  height: 8vh;
  border-radius: 0 0 1rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: auto;
  }
`;

export const ProjectTitle = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
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
  padding: 0.8rem;
  margin: 0.5rem 0;
  background-color: #FFF;
  color: #07061F;
  border: 0.1rem solid #D9D9FF;
  text-align: center;
  text-decoration: none;
  border-radius: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
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
  padding: 1rem 2rem; 
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
