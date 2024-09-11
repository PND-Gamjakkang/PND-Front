import styled from "styled-components";


export const ModalTitle = styled.div`
color: black;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 133.333% */
z-index: 1;
margin: 1.2vw 3vw 0.5vw;
`;

export const ModalCloseBtn = styled.img`
  position: absolute;
  top: 30px; 
  right: 25px; /* 오른쪽 위에 위치 시켜놓기 위함 */
  z-index: 2;
`;

export const ReposContainer = styled.div`
  width: 93%;
  height: 80%;
  border-radius: 20px;
  background: #F8F8FF;
  margin: 0 1.5vw;
  padding: 20px;
  display: flex; /* Flexbox를 적용 */
  flex-direction: column;
  align-items: stretch; /* 자식 요소들이 부모의 너비를 채우도록 설정 */
  gap: 1.5vh;

`;

// 레포지토리 기본 정보 컴포넌트
export const InputRepoInfoContainer = styled.div`
width:100%;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
gap: 2vh;

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
height: 50px;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
`;

export const InputThumnail = styled.div`
width:100%;
height: 18vh;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
  img {
    width: 100%;  /* 부모 요소의 너비에 맞게 이미지 크기 조정 */
    height: 100%; /* 부모 요소의 높이에 맞게 이미지 크기 조정 */
    object-fit: contain;  /* 이미지가 왜곡되지 않도록 비율을 유지하면서 크기 조정 */
    border-radius: 5px; /* 부모 요소와 동일한 테두리 반경 적용 */
  }
`;

export const InputDate = styled.div`
width:100%;
height: 22vh;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
backdrop-filter: blur(2px);
//overflow: hidden;  /* 추가: 자식 요소가 부모의 크기를 초과하지 않도록 설정 */
display: flex;
justify-content: center;
align-items: center;
  //overflow: visible; /* 오버플로우를 허용하여 자식 요소가 잘리지 않도록 설정 */
  min-height: 100%; /* 필요시 최소 높이 설정 */
  position: relative; /* 부모 요소에 상대적인 위치를 설정 */
`;

// 생성하기 버튼
export const CreateButtonBox = styled.div`
width: 100%;
height: 7vh;
display:flex;
align-items: center;
justify-content: center;
`;

export const CreateButton = styled.button`
width: 50%;
height: 6vh;
display:flex;
justify-content: center;
align-items: center;
padding: 0 15%;
background: #5B59FC;
color: white;
border-radius: 5px;
`;