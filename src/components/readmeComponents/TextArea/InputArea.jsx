import React, { useRef, useEffect, useState } from "react";
import {
  h1ButtonClicked, h2ButtonClicked, h3ButtonClicked, h4ButtonClicked, h5ButtonClicked, h6ButtonClicked,
  quoteButtonClicked, boldButtonClicked, italicButtonClicked, throughButtonClicked, codeButtonClicked, listItemButtonClicked,
  topLangsButtonClicked
} from './MarkDownFuns';
import Badge from "../Modals/Badge";
import FileUpload from "../Modals/FileUpload";
import {InputAreaContainer,InputText} from './InputAreaStyle';

const InputArea = ({ onChange, content, clickedButton, onMarkdownApplied }) => {
  let selection;
  const [lastCursor, setLastCursor] = useState("");

  const localRef = useRef(null);
  const selectionRef = useRef(null);

  useEffect(() => {
    if (localRef.current) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(localRef.current, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      localRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (clickedButton) {
      let newContent = content;
      if (!selectionRef.current || !selectionRef.current.rangeCount) {
        return;
      }

      switch (clickedButton) {
        case 'h1':
          newContent = h1ButtonClicked(content, selectionRef.current);
          break;
        case 'h2':
          newContent = h2ButtonClicked(content, selectionRef.current);
          break;
        case 'h3':
          newContent = h3ButtonClicked(content, selectionRef.current);
          break;
        case 'h4':
          newContent = h4ButtonClicked(content, selectionRef.current);
          break;
        case 'h5':
          newContent = h5ButtonClicked(content, selectionRef.current);
          break;
        case 'h6':
          newContent = h6ButtonClicked(content, selectionRef.current);
          break;
        case 'quote':
          newContent = quoteButtonClicked(content, selectionRef.current);
          break;
        case 'bold':
          newContent = boldButtonClicked(content, selectionRef.current);
          break;
        case 'italic':
          newContent = italicButtonClicked(content, selectionRef.current);
          break;
        case 'throughLine':
          newContent = throughButtonClicked(content, selectionRef.current);
          break;
        case 'code':
          newContent = codeButtonClicked(content, selectionRef.current);
          break;
        case 'listItem':
          newContent = listItemButtonClicked(content, selectionRef.current);
          break;
        case 'Lan':
          newContent = topLangsButtonClicked(content, selectionRef.current, lastCursor);
          break;
        default:
          break;
      }

      if (newContent && localRef.current) {
        localRef.current.innerHTML = newContent.replace(/\n/g, '<br>');
      }

      onChange(newContent);
      onMarkdownApplied();
    }
  }, [clickedButton, content, onChange, onMarkdownApplied, lastCursor]);

  const inputHandler = () => {
    const changedText = localRef.current.innerHTML
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<div><br><\/div>/gi, '\n')
      .replace(/<div>/gi, '\n')
      .replace(/<\/div>/gi, '');
    onChange(changedText);
  };

  const selectionHandler = () => {
    selection = window.getSelection();
    selectionRef.current = selection;
    let last = selection.getRangeAt(0).startOffset;
    setLastCursor(last);
    if (!selection.rangeCount) return;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      document.execCommand('insertHTML', false, '\n\n');
      e.preventDefault();
    }
  };

  const handleBadgeAdd = (markdown) => {
    selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(markdown);
    range.insertNode(textNode);

    // 삽입 후 커서 위치 설정
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    const newContent = content.slice(0, lastCursor) + markdown + content.slice(lastCursor);
    onChange(newContent);
    onMarkdownApplied();
  };

  const handleImageAdd = (markdown) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(markdown);
    range.insertNode(textNode);

    // 삽입 후 커서 위치 설정
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    const newContent = content + '\n' + markdown;
    onChange(newContent);
    onMarkdownApplied();
  };

  return (
    <InputAreaContainer>
      <InputText
        contentEditable="true"
        ref={localRef}
        onInput={inputHandler}
        onSelect={selectionHandler}
        onKeyDown={handleKeyDown}
      />
      <Badge onBadgeAdd={handleBadgeAdd} />
      <FileUpload onImageAdd={handleImageAdd} />
    </InputAreaContainer>
  );
};

export default InputArea;
