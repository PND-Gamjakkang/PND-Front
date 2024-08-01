import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReadMeHeader from '../../components/readmeComponents/ReadMeHeader';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';

const ReadmeContainer = styled.div`
  background-color: rgba(0,0,0,0.8);
  max-width: 80%;
  max-height: 1700px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Divider = styled.div`
  width: 2px;
  background-color: #ccc;
  margin: 0 20px;
`;

const MdAreaHeader = styled.div`
  display: flex;
  text-align : center;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
margin-bottom: 0;
color: black; /* 글자 색상 명시적으로 설정 */
`;

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
            <div></div>
            <Title>Markdown Result</Title>
          </MdAreaHeader>
          <MdArea content={content} />
        </Container>
      </Content>
    </ReadmeContainer>
  );
}

export default Readme;
