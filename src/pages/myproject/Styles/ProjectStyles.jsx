import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const ProjectCard = styled.div`
  width: 300px;
  min-height: 430px;
  background-color: #FFF;
  border-radius: 10px;
  border:1px solid #D9D9FF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px; 
  box-sizing: border-box;
`;

export const ProjectImage = styled.div`
  height: 60%;
  background-color: #e0e0f8;
  border-radius: 10px 10px 0 0;
`;

export const ProjectDetails = styled.div`
  padding: 20px;
  background-color: #4a4a4a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-radius: 0 0 10px 10px;
`;

export const ProjectTitle = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;
  text-align: center;

`;

export const ProjectDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;

`;

export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: #ccc;
  margin: 0 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  margin: 5px 0;
  background-color: #FFF;
  color : #07061F;
  border : 1px solid #D9D9FF;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;

  &:hover {
    background-color: #A6A6FF;
  }
`;

export const LinkContainer = styled.div`
  padding: 10px 20px; 
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top : auto;
`;
