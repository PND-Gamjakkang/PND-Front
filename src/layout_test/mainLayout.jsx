import React, { useState } from 'react';
import '../App.css';

const App = () => {
  const [content, setContent] = useState('text Area');
  const applyStyle = (style) => {
    document.execCommand(style, false, null);
  };

  return (
    <div className="MainContainer">
      <div className="Toolbar">
        <button className="ToolButton" onClick={() => applyStyle('bold')}>Bold</button>
        <button className="ToolButton" onClick={() => applyStyle('italic')}>Italic</button>
        <button className="ToolButton" onClick={() => applyStyle('underline')}>Underline</button>
        {/* Add more ToolButtons as needed */}
      </div>
      <div
        className="ContentArea"
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default App;
