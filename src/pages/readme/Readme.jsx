import React from 'react';
import * as S from './ReadmeStyle.jsx';
import { useState, useRef } from 'react';

// component
import InputAreaHeader from '../../components/readme/InputAreaHeader.jsx';
import InputArea from '../../components/readme/InputArea.jsx';
import MdArea from '../../components/readme/MdArea.jsx';

function ReadMe() {
    const inputRef = useRef(null);

    const [content, setContent] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [clickedButton, setClickedButton] = useState(false);
  
    const handleInputChange = (newContent) => {
      console.log('Input changed:', newContent);
      setContent(newContent);
    };
  
    const handleSelectionChange = (newSelection) => {
      console.log('Selection changed:', newSelection);
      setSelectedText(newSelection);
    };
  
    const handleButtonClick = (buttonId) => {
      setClickedButton(buttonId);
    };
  
    const handleMarkdownApplied = () => {
      setClickedButton("");
    };
    return (
        <S.ReadmeLayout>
            <S.ReadmeContent>
                <S.InputContainer>
                    <InputAreaHeader onButtonClick={handleButtonClick}/>
                    <InputArea
                        onChange={handleInputChange}
                        onSelectionChange={handleSelectionChange}
                        content={content}
                        inputRef={inputRef}
                        clickedButton={clickedButton}
                        onMarkdownApplied={handleMarkdownApplied}
                    />
                </S.InputContainer>
                <S.MdContainer>
                    <S.MdAreaHeader>Markdown Result</S.MdAreaHeader>
                    <MdArea content={content}/>
                    
                </S.MdContainer>
            </S.ReadmeContent>
        </S.ReadmeLayout>
    )
}

export default ReadMe;