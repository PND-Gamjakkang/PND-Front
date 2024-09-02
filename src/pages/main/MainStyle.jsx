import styled from "styled-components";

export const MainLayout = styled.div`
width: 100%;
height: 100vh;
background: #5B59FC;
position:relative;
overflow: hidden;
`;

export const MainFirstPage = styled.div`
height: 100vh;
`;

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;

export const MainSecondPage = styled.div`
height: 100vh;
background: linear-gradient(270deg, #36CDFF 0%, #B7B6FF 100%);
`;

export const MainThirdPage = styled.div`
height: 100vh;
background: white;
`;

export const MainHeaderText = styled.div`
position:absolute;
top: 24vh;
left: 25vw;
color: ${({ theme }) => theme.colors.white};
font-family: Inter;
font-size: 2.4rem;
font-style: normal;
font-weight: 600;
line-height: 64px; /* 160% */
`;

export const MainSubHeaderText = styled.div`
position:absolute;
top: 43vh;
left: 25vw;
color: ${({ theme }) => theme.colors.white};
text-align: center;
font-family: Inter;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 64px; /* 320% */
`;

export const MainDecoIconImg1 = styled.img`
position:absolute;
top:5vh;
right: 15vw;
width: 25vw;
`;

export const MainDecoIconImg2 = styled.img`
position:absolute;
top:37vh;
right: 18vw;
width: 25vw;
`;


export const MainLoginButton = styled.button`
width: 10.42vw;
height: 5.56vh;
flex-shrink: 0;
border-radius: 10px;
background: #36CDFF;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 51px */
position:absolute;
top: 
left: 25vw;
color: ${({ theme }) => theme.colors.white};
margin-top: 1.5vw;
 &:hover {

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
  width: 33%; /* 이미지를 매우 작게 줄이기 */
  height: auto; /* 가로 세로 비율을 유지하며 크기 조정 */
`;

export const LinkToTeamPage = styled.div`
display: inline-block; /* 글자에 맞게 선이 그어지도록 */
flex-shrink: 0;
color: ${({ theme }) => theme.colors.white};
margin-top: 5vw;
border-bottom: 2px solid ${({ theme }) => theme.colors.white};
`;