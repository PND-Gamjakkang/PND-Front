import styled from "styled-components";
import LoginButtonImg from '../../assets/images/login-button.png';

export const LoginContainer = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
align-items: center;
padding: 0.5vw;
`;

export const LoginModal = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 2vw;

`;

// '로그인하시겠습니까?' 텍스트
export const LoginMessage = styled.div`
color: black;
text-align: center;
font-family: Inter;
font-size: 1.2rem;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 133.333% */
margin-top: 8vh;
margin-bottom: 3.5vh;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  height: 8.5vh; // 로고 이미지를 원본 비율로 유지
`;

export const LoginButton = styled.button`
  background-image: url(${LoginButtonImg});
  background-size: contain;  // 이미지가 버튼 크기에 맞게 조정되도록
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;  // 버튼의 너비를 부모 요소에 맞춤
  height: 15vh; // 버튼의 세로 길이를 15%로 설정
  border: none;  // 버튼 테두리를 없앰
  cursor: pointer;  // 마우스를 올렸을 때 포인터로 변경
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; // 패딩 및 보더를 포함하여 버튼 크기 계산
  object-fit: contain;
`;

export const LoginBottomText = styled.div`
text-align:center;
`;
