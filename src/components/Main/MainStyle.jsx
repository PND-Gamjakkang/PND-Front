import styled from "styled-components";

export const MainFeatureCardContainer = styled.div`
width: 31.6%;
height:100%;
border-radius: 15px;
box-sizing: border-box;
overflow: hidden; /* 컨테이너를 넘는 요소를 숨김 */
background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
`;

export const FeatureCardHeader = styled.div`
  width: 20vw;
  height: 8vh;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
`;

export const FeatureCardContentBox = styled.div`
width: 100%;
height:100%;
padding: 1.5vw;
`;

export const FeatureDescription = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5vh;
  line-height: 1.5; /* 행간을 1.5배로 설정 */
`;

export const FeatureDescriptioTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5vh;
  font-weight: bold;
  color: #5B59FC;
`;


export const CardButton = styled.button`
font-weight: bold;
padding: 0 20px;
height: 45px;
flex-shrink: 0;
color: white;
border-radius: 10px;
background: #5B59FC;
display: flex;
align-items: center;
justify-content: center;
gap: 0.8vw;
margin-bottom: 6vh;
`;

export const ButtonIcon = styled.img`

`;

export const FeatureImg = styled.img`

  width: 100%; /* 컨테이너의 너비에 맞춤 */
  max-height: 30vh; /* 최대 높이를 설정하여 이미지가 컨테이너를 넘지 않도록 */
  object-fit: contain; /* 이미지가 왜곡되지 않도록 */
`;