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
width: 91.5%;
height: 78%;
border-radius: 20px;
background: #F8F8FF;
margin: 0 1.5vw;
padding: 20px;

`;