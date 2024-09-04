import styled from "styled-components";


export const ModalTitle = styled.div`
color: black;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 133.333% */
z-index: 1;
margin: 1.5vw 3vw;
`;

export const ModalCloseBtn = styled.img`
  position: absolute;
  top: 30px; 
  right: 25px; /* 오른쪽 위에 위치 시켜놓기 위함 */
  z-index: 2;
`;

export const ReposContainer = styled.div`
  width: 93%;
  height: 75%;
  border-radius: 20px;
  background: #F8F8FF;
  margin: 0 1.5vw;
  padding: 20px;
  display: flex; /* Flexbox를 적용 */
  flex-direction: column;
  align-items: stretch; /* 자식 요소들이 부모의 너비를 채우도록 설정 */

`;

// 레포지토리 기본 정보 컴포넌트
export const InputRepoInfoContainer = styled.div`
width:100%;
height: 100%;
display:flex;
flex-direction: column;

align-items: center;
gap: 5vh;
`;
export const SettingRepoInfo = styled.div`
width: 70%;
display:flex;
align-items: center;
gap: 2%;

`;

export const SettingTitleText = styled.div`
width: 30%;
color: #000;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 200% */

`;

export const InputTitle = styled.input`
width:100%;
height: 8vh;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
`;

export const InputThumnail = styled.div`
width:100%;
height: 16vh;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

export const InputDate = styled.div`
width:100%;
height: 12vh;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
`;

export const CreateButton = styled.button`
height: 5vh;
display:flex;
justify-content: center;
align-items: center;
padding: 0 20%;
background: #5B59FC;
color: white;
`;