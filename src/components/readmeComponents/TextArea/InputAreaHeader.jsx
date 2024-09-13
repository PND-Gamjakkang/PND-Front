import React, { useState } from 'react';
import Button from '../Button';
import { Toolbar, InputAreaHeaderContainer, Toolbar2, FileDownloadButton,AIMakeButton } from './InputAreaHeaderStyle';
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
const FileUploadButton = styled(Button)``;
const RedoButton = styled(Button)``;
const UndoButton = styled(Button)``;
const InputAreaHeader = ({ onButtonClick, onBadgeAdd, onImageAdd, content, selectedProjectId, userToken }) => {
  const [isBadgeModalOpen, setBadgeModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleButtonClick = (type) => {
    console.log(type);
    if (type === 'Badge') {
      setBadgeModalOpen(true);
    } else if (type === 'Image') {
      setUploadModalOpen(true);
    } else if (type === 'Download') {
      setDownloadModalOpen(true);
    } else if (onButtonClick) {
      onButtonClick(type);
    }
  };

  const closeBadgeModal = () => setBadgeModalOpen(false);
  const closeUploadModal = () => setUploadModalOpen(false);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  return (
    <InputAreaHeaderContainer>
      <Toolbar2>
        <TopLangsButton onClick={() => handleButtonClick('Lan')}>Top Languages</TopLangsButton>
        <BadgeButton onClick={() => handleButtonClick('Badge')}>Badge</BadgeButton>
        <FileUploadButton onClick={() => handleButtonClick('Image')}>Image</FileUploadButton>
      </Toolbar2>
      <Toolbar>
        <UndoButton onClick={() => handleButtonClick('undo')}>↺</UndoButton>
        <RedoButton onClick={() => handleButtonClick('redo')}>↻</RedoButton>
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
        <AIMakeButton onClick={()=> handleButtonClick('AI')}>AI 자동생성</AIMakeButton>
        <FileDownloadButton onClick={() => handleButtonClick('Download')}>저장하기</FileDownloadButton>
      </Toolbar>

      {isBadgeModalOpen && (
        <Badge
          onBadgeAdd={(markdown) => {
            onBadgeAdd(markdown);
            closeBadgeModal();
          }}
          closeModal={closeBadgeModal}
        />
      )}

      {isUploadModalOpen && (
        <FileUpload
          onImageAdd={(markdown) => {
            onImageAdd(markdown);
            closeUploadModal();
          }}
          closeModal={closeUploadModal}
        />
      )}

      {isDownloadModalOpen && (
        <FileDownload
          page={'readme'}
          content={content}
          closeModal={closeDownloadModal}
          selectedProjectId={selectedProjectId}  
          userToken={userToken}
        />
      )}
    </InputAreaHeaderContainer>
  );
};

export default InputAreaHeader;
