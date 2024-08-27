import React, { useState } from 'react';
import Modal from 'react-modal';
import { BadgePreview, SubmitButton, Input, Label, InputGroup, CreateBadgeContainer,BadgeCreateButton } from './CreateBadgeStyle';

import { 
  ModalCloseButton, 
  ModalContent, 
  BadgePanel, 
  BadgePreviewPanel, 
  sampleBadges, 
  BadgePreviewContainer,
  ModalHeader,
  Title,
  Description,
  BadgeImage
} from './BadgeStyle';
import { Helmet } from 'react-helmet';

const Badge = ({ onBadgeAdd, closeModal }) => {
  const [label, setLabel] = useState('Label');
  const [message, setMessage] = useState('Message');
  const [color, setColor] = useState('Color');

  const generateBadgeUrl = () => {
    return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${encodeURIComponent(color)}`;
  };

  const handleCreateBadge = () => {
    const badgeUrl = generateBadgeUrl();
    const markdown = `![${label}](${badgeUrl})`;
    onBadgeAdd(markdown);
    closeModal();
  };

  const handleSampleClick = (badgeUrl) => {
    const markdown = `![Badge](${badgeUrl})`;
    onBadgeAdd(markdown);
    closeModal();
  };

  return (
<Modal
  isOpen={true}
  onRequestClose={closeModal}
  ariaHideApp={false}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      background: 'white',
      border: 'none',
      borderRadius: '2.04vh', /* 22px out of 1080px */
      padding: '1.85vh', /* 20px out of 1080px */
      position: 'relative',
      width: '41.67vw', /* 800px out of 1920px */
      height: '83.33vh', /* 900px out of 1080px */
      maxWidth: '90%', /* To ensure responsiveness on smaller screens */
      maxHeight: '90%', /* To ensure responsiveness on smaller screens */
      display: 'flex',
      flexDirection: 'column',
    },
  }}
>

      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

      <ModalHeader>
        <Title>CREATE<br></br>BADGE</Title>
        <br></br>
        <Description>사용 언어, 기술 스택 등 원하는 뱃지를 제작할 수 있습니다.</Description>
      </ModalHeader>
      <ModalContent>
        <CreateBadgeContainer>
          <InputGroup>
            <Label>Label</Label>
            <Input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Message</Label>
            <Input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Color</Label>
            <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <BadgePreview>
              <Label>Preview</Label>
              <img src={generateBadgeUrl()} alt="Badge Preview" />
            </BadgePreview>
          </InputGroup>
          <SubmitButton onClick={handleCreateBadge}>이건 안보이는 버튼</SubmitButton>
        </CreateBadgeContainer>
        <BadgePanel>
          <Description>Sample Badges</Description>
          <BadgePreviewContainer>
            <BadgePreviewPanel>
              {sampleBadges.map((badgeUrl, index) => (
                <BadgeImage
                  key={index}
                  src={badgeUrl}
                  alt={`Sample Badge ${index}`}
                  onClick={() => handleSampleClick(badgeUrl)}
                />
              ))}
            </BadgePreviewPanel>
          </BadgePreviewContainer>
        </BadgePanel>
      </ModalContent>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      <BadgeCreateButton onClick={handleCreateBadge}>생성하기</BadgeCreateButton> 
    </Modal>
  );
};

export default Badge;
