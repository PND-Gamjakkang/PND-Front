import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// 전체 레이아웃 크기 고정
const BackGroundColor = styled.div`
  width: 100vw; /* 전체 너비 고정 */
  height: 100vh; /* 전체 높이를 뷰포트 높이로 설정 */
  background-color: #F8F8FF;
  position: relative;
  display: flex;
  flex-direction: column;
  //overflow: hidden; /* 스크롤 방지 */
`;

// 콘텐츠 영역 설정
const Content = styled.div`
  flex-grow: 1; /* 헤더와 푸터를 제외한 모든 공간을 차지 */
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 컨텐츠를 수직으로도 중앙에 배치 */
`;

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // 인트로, 로그인, 회원가입 시 푸터 숨김
  // const hideFooter =
  //   currentPath === '/Signin' ||
  //   currentPath === '/SignUp' ||
  //   currentPath === '/';

  return (
    <BackGroundColor>
      <Header /> {/* 이미 내부에서 높이를 설정했으므로 외부에서 설정할 필요 없음 */}
      <Content>
        <Outlet />
      </Content>
      {/* <Footer /> 푸터 높이 설정을 스타일 파일에서 적용 */}
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;


// import { styled, ThemeProvider } from 'styled-components';
// import { GlobalStyle } from './style/globalStyle';
// import { theme } from './style/theme.js';
// import { Outlet, useLocation } from 'react-router-dom';

// import Header from './components/header/Header.jsx';
// import { Mobile, Pc } from './Responsive.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import { useState } from 'react';

// // const [width, setWidth] = useState(window.innerWidth);
// // const [height, setHeight] = useState(window.innerHeight);

// const width = window.innerWidth;
// const height = window.innerHeight;
// // css 초기설정
// const BackGroundColor = styled.div`
//   width: ${width};
//   min-height: ${height};
//   background-color: ${({ theme }) => theme.colors.purple};
//   position: relative;
  
// `;

// const Content = styled.div`
//   flex-grow: 1;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

// `;

// const Layout = () => {
//   const location = useLocation();

//   const currentPath = location.pathname;

//   // 인트로, 로그인, 회원가입 시 푸터 숨김
//   // const hideFooter =
//   //   currentPath === '/Signin' ||
//   //   currentPath === '/SignUp' ||
//   //   currentPath === '/';

//   return (
//     <BackGroundColor>
//         <Header />
//         <Content>
//           <Outlet />
//         </Content>
//         {/* {!hideFooter && <Footer />} */}
//         <Footer />
//     </BackGroundColor>
//   );
  
// };

// function App() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <Layout />
//       </ThemeProvider>
//     </>
//   );
// }
// export default App;
