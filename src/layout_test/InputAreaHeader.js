import "./InputAreaHeader.css";
import "./Buttons/BoldButton"

const InputAreaHeader = ({ bold}) => {
  return (
    <div className="InputAreaHeader">
      <h2>Input Area</h2>
      <div className="toolbar">
        <button onClick={bold}><b>Bold</b></button>
      </div>
    </div>
  );
};

export default InputAreaHeader;
