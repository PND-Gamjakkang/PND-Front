import React, { useRef, useEffect, useState } from "react";
import { 
  h1ButtonClicked, h2ButtonClicked, h3ButtonClicked, h4ButtonClicked, h5ButtonClicked, h6ButtonClicked,
  quoteButtonClicked, boldButtonClicked, italicButtonClicked, throughButtonClicked, codeButtonClicked, listItemButtonClicked,
  topLangsButtonClicked, badgeButtonClicked, fileUploadButtonClicked, centerButtonClicked
} from './MarkDownFuns';
import { InputAreaContainer, InputText } from './InputAreaStyle';
import { API } from "../../../api/axios";
import Loader from "../../Diagram/Loader";
const InputArea = ({ onChange, content, clickedButton, onMarkdownApplied, badgeURL, imgURL, selectedProjectId }) => {
  const textareaRef = useRef(null);
  const undoStack = useRef([]);  // Ctrl + Z
  const redoStack = useRef([]);  // Ctrl + Y
  const [loading,setLoading] = useState(false);
  const fetchRepoName = async () => {
    try {
      const { data } = await API.get('api/pnd/user/profile');
      return data.data.name;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAIReadme = async () => {
    setLoading(true);
    try {
      const data  = await API.patch(`api/pnd/readme/${selectedProjectId}`);
      console.log('selection pr id : ', selectedProjectId);
      console.log('data:', data);
      let AIReadmeContent = data.data.data.readme_script_gpt;
      
      AIReadmeContent = AIReadmeContent.replace(/```/g, '');
  
      console.log(AIReadmeContent);
      console.log(typeof(AIReadmeContent));
      return AIReadmeContent;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  const saveState = () => {
    if (textareaRef.current) {
      const { value, selectionStart, selectionEnd } = textareaRef.current;

      undoStack.current.push({
        content: value,
        selection: { start: selectionStart, end: selectionEnd }
      });

      redoStack.current = [];  // Redo 스택 초기화
    }
  };

  const handleUndo = () => {
    if (undoStack.current.length > 0) {
      const currentState = {
        content: textareaRef.current.value,
        selection: saveSelection()
      };

      redoStack.current.push(currentState);
      const lastState = undoStack.current.pop();

      return lastState;
    }
  };

  const handleRedo = () => {
    if (redoStack.current.length > 0) {
      const currentState = {
        content: textareaRef.current.value,
        selection: saveSelection()
      };

      undoStack.current.push(currentState);
      const nextState = redoStack.current.pop();

      return nextState;
    }
  };

  const restoreSelection = (savedSelection) => {
    if (savedSelection && textareaRef.current) {
      const { start, end } = savedSelection;
      textareaRef.current.setSelectionRange(start, end);
    }
  };

  const saveSelection = () => {
    if (textareaRef.current) {
      const { selectionStart, selectionEnd } = textareaRef.current;
      return { start: selectionStart, end: selectionEnd };
    }
    return null;
  };

  useEffect(() => {
    if (textareaRef.current && content !== textareaRef.current.value) {
      const { selectionStart } = textareaRef.current;
      textareaRef.current.value = content;
      textareaRef.current.setSelectionRange(selectionStart, selectionStart);
    }
  }, [content]);

  useEffect(() => {
    if (clickedButton) {
      let newContent = content;
      let selection = null;

      const processClick = async () => {
        const textarea = textareaRef.current;
        const { value, selectionStart, selectionEnd } = textarea;

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
            newContent = h1ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'h2':
            newContent = h2ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'h3':
            newContent = h3ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'h4':
            newContent = h4ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'h5':
            newContent = h5ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'h6':
            newContent = h6ButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'quote':
            newContent = quoteButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'bold':
            newContent = boldButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'italic':
            newContent = italicButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'throughLine':
            newContent = throughButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'code':
            newContent = codeButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'center':
            newContent = centerButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'listItem':
            newContent = listItemButtonClicked(value, selectionStart, selectionEnd);
            break;
          case 'Lan':
            const userName = await fetchRepoName();
            newContent = topLangsButtonClicked(value, selectionStart, selectionEnd, userName);
            console.log('InputArea:', newContent); // 로그 추가
            break;
          case 'Badge':
            newContent = badgeButtonClicked(value, selectionStart, selectionEnd, badgeURL);
            break;
          case 'Image':
            newContent = fileUploadButtonClicked(value, selectionStart, selectionEnd, imgURL);
            break;
          case 'AI':
            newContent = await fetchAIReadme();
            break;
          default:
            break;
        }

        if (newContent && textareaRef.current) {
          textareaRef.current.value = newContent;
          if (selection) {
            restoreSelection(selection);
          } else {
            // 삽입된 내용 뒤로 커서 이동
            const newCaretPosition = selectionStart + (newContent.length - value.length);
            textareaRef.current.setSelectionRange(newCaretPosition, newCaretPosition);
          }
        }

        onChange(newContent);
        onMarkdownApplied('');
      };

      processClick();
    }
  }, [clickedButton, content, onChange, onMarkdownApplied, badgeURL, imgURL]);

  const inputHandler = () => {
    saveState();
    const changedText = textareaRef.current.value;
    onChange(changedText);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      const lastState = handleUndo();
      if (lastState) {
        textareaRef.current.value = lastState.content;
        restoreSelection(lastState.selection);
        onChange(lastState.content);
      }
    } else if (e.ctrlKey && e.key === 'y') {
      e.preventDefault();
      const nextState = handleRedo();
      if (nextState) {
        textareaRef.current.value = nextState.content;
        restoreSelection(nextState.selection);
        onChange(nextState.content);
      }
    }
  };

  return (
    <InputAreaContainer>
      {loading && <Loader />}
      <InputText
        ref={textareaRef}
        value={content}
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
      />
    </InputAreaContainer>
  );
};

export default InputArea;
