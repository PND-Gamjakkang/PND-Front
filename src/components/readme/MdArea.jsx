import ReactMarkdown from "react-markdown";
import * as S from './ReadmeStyle.jsx';

const MdArea = ({ content }) => {
  return (
    <S.MdArea>
      <S.MdResult>
        <ReactMarkdown>{content}</ReactMarkdown>
      </S.MdResult>
    </S.MdArea>
  );
};

export default MdArea;
