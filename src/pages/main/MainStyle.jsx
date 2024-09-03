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

export const NextPageBtn = styled.img`
cursor: pointer;
position:absolute;
bottom: 10vh;
left: 45vw;
`;

export const MainSecondPage = styled.div`
height: 100vh;
background: linear-gradient(270deg, #36CDFF 0%, #B7B6FF 100%);
display:flex;
justify-content: center;
align-items: center;
`;

export const MainFeatures = styled.div`
width: 85%;
height:70%;
display: flex;
gap: 2.25vw;

`;

export const MainHeaderAndLoginBtn = styled.div`
position:absolute;
top: 24vh;
left: 25vw;
`;

export const MainHeaderText = styled.div`
width: 30vw;
color: ${({ theme }) => theme.colors.white};
font-family: Inter;
font-size: 2.4rem;
font-style: normal;
font-weight: 600;
line-height: 64px; /* 160% */
`;

export const MainSubHeaderText = styled.div`
width: 25vw;

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
left: 61.46vw;
width: 25vw;
`;

export const MainDecoIconImg2 = styled.img`
position:absolute;
top:37vh;
right: 18vw;
width: 25vw;
`;

// 로그인 버튼
export const MainLoginButton = styled.button`
padding: 0 2.5vw;
height: 6vh;
flex-shrink: 0;
border-radius: 10px;
background: #36CDFF;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 51px */

color: ${({ theme }) => theme.colors.white};
margin-top: 1.5vw;
 &:hover {

  }
  
  &:active {
    transform: scale(0.98); /* 클릭시 살짝 눌리는 느낌 */
    background-color: ${({ theme }) => theme.colors.gray};
}`;

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

// 메인 로고 이미지
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

// 마지막 페이지
export const MainThirdPage = styled.div`
height: 100vh;
background: white;
display:flex;
justify-content: center;
align-items:center;

`;

export const ThirdPageContentContainer = styled.div`
width: 15.93vw;
display:flex;
flex-direction: column;
gap: 3vh;
`;

export const ThirdPageText = styled.img`
width: 100%;

`;

export const StartBtn = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 20px;
background: #5B59FC;
height: 80px;
color: white;
gap: 8px;
`;