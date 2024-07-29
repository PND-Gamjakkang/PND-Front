import React, { useRef, useEffect } from "react";
import { TitleMinusButtonClicked, TitlePlusButtonClicked } from './MarkDownFuns';
import * as S from './ReadmeStyle.jsx';

const InputArea = ({ onChange, onSelectionChange, content, clickedButton, onMarkdownApplied }) => {
  const localRef = useRef(null);
  const selectionRef = useRef({ start: 0, end: 0 });

  useEffect(() => {
    if (localRef.current && content !== localRef.current.textContent) {
      const selection = window.getSelection();
      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      const cursoarPosition = range ? range.startOffset : 0;
      const cursorNode = range ? range.startContainer : null;

      localRef.current.textContent = content;

      if (cursorNode && cursorNode.parentNode === localRef.current) {
        const newRange = document.createRange();
        //newRange.setStart(cursorNode, cursorPosition);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    }
  }, [content]);

  useEffect(() => {
    if (clickedButton) {
      const selection = window.getSelection();
      const selectedText = selection.toString();
      const selectionStart = selectionRef.current.start;
      const selectionEnd = selectionRef.current.end;
      console.log('s start : '+selectionStart+'s end : '+ selectionEnd)
      let newContent = content;

      if (clickedButton === 'titlePlus') {
        newContent = TitlePlusButtonClicked(content, selectedText, selectionStart, selectionEnd);
      } else if (clickedButton === 'titleMinus') {
        newContent = TitleMinusButtonClicked(content, selectedText, selectionStart, selectionEnd);
      }

      if (localRef.current) {
        localRef.current.textContent = newContent;
      }

      onChange(newContent);
      onMarkdownApplied();

      if (selection.rangeCount > 0) {
        selection.removeAllRanges();
        const range = document.createRange();
        range.selectNodeContents(localRef.current);
        selection.addRange(range);
      }
    }
  }, [clickedButton, content, onChange, onMarkdownApplied]);

  const inputHandler = () => {
    const changedText = localRef.current.textContent;
    onChange(changedText);
  };

  const selectionHandler = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    selectionRef.current = {
      start: range.startOffset,
      end: range.endOffset,
    };

    const selectedText = selection.toString();
    if (!selectedText) return;
    onSelectionChange(selectedText);
  };

  return (
    <S.InputArea>
      <S.InputText
        contentEditable="true"
        ref={localRef}
        onInput={inputHandler}
        onSelect={selectionHandler}
        style={{ whiteSpace: 'pre-wrap' }} // Maintain whitespace and new lines
      ></S.InputText>
    </S.InputArea>
  );
};

export default InputArea;
