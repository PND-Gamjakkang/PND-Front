import "./MdArea.css";
import ReactMarkdown from "react-markdown";

const MdArea = ({ content }) => {
  return (
    <div className="MdArea">
      <div className="MdResult">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MdArea;
