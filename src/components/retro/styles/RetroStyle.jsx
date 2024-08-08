import styled, { keyframes } from "styled-components";

// 애니메이션
const SmoothAppear = keyframes`
from {
    opacity: 0;
    transform: translateY(-5%);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;
const slide = keyframes`
from {
    transform: translateX(-100%);
}
to {
    transform: translateX(0%);
}
`;

// SearchRepo.jsx
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
animation: ${SmoothAppear} 1s;

`;

// Thumnail.jsx
export const ThumnailContainer = styled.div`
animation: ${SmoothAppear} 1s;

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
border: 4px solid ${props => props.isSelected ? 'yellow' : 'black'};
color:black;
margin-top: 1vw;
display: flex;
flex-direction: column;
padding: 0.5vw;
gap: 1vw;
cursor: pointer;
background-color: white;
`;

export const UserImgAndName = styled.div`
display: flex;
gap: 0.5vw;
align-items: center;
`;

export const UserImg = styled.img`
width: 2.5vw;
height: 4.2vh;
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

export const RepoStarsAndLanguageAndFork = styled.div`
display:flex;
gap: 1vw;
`;

export const RepoStars = styled.div`
display:flex;
gap: 5px;
align-items: center;
justify-content: center;

`;
export const StarImg = styled.img`
width:20px;
height:20px;
`;
export const StarCount = styled.div`
margin-top:5px;
`;

export const RepoLanguage = styled.div`
display:flex;
gap: 5px;
`;
export const langaugeColor = styled.div`
width: 20px;
height: 20px;
border-radius: 10px;
background-color:lightgray;
`;
export const language = styled.div`
margin-top: 5px;
`;

export const RepoForks = styled.div`
display:flex;
gap: 5px;
`;

export const ForkImg = styled.img`
width: 25px;
height: 25px;
`;

export const ForksCount = styled.div`
margin-top: 5px;
`;

export const RepoOpenIssues = styled.div`
background-color:green;
color: white;
width: 60px;
padding: 5px;

`;

export const  RepoWatchers = styled.div`
background-color: lightblue;
color: white;
width: 70px;
padding: 5px;
`;

export const RepoCreatedAt = styled.div`
margin-top: 5px;
`;

// SelectPart.jsx
export const SelectPartContainer = styled.div`
animation: ${SmoothAppear} 1s;

`;

export const PartButtons = styled.div`
display: flex;
gap: 20px;
`;

export const PartButton = styled.button`
flex-shrink: 0;
padding: 0px 8px;
background-color: ${props => props.isSelected ? 'yellow' : 'white'};
color: ${({ theme }) => theme.colors.black};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 175%; /* 28px */
border-radius: 10px;

`;

export const CreateButton = styled.button`
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 175%; /* 28px */
border-radius: 10px;
flex-shrink: 0;
padding: 0px 8px;
background-color: white;
color: black;
width: 100px;
height: 50px;
margin-top: 5vh;
margin-left: 80%;

`;