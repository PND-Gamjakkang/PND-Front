// src/layout_test/InputAreaHeader.js
import React from 'react';
import TitleMinusButton from './buttons/TitleMinusButton';
import TitlePlusButton from './buttons/TitlePlusButton';
import * as S from './ReadmeStyle.jsx';

const InputAreaHeader = ({ onButtonClick }) => {
    return (
      <S.InputAreaHeader>
        <S.InputAreaTitle>Input Area</S.InputAreaTitle>
        <S.Toolbar>
          <TitlePlusButton onClick={() => onButtonClick('titlePlus')} />
          <TitleMinusButton onClick={()=>onButtonClick('titleMinus')}/>
          {/* 다른 버튼들도 추가 가능 */}
        </S.Toolbar>
      </S.InputAreaHeader>
    );
  };
  
  export default InputAreaHeader;