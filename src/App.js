import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import { Mobile, Pc } from './Responsive.jsx';

// css 초기설정
const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  position: relative;
  color:white;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
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
        <Header />
        <Content>
          <Outlet />
        </Content>
        {/* {!hideFooter && <Footer />} */}
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
