import styled from 'styled-components';

export const FooterLayout = styled.footer`
    width: 100vw;
     height: clamp(30px, 7vh, 70px); /* 최소 50px, 최대 100px, 기본 10vh */
    background-color: blue;  /* 원하는 배경색으로 설정 */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    bottom: 0;
`;