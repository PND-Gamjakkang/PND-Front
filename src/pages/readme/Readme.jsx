import React, { useState, useRef } from 'react';
import ReadMeHeader from '../../components/readmeComponents/ReadMeHeader';
import InputAreaHeader from '../../components/readmeComponents/TextArea/InputAreaHeader';
import MdArea from '../../components/readmeComponents/TextArea/MdArea';
import InputArea from '../../components/readmeComponents/TextArea/InputArea';
import { Title, Divider, MdAreaHeader, Container, Content, ReadmeContainer } from './ReadmeStyle';
import {Helmet} from 'react-helmet';

function Readme() {
  const inputRef = useRef(null);
  const [content, setContent] = useState("");
  const [clickedButton, setClickedButton] = useState("");
  const [badgeURL, setBadgeURL] = useState('');
  const [imageURL, setimageURL] = useState('');
  const handleInputChange = (newContent) => {
    setContent(newContent);
  };

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleMarkdownApplied = () => {
    setClickedButton("");
    setBadgeURL("");
    setimageURL("");
  };

  const handleBadgeAdd = (badgeURL) => {
    setBadgeURL(badgeURL);
    setClickedButton('Badge');
  };

  const handleImageAdd = (imageURL) => {
    console.log(imageURL);
    setimageURL(imageURL);
    setClickedButton('Image');
  };

  return (
    <ReadmeContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <ReadMeHeader />
      <InputAreaHeader 
        onButtonClick={handleButtonClick}  
        onBadgeAdd={handleBadgeAdd}
        onImageAdd={handleImageAdd}
        content={content}
      />
      <Content>
        <Container>
          <InputArea
            onChange={handleInputChange}
            content={content}
            inputRef={inputRef}
            clickedButton={clickedButton}
            onMarkdownApplied={handleMarkdownApplied}
            badgeURL={badgeURL}
            imgURL={imageURL}
          />
        </Container>
        <Divider/>
        <Container>
          <MdArea content={content} />
        </Container>
      </Content>
    </ReadmeContainer>
  );
}

export default Readme;
