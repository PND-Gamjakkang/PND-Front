import styled from "styled-components";

export const DiagramTypeLayout = styled.div`
width: 33%;
border-radius: 20px;
border: 1px solid #D9D9FF;
background: #FFF;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 0.5vw;
`;

export const DiagramTypeIconBox = styled.img`

`;

export const DiagramTypeNameBox = styled.div`
color: #5D5D5D;
font-size: 1vw;
font-weight: 600;
line-height: 111%; /* 22.2px */
/* 공통 스타일 */
text-align: center;
font-family: Inter;
font-style: normal;
margin: 4% 0 5% 0;
`;

export const DiagramTypeDescriptionBox = styled.div`
color: #474747;
font-size: 0.7vw;
font-weight: 500;
line-height: 126%; /* 17.64px */
margin-bottom: 5%;

`;

export const DiagramTypeImageBox = styled.img`
width: 70%;
height: 60%;

`;