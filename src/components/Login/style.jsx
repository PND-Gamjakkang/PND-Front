import styled from "styled-components";
import LoginButtonImg from '../../assets/images/login-button.png';

export const LoginContainer = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
align-items: center;
background-color: rgba(0, 0, 0, 0.7); // 배경 흐리게
position: absolute; // 회고페이지와 겹쳐지게
`;

export const LoginModal = styled.div`
width: 33%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 2vw;
margin-top: 15vh;
`;

export const LogoImg = styled.img`

`;

export const LoginButton = styled.button`
  background-image: url(${LoginButtonImg});
  background-size: contain; // 이미지의 전체를 버튼 안에 맞추게
  background-position: center; // 이미지를 가운데에 위치시키도록
  background-repeat: no-repeat;
  width: 30vw;
  height: 35%;
`;

