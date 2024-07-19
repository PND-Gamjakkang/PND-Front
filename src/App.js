<<<<<<< HEAD
import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './components/header/Header.jsx';

// css 초기설정
const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  position: relative;

  color:white;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

>>>>>>> 4d2f362 (Initialize project using Create React App)
export default App;
