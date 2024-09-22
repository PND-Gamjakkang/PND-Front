import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5vh 1vw; 
  background-color: #ffffff;
  border-bottom: 0.1rem solid #e0e0e0;
  width: 100%;

`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw; /* Adjusted gap for responsive design */
  color: black;
  height: 7.5vh; /* Adjusted height for responsive design */
`;

export const UserName = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* Adjusted line height for responsive design */
  font-size: 1.25rem; /* Adjusted font size for responsive design */
  color: black;
`;

export const UserEmail = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* Adjusted line height for responsive design */
  font-size: 1.25rem; /* Adjusted font size for responsive design */
  color: black;
`;

export const Divider = styled.div`
  height: 1rem;
  width: 0.1rem;
  background-color: #ccc;
  margin: 0 1vw; /* Adjusted margin for responsive design */
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1vw; /* Adjusted gap for responsive design */
`;

export const LogOutButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* Adjusted font size for responsive design */
  border-radius: 0.3125rem;
  border: 0.0625rem solid #00bfff;
  background-color: #fff;
  color: #36CDFF;
  cursor: pointer;
  width: 7.5rem; /* Adjusted width for responsive design */
  height: 2.5rem; /* Adjusted height for responsive design */
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #e0f7ff;
  }
`;

export const ManualButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* Adjusted font size for responsive design */
  border-radius: 0.3125rem;
  border: 0.0625rem solid #00bfff;
  background-color: #36CDFF;
  color: #fff;
  width: 7.5rem; /* Adjusted width for responsive design */
  height: 2.5rem; /* Adjusted height for responsive design */
  cursor: pointer;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #009ACD;
  }
`;
