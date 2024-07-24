<<<<<<< HEAD
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
=======
import "./App.css"
import { useState } from "react";
import { useRef } from "react";
import Header from "./layout_test/Header";
import InputAreaHeader from "./layout_test/InputAreaHeader";
import InputArea from "./layout_test/Texts/InputArea";
import MdArea from "./layout_test/Texts/MdArea";


function App(){
  //inputArea Ref
  const inputRef = useRef(null); 

  const [content, setContent] = useState("");
  const [selectedText, setSelectedText] = useState(""); 

  const handleInputChange = (newContent) => {
    setContent(newContent);
  };
  
  const handleSelectionChange = (newSelection) => {
    setSelectedText(newSelection);
  };

  const applyMarkdown = (markdownSyntax) => {
    if (!selectedText) return;

    const markdownText = `${markdownSyntax}${selectedText}${markdownSyntax}`;
    const newContent = content.replace(selectedText, markdownText);
    setContent(newContent);
    if(inputRef.current){
      inputRef.current.innerText = newContent;
    }
    setSelectedText("");
  };
>>>>>>> 983af69 (:memo: README에디터 초안)

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="inputContainer">
        <InputAreaHeader onBold={() => applyMarkdown('**')} />
          <InputArea onChange={handleInputChange} onSelectionChange={handleSelectionChange} content={content}/>
        </div>
        <div className="divider"></div>
        <div className="mdContainer">
          <div className="mdAreaHeader">
            <div></div>
            <h2>Markdown Result</h2>
          </div>
          <MdArea content={content}/>
        </div>
      </div>
    </div>
  );

<<<<<<< HEAD
>>>>>>> 4d2f362 (Initialize project using Create React App)
export default App;
=======

};

export default App;
>>>>>>> 983af69 (:memo: README에디터 초안)
