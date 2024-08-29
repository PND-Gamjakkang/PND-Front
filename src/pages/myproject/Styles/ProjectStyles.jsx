import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProjectCard = styled.div`
  flex: 1;
  max-width: 30%;
  min-width: 250px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectImage = styled.div`
  height: 150px;
  background-color: #e0e0f8;
  border-radius: 5px;
`;

export const ProjectDetails = styled.div`
  margin-top: 15px;
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

export const ProjectDate = styled.p`
  margin: 5px 0 0;
  font-size: 0.8rem;
  color: #888;
`;
