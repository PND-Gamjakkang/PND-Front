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

// UserRepo.jsx ----------------------------------------------------------
export const UserRepoContainer = styled.div`
width: 100%;
height: 130px; 
border: 1px solid ${props => props.isSelected ? 'blue' : '#D9D9FF'};
color: black;
margin-top: 3px;
display: flex;
flex-direction: column;
padding: 10px;
gap: 3px;
cursor: pointer;
background-color: white;
position:relative;
`;
export const UserImgAndName = styled.div`
display: flex;
gap: 0.5vw;
align-items: center;
`;

export const UserImg = styled.img`
width: 25px;
height: 25px;
border: 2px solid white;
border-radius: 100px;

`;

export const UserName = styled.div`
font-size: 13px;
`;

export const RepoName = styled.div`
font-weight: 700;

`;

export const RepoDescription = styled.div`
  font-size: 13px;
  line-height: 1.5; /* 줄 간격을 설정 */
  height: 3em; /* 두 줄 높이를 고정 (1.5 * 2 = 3) */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 두 줄까지만 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
`;

export const RepoDetails = styled.div`
display: flex;
gap: 10px;
width; 100%;

`;

export const RepoState = styled.div`
width: 13%;
color: black;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 25.314px; /* 180.814% */
margin-left: 25%;

`;


export const RepoInfos = styled.div`

display:flex;
gap: 5px;
align-items: center;

`;

export const StarImg = styled.img`
width:20px;
height:20px;
`;
export const OpenIssueImage = styled.img`
width:20px;
height:20px;
`;
export const WatcherImage = styled.img`
width:20px;
height:20px;
`;
export const StarCount = styled.div`
font-size: 14px;
margin-top:5px;
`;

export const langaugeColor = styled.div`
width: 10px;
height: 10px;
border-radius: 5px;
background-color:orange;
margin-top: 5px;
`;
export const language = styled.div`
font-size: 14px;
margin-top: 5px;
`;

export const ForkImg = styled.img`
width: 25px;
height: 25px;
`;

export const ForksCount = styled.div`
font-size: 14px;
margin-top: 5px;
`;

export const RepoOpenIssues = styled.div`
font-size: 14px;
margin-top: 5px;
`;

export const RepoWatchers = styled.div`
font-size: 14px;
margin-top: 5px;
`;
export const  RepoWatchers2 = styled.div`
background-color: lightblue;
color: white;
width: 70px;
padding: 5px;
`;

export const RepoCreatedAt = styled.div`
font-size: 14px;
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