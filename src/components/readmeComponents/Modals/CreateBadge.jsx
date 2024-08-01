import React, { useState } from 'react';

const CreateBadge = ({ onBadgeCreate, closeModal }) => {
  const [label, setLabel] = useState('Label');
  const [message, setMessage] = useState('Message');
  const [color, setColor] = useState('Color');

  const generateBadgeUrl = () => {
    return `https://img.shields.io/badge/${label}-${message}-${color}`;
  };

  const handleCreateBadge = () => {
    const badgeUrl = generateBadgeUrl();
    const markdown = `![${label}](${badgeUrl})`;
    onBadgeCreate(markdown);
    closeModal();
  };

  return (
    <div className="create-badge-container">
      <h3>Create Badge </h3>
      <div className="input-group">
        <label>Label</label>
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Message</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Color</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <div className="badge-preview">
        <h2>Preview</h2>
        <img src={generateBadgeUrl()} alt="Badge Preview" />
      </div>
      <button onClick={handleCreateBadge}>Badge 생성</button>
    </div>
  );
};

export default CreateBadge;
