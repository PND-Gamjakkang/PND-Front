import "./InputArea.css";
import { useRef } from "react";

const InputArea = ({ onChange, onSelectionChange, content }) => {
    const inputRef = useRef(null);
  
  const inputHandler = () => {
    const changedText = inputRef.current.innerText;
    onChange(changedText);
  };

  const selectionHandler = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    if (!selectedText) return;
    
    onSelectionChange(selectedText);
  };

  return (
    <div className="InputArea">
      <div
        className="InputText"
        contentEditable="true"
        ref={inputRef}
        onInput={inputHandler}
        onMouseUp={selectionHandler} // 마우스 버튼을 놓을 때 선택된 텍스트를 가져옴
      ></div>
    </div>
  );
};

export default InputArea;
