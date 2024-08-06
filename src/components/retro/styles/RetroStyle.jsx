import styled from "styled-components";

export const SearchRepo = styled.div`
position: relative;
display:flex;
flex-direction:column;
align-items: center;
margin-left: 5vw;
`;
export const SearchContainer = styled.div`
position:absolte;
width: 100%;
height: 40px;
display:flex;
align-items: center;
border-bottom: 2px solid ${({ theme }) => theme.colors.white};
margin-top: 3vw;
padding: 20px 0 20px 20px;


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
width: 25px;
height: 25px;
`;

export const InputBox = styled.input`
color: ${({ theme }) => theme.colors.white};
height: 25px;
margin: 0px 20px;
`;
// MyCalender.jsx
export const MyCalenderContainer = styled.div`

`;

// Thumnail.jsx
export const ThumnailContainer = styled.div`

`;
export const ThumnailBox = styled.div`
width: 500px;
height: 300px;
border: 2px solid white;

`;

// 타이틀
export const OptionParagraph = styled.div`
margin: 3vh 0vh 1.5vh;
`;

// UserRepo.jsx
export const UserRepoContainer = styled.div`
width: 18.5vw;
border-left: 2px solid white;
color:white;
margin-top: 1vw;
display: flex;
flex-direction: column;
padding: 0.5vw;
gap: 1vw;
`;

export const UserImgAndName = styled.div`
display: flex;
gap: 0.5vw;
align-items: center;
`;

export const UserImg = styled.img`
width: 2.5vw;
height: 4vh;
border: 2px solid white;
border-radius: 1.5vw;

`;

export const UserName = styled.div`

`;

export const RepoName = styled.div`
font-size: 1.2vw;
`;

export const RepoDescription = styled.div`

`;

export const RepoStarsAndLanguage = styled.div`
display:flex;
gap: 1vw;
`;
export const RepoStars = styled.div`

`;
export const RepoLanguage = styled.div`

`;


// SelectPart.jsx
export const SelectPartContainer = styled.div`

`;

export const PartButtons = styled.div`
display: flex;
gap: 20px;
`;

export const PartButton = styled.button`
flex-shrink: 0;
padding: 0px 8px;
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.black};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 175%; /* 28px */
border-radius: 10px;

`;