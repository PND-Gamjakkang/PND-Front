import React,{useState} from 'react';
import { BadgePreview, SubmitButton, Input, Label, InputGroup, CreateBadgeContainer } from './CreateBadgeStyle';

const CreateBadge = ({  onBadgeCreate, closeModal }) => {
  const [label, setLabel] = useState('Label');
  const [message, setMessage] = useState('Message');
  const [color, setColor] = useState('Color');

  const generateBadgeUrl = () => {
    return `https://img.shields.io/badge/${label}-${message}-${color}`;
  };

  const handleCreateBadge = () => {
    console.log("submit clicked");
    const badgeUrl = generateBadgeUrl();
    const markdown = `![${label}](${badgeUrl})`;
    onBadgeCreate(markdown);
    closeModal();
  };


  return (
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
      <SubmitButton onClick={handleCreateBadge}>Submit</SubmitButton> 
    </CreateBadgeContainer>
  );
};

export default CreateBadge;
