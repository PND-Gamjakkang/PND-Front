import React, { useState, useRef } from 'react';
import Header from './layout_test/Header';
import InputAreaHeader from './layout_test/InputAreaHeader';
import MdArea from './layout_test/Texts/MdArea'
import InputArea from './layout_test/Texts/InputArea'
import './App.css'
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

};
export default App;

