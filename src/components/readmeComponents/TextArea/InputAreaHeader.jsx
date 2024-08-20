import React, { useState } from 'react';
import Button from '../Button';
import { Toolbar, InputAreaHeaderContainer } from './InputAreaHeaderStyle';
import styled from 'styled-components';
import Badge from '../Modals/Badge';
import FileUpload from '../Modals/FileUpload';
import FileDownload from '../Modals/FileDownload';

const H1Button = styled(Button)``;
const H2Button = styled(Button)``;
const H3Button = styled(Button)``;
const H4Button = styled(Button)``;
const H5Button = styled(Button)``;
const H6Button = styled(Button)``;
const BoldButton = styled(Button)``;
const ItalicButton = styled(Button)``;
const ThroughButton = styled(Button)``;
const CodeButton = styled(Button)``;
const QuoteButton = styled(Button)``;
const TopLangsButton = styled(Button)``;
const BadgeButton = styled(Button)``;

const InputAreaHeader = ({ onButtonClick, onBadgeAdd, onImageAdd, content }) => {
  const [isBadgeModalOpen, setBadgeModalOpen] = useState(false);

  const handleButtonClick = (type) => {
    if (type === 'Badge') {
      if(!isBadgeModalOpen){
        setBadgeModalOpen(true);
      }
      onButtonClick(type);
    } else if (onButtonClick) {
      onButtonClick(type);
    }
  };


  const openBadgeModal = () => {
    setBadgeModalOpen(true);
  };

  const closeBadgeModal = () => {
    setBadgeModalOpen(false);
  };

  return (
    <InputAreaHeaderContainer>
      <Toolbar>
        <H1Button onClick={() => handleButtonClick('h1')}>h1</H1Button>
        <H2Button onClick={() => handleButtonClick('h2')}>h2</H2Button>
        <H3Button onClick={() => handleButtonClick('h3')}>h3</H3Button>
        <H4Button onClick={() => handleButtonClick('h4')}>h4</H4Button>
        <H5Button onClick={() => handleButtonClick('h5')}>h5</H5Button>
        <H6Button onClick={() => handleButtonClick('h6')}>h6</H6Button>
        <BoldButton onClick={() => handleButtonClick('bold')}>Bold</BoldButton>
        <ItalicButton onClick={() => handleButtonClick('italic')}>Italic</ItalicButton>
        <ThroughButton onClick={() => handleButtonClick('throughLine')}>Through</ThroughButton>
        <CodeButton onClick={() => handleButtonClick('code')}>Code</CodeButton>
        <QuoteButton onClick={() => handleButtonClick('quote')}>Quote</QuoteButton>
        <TopLangsButton onClick={() => handleButtonClick('Lan')}>Top Langs</TopLangsButton>
        <BadgeButton onClick={()=>handleButtonClick('Badge')}>Badge</BadgeButton>
        <FileUpload onImageAdd={onImageAdd} />
        <FileDownload content={content} />
      </Toolbar>

    {/* {모달이 닫힌 경우에만 Badge Modal 생성} */}
      {isBadgeModalOpen && (
        <Badge
          onBadgeAdd={(markdown) => {
            onBadgeAdd(markdown);
            closeBadgeModal();
          }}
          closeModal={closeBadgeModal}
        />
      )}

    </InputAreaHeaderContainer>
  );
};

export default InputAreaHeader;
