import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color:black;
  height : 60px;
`;

export const UserName = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;   
    line-height: 10px;
    font-size: 20px;
  font-weight: 600;
  font-size: 1rem;
  color:black;
`;

export const UserEmail = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;   
    line-height: 10px;
    font-size: 20px;
    color:black;
`;

export const Divider = styled.div`
  height: 1rem;
  width: 1px;
  background-color: #ccc;
  margin: 0 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const LogOutButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #00bfff;
    background-color: #FFF;
    color: #36CDFF;
    cursor: pointer;
    width:120px;
    height:40px;
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;   
    line-height: 10px;
    &:hover {
    background-color: '#e0f7ff';
    }

`;
export const LeaveButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #00bfff;
    background-color: #36CDFF;
    color: #FFF;
    width:120px;
    height:40px;
    cursor: pointer;
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;   
    line-height: 10px;
  

    &:hover {
    background-color: '#009ACD';
    }

`;
