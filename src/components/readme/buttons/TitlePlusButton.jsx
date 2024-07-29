// src/layout_test/Buttons/TitlePlusButton.js
import React from 'react';

const TitlePlusButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="title-plus-button">
      +
    </button>
  );
};

export default TitlePlusButton;
