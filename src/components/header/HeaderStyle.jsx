import styled from "styled-components";

export const HeaderLayout = styled.div`
width: 100%;
height: 10vh;
display:flex;
align-items:center;
justify-content: center; /* 수평 중앙 정렬 */

`;

export const NavLinks = styled.nav`
width: 80%;
display:flex;
justify-content: space-between; /* 수평 좌우 끝에 정렬 */

`;

export const NavLink = styled.div`
    text-decoration: none;
    
    &.active {
        text-decoration: underline;
        font-weight: bold;
    }
`;