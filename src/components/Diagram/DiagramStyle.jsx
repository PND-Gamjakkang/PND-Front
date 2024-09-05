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

// 클래스 추가버튼
// 추가 버튼
export const AddClassButton = styled.button`
width:100%;
height:100%;
flex-shrink: 0;
border-radius: 5px;
background: #5B59FC;
color: white;
font-size: 0.8rem;
`;

export const ClassAddButtonBox = styled.div`
width: 4.5vw;
height: 30px;
position:absolute;
top: 8px;
right: 0;
`;

export const RelationshipAddButtonBox = styled.div`
width: 4.5vw;
height: 30px;
position:absolute;
top: 185px;
right:1.3vw;
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
width: 50%;
display:flex;
flex-direction: column;
gap: 10px;
`;

export const InputClassNameBox = styled.div`


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
position: relative;
border-radius: 5px;
border: 1px solid #D9D9FF;
background: #FFF;
padding: 0.5vw;

`;

export const AddElementButton = styled.button`
position: absolute;
width: 15px;
height: 10px;
top: 12%;  /* 버튼을 부모 컨테이너의 가운데에 위치 */
left: 95%; /* 버튼을 오른쪽에 위치 */
transform: translate(-50%, -50%); /* 버튼의 중심을 정확히 맞추기 위해 */
background-image: url(${props => props.src});
background-size: cover; /* 이미지 크기를 버튼 크기에 맞춤 */
background-repeat: no-repeat;
background-position: center;
border: none; /* 버튼 테두리 제거 */
`;

export const InputMethod = styled.input`
width: 90%;
border-bottom: 0.4px solid black;
`;

export const InputVariableBox = styled.div`
position:relative;
width: 50%;
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
position:relative;

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

// 관계 입력 칸들
export const SettingRelationship = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
margin-top: 12px;
`;

export const SettingRelationshipContainer = styled.div`
width: 70%;
display:flex;
gap: 0.5vw;
`;

export const InputClassLeft = styled.input`
width: 7.39vw;
height: 5vh;
border-radius: 5px;
border: 1px solid #B7B6FF;
background: #D9D9FF;

  &::placeholder {
    color: #5B59FC;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 0px; /* 0% */
  }
`;

export const RelationshipType = styled.div`
width: 2.5vw;
display:flex;
justify-content: center;
align-items: center;
`;

export const InputClassRight = styled.input`
width: 7.39vw;
height: 5vh;
border-radius: 5px;
border: 1px solid #B7B6FF;
background: #D9D9FF;
  &::placeholder {
    color: #5B59FC;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 0px; /* 0% */
  }
`;

/* 뷰코드 */
export const ViewCodeContainer = styled.div`
width: 100%;
height: 300px;
border-radius: 10px;
background-color: #000;
margin-top: 25px;
padding: 0.6vw;
`;

export const CodeBox = styled.div`
width:70%;
height:100%;
color: white;
overflow-y: auto;  /* 스크롤 바를 자동으로 처리하되, 숨김 */
white-space: pre-wrap;  /* 줄바꿈과 공백을 유지 */
word-wrap: break-word;  /* 너무 긴 단어를 다음 줄로 넘김 */
scrollbar-width: none;  /* Firefox에서 스크롤 바 숨기기 */
-ms-overflow-style: none;  /* IE 및 Edge에서 스크롤 바 숨기기 */
&::-webkit-scrollbar { 
    display: none;  /* Webkit 기반 브라우저에서 스크롤 바 숨기기 */
}
`;

export const CodeTextArea = styled.textarea`
width:100%;
height:100%;
background-color: #000;
color: white;
border: none; /* border를 없앰 */
resize: none; /* 사용자가 크기 조정을 못하게 함 */
overflow-y: scroll; /* 스크롤 가능하게 함 */
scrollbar-width: none; /* Firefox에서 스크롤 바 숨기기 */
-ms-overflow-style: none;  /* IE 및 Edge에서 스크롤 바 숨기기 */
&::-webkit-scrollbar {
    display: none; /* Webkit 기반 브라우저에서 스크롤 바 숨기기 */
}
`;

// 추가 버튼
export const AddRelationButton = styled.button`
width:100%;
height:100%;
flex-shrink: 0;
border-radius: 5px;
background: #5B59FC;
color: white;
font-size: 0.8rem;
`;

// 수정 버튼
export const SaveButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #5B59FC;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #4747D1;
  }
`;
