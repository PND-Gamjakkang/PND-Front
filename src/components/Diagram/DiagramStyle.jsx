import styled from "styled-components";

export const DiagramTypeLayout = styled.div`
width: 33%;
border-radius: 20px;
border: 1px solid #D9D9FF;
background: #FFF;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 0.5vw;
`;

export const DiagramTypeIconBox = styled.img`

`;

export const DiagramTypeNameBox = styled.div`
color: #5D5D5D;
font-size: 1vw;
font-weight: 600;
line-height: 111%; /* 22.2px */
/* 공통 스타일 */
text-align: center;
font-family: Inter;
font-style: normal;
margin: 4% 0 5% 0;
`;

export const DiagramTypeDescriptionBox = styled.div`
color: #474747;
font-size: 0.7vw;
font-weight: 500;
line-height: 126%; /* 17.64px */
margin-bottom: 5%;

`;

export const DiagramTypeImageBox = styled.img`
width: 70%;
height: 60%;

`;


/* 클래스 에디터 */
export const ClassEditorContainer = styled.div`
width: 100%;
`;

export const EditorTitleText = styled.pre`
font-size: 0.8rem;
text-decoration-line: underline;
font-weight: 500;
`;

export const InputSection = styled.div`
width: 100%;
display:flex;
gap: 1vw;

`;

export const InputTitleText = styled.p`
color: #5D5D5D;
font-size: 0.8rem;
font-weight: 600;
margin-bottom: 10px;
`;

export const ClassNameAndMethod = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
`;

export const InputClassNameBox = styled.div`

height: 60px;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
padding: 0.5vw;

`;

export const InputClassName = styled.input`
width: 90%;
border-bottom: 0.4px solid black;


`;

export const InputMethodBox = styled.div`

height: 60px;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
padding: 0.5vw;

`;

export const InputMethod = styled.input`
width: 90%;
border-bottom: 0.4px solid black;
`;

export const InputVariableBox = styled.div`
height: 130px;

border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
padding: 0.5vw;

`;

export const InputVariable = styled.input`
width: 90%;
border-bottom: 0.4px solid black;
`;

/* 관계 에디터 */
export const RelationshipEditorContainer = styled.div`
margin-top: 25px;

`;

export const RelationshipButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5vw; /* 버튼 사이의 간격 */
  width: 20vw; /* 전체 너비를 지정하여 중앙 정렬 효과를 줌 */
`;

export const RelationshipBtn = styled.button`
  padding: 6px 1.2vw;
  background-color: #D9D9FF; /* 배경색 */
  color: #5B59FC; /* 텍스트 색상 */
  border-radius: 8px;
  font-size: 0.8rem;
  border: 1px solid #B7B6FF;
`;

export const RelationshipInfoImg = styled.img`
width: 100%;
margin-top: 10px;
`;

/* View Code */
export const ViewCodeContainer = styled.div`
width: 100%;
height: 300px;
border-radius: 10px;
background-color: #000;
margin-top: 25px;
padding: 0.6vw;
`;

export const CodeTextArea = styled.textarea`
width:100%;
height:100%;
background-color: #000;
color: white;
`;
