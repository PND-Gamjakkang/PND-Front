import styled from 'styled-components';

export const FooterLayout = styled.footer`
    width: 100vw;
    height: clamp(30px, 7vh, 70px); /* 최소 50px, 최대 100px, 기본 10vh */
    background: #F8F8FF;
    display: flex;

    align-items: center;
    color: white;
    position: absolute;
    bottom: 0;
    margin-top: auto;
`;

export const FooterContent = styled.div`
margin-left: 13.2vw;
color: #000;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 175%; /* 28px */
`;

export const FooterContentSpan = styled.span`
text-decoration-line: underline;
`;