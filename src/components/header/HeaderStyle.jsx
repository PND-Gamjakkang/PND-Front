import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100vw;
  height: clamp(50px, 7vh, 100px); /* 최소 50px, 최대 100px, 기본 10vh */
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 20px;
  background-color: #FFF;
  color: var(--main, #5B59FC);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
`;


export const Logo = styled.img`
  width: 120px;
  height: 35px; 
  margin-left: 10vw;
  margin-right: 12vw;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 4vw; 
  align-items: center;
  margin-right: 20vw;
`;

export const NavLink = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  white-space:nowrap;
    
  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;


// import styled from "styled-components";

// export const HeaderLayout = styled.div`
//   width: 100%;
//   height: 11vh;
//   display: flex;
//   flex-shrink:0;
//   align-items: center;
//   padding: 0 20px;
//   background-color: #FFF;
//   color: var(--main, #5B59FC);
//   font-family: 'Inter', sans-serif;
//   font-size: 16px;
//   font-weight: 500;
//   font-style :normal;
//   line-height:normal;
//   z-index: 100;
// `;

// export const Logo = styled.img`
//   width:142px;
//   height: 46px; 
//   margin-left:15vw;
//   margin-right:13vw;
// `;

// export const NavLinks = styled.nav`
//   display: flex;
//   gap: 4vw; 
//   align-items: center;
// `;

// export const NavLink = styled.div`
//   text-decoration: none;
//   color: inherit;
//   cursor: pointer;
//   white-space:nowrap;
    
//   &.active {
//     text-decoration: underline;
//     font-weight: bold;

//   }
// `;

// export const Gap=styled.div`
//   width:275px;
//   color:black;
//   height:20px;
// `;
