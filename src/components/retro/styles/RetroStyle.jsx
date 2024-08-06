import styled from "styled-components";

export const SearchContainer = styled.div`
height: 40px;
display:flex;
justify-content: center;
align-items: center;
border-bottom: 2px solid ${({ theme }) => theme.colors.white};
margin-top: 3vw;
margin-left: 5vw;
`;

export const Button = styled.button`
flex-shrink: 0;
padding: 0px 8px;
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.black};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 175%; /* 28px */
border-radius: 10px;
margin: ${({margin}) => margin || '0'};
`;

export const SearchIconImg = styled.img`
margin: 8px;
width: 20px;
height: 20px;
`;

export const InputBox = styled.input`
color: ${({ theme }) => theme.colors.white};
height: 25px;
`;

// Thumnail.jsx
export const ThumnailContainer = styled.div`
width: 500px;
height: 300px;
border: 2px solid white;
`;