import React, { useRef, useEffect, useState } from "react";
import { 
  h1ButtonClicked, h2ButtonClicked, h3ButtonClicked, h4ButtonClicked, h5ButtonClicked, h6ButtonClicked,
  quoteButtonClicked, boldButtonClicked, italicButtonClicked, throughButtonClicked, codeButtonClicked, listItemButtonClicked,
  topLangsButtonClicked,badgeButtonClicked,fileUploadButtonClicked
} from './MarkDownFuns';
import { InputAreaContainer, InputText } from './InputAreaStyle';

const InputArea = ({ onChange, content, clickedButton, onMarkdownApplied, badgeURL, imgURL }) => {
  const localRef = useRef(null);
  const selectionRef = useRef(null);
  const undoStack = useRef([]);//ctrl+z
  const redoStack = useRef([]);//ctrl+y

  const saveState = () => {
    if (localRef.current) {
        const selection = window.getSelection();
        const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

        undoStack.current.push({
          content: localRef.current.innerText,
          selection: range ? { start: range.startOffset, end: range.endOffset } : null
      });
        redoStack.current = []; 
    }
  };

  const handleUndo = () => {
    console.log('handleUndo');
    if (undoStack.current.length > 0) {
        const currentState = {
            content: localRef.current.innerText,
            selection: saveSelection()
        };

        redoStack.current.push(currentState);  
        const lastState = undoStack.current.pop(); 

        return lastState;
    }
};

  // ctrl Y
  const handleRedo = () => {
    if (redoStack.current.length > 0) {
        const currentState = {
            content: localRef.current.innerText,
            selection: saveSelection()
        };

        undoStack.current.push(currentState);  
        const nextState = redoStack.current.pop();  
        return nextState;
    }
};


const restoreSelection = (savedSelection) => {
  if (savedSelection && localRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();

      const textNode = localRef.current.firstChild;
      if (textNode) {
          const textLength = textNode.textContent.length;

          const startOffset = Math.min(savedSelection.start, textLength);
          const endOffset = Math.min(savedSelection.end, textLength);

          range.setStart(textNode, startOffset);
          range.setEnd(textNode, endOffset);

          selection.removeAllRanges();
          selection.addRange(range);
      }
  }
};

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return { start: range.startOffset, end: range.endOffset };
    }
    return null;
};

  useEffect(() => {
    if (localRef.current) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(localRef.current, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      localRef.current.focus();
      saveState();
    }
  }, []);

  useEffect(() => {
    if (clickedButton) {
      let newContent = content;
      let selection = null;
      console.log('undoStack : ',undoStack.current.pop());
      console.log(clickedButton);
      if (!selectionRef.current || !selectionRef.current.rangeCount) {
        return;
      }
      console.log(clickedButton);
      // console.log(selectionRef.current);

      switch (clickedButton) {
        case 'undo': {
          const lastState = handleUndo();
          if (lastState) {
            newContent = lastState.content;
            selection = lastState.selection;
          }
          break;
        }
          case 'redo':
            const nextState = handleRedo();
            if (nextState) {
              newContent = nextState.content;
              selection = nextState.selection;
            }
          break;
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
          newContent = topLangsButtonClicked(content, selectionRef.current);
          break;
        case 'Badge':
          console.log(badgeURL);
          newContent = badgeButtonClicked(content,selectionRef.current,badgeURL);
          break;
        case 'Image':
          console.log(imgURL);
          newContent = fileUploadButtonClicked(content,selectionRef.current,imgURL);
          break;
        default:
          break;
      }

      if (newContent && localRef.current) {
        const selection = window.getSelection();
        localRef.current.innerText = newContent;
      }

      onChange(newContent);
      onMarkdownApplied('');
    }
  }, [clickedButton, content, onChange, onMarkdownApplied, badgeURL, imgURL]);

  const inputHandler = () => {
    console.log("input!!");
    saveState();
    const changedText = localRef.current.innerText;
    onChange(changedText);
  };

  const selectionHandler = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        selectionRef.current = selection;
    }
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    document.execCommand('insertHTML', false, '\n\n');
    e.preventDefault();
  } else if (e.ctrlKey && e.key === 'z') {
    e.preventDefault();
    const lastState = handleUndo();
    if (lastState) {
      localRef.current.innerText = lastState.content;
      restoreSelection(lastState.selection);
      onChange(lastState.content);
    }
  } else if (e.ctrlKey && e.key === 'y') {
    e.preventDefault();
    const nextState = handleRedo();
    if (nextState) {
      localRef.current.innerText = nextState.content;
      restoreSelection(nextState.selection);
      onChange(nextState.content);
    }
  }
};

  return (
    <InputAreaContainer>
      <InputText
        contentEditable="true"
        ref={localRef}
        onInput={inputHandler}
        onSelect={selectionHandler}
        onKeyDown={handleKeyDown}
        onKeyUp={selectionHandler}
      />
    </InputAreaContainer>
  );
};

export default InputArea;
