import React, { useState, useRef } from 'react';
import ReadMeHeader from '../../components/readmeComponents/ReadMeHeader';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';
import {Title,Divider,MdAreaHeader,Container,Content,ReadmeContainer} from './ReadmeStyle';

function Readme() {
  const inputRef = useRef(null);
  const [content, setContent] = useState("");
  const [clickedButton, setClickedButton] = useState("");

  const handleInputChange = (newContent) => {
    setContent(newContent);
  };

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleMarkdownApplied = () => {
    setClickedButton("");
  };

  return (
    <ReadmeContainer>
      <ReadMeHeader />
      <Content>
        <Container>
          <InputAreaHeader onButtonClick={handleButtonClick} />
          <InputArea
            onChange={handleInputChange}
            content={content}
            inputRef={inputRef}
            clickedButton={clickedButton}
            onMarkdownApplied={handleMarkdownApplied}
          />
        </Container>
        <Divider />
        <Container>
          <MdAreaHeader>
            <Title>✔ Markdown Result</Title>
          </MdAreaHeader>
          <MdArea content={content} />
        </Container>
      </Content>
    </ReadmeContainer>
  );
}

export default Readme;
