import styled from "styled-components";

export const MainLayout = styled.div`
width: 100%;
display:flex;
`;
export const MainLeft = styled.div`
display:flex;
flex-direction: column;
padding: 3vw 5vw 2vw 5vw;
`;

export const MainRight = styled.div`
`;


export const MainTextTop = styled.div`
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 3vw;
font-style: italic;
font-weight: 700;
line-height: 164%; /* 98.4px */
`;

export const MainTextBottom = styled.div` 
font-family: Inter;
font-size: 1.2vw;
line-height: 150%; /* 30px */ 
margin-top : 1.5vw;

`;

export const HighlightedText = styled.div`
font-weight: 700;
font-style: italic;
`;

export const MainButton = styled.button`
width: 30vw;
height: 4.1vw;
flex-shrink: 0;
background-color: ${({ theme }) => theme.colors.white};
color: ${({ theme }) => theme.colors.black};
border-radius: 50px;
font-family: Inter;
font-size: 1.7vw;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 51px */
margin-top: 1.5vw;
 &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.98); /* 클릭시 살짝 눌리는 느낌 */
    background-color: ${({ theme }) => theme.colors.gray};
  }`;

export const MainFeatures = styled.div`
display: flex;
gap: 6.1vw;
margin-top: 1.5vw;
`;

export const FeatureBox = styled.div`

`;

export const FeatureImg = styled.img`
width: 10vw;
`;

export const FeatureText = styled.div`
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 175%; /* 28px */
`;

export const MainRightImg = styled.img`
width: 100%;
height: 47vw;
`;

export const MainLogoImg = styled.img`
  width: 40%; /* 이미지를 매우 작게 줄이기 */
  height: auto; /* 가로 세로 비율을 유지하며 크기 조정 */
`;

export const LinkToTeamPage = styled.div`
display: inline-block; /* 글자에 맞게 선이 그어지도록 */
flex-shrink: 0;
color: ${({ theme }) => theme.colors.white};
margin-top: 5vw;
border-bottom: 2px solid ${({ theme }) => theme.colors.white};
`;