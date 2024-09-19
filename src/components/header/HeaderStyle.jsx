import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100vw;
  height: 50px;
  //height: clamp(50px, 7vh, 100px); /* 최소 50px, 최대 100px, 기본 10vh */
  // height: 7%;
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
  margin-right: 10vw;
`;

export const NavLink = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  position: relative;

  &.active {
    font-weight: bold; /* 텍스트 굵기 설정 */
    
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px; /* 밑줄 두께 */
      background-color: currentColor; /* 현재 텍스트 색상과 동일 */
      position: absolute;
      bottom: -5px; /* 텍스트 바텀에서 5픽셀 아래 */
      left: 0;
    }
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
