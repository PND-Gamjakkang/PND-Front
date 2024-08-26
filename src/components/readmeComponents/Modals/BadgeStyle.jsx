import styled from 'styled-components';

export const ModalContent = styled.div`
display: flex;
justify-content: space-between; /* 가로로 나란히 배치 */
padding: 20px;
width: 100%;
height: 100%; /* 부모 요소의 전체 높이를 채움 */
background: white;
align-items: flex-start;
border-radius: 10px;
flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
margin-bottom:30px;
box-sizing: border-box;
overflow:hidden;
`;
export const ModalHeader = styled.div`
  text-align: left;
  margin-bottom: 30px;
  margin-left : 20px;
`;

export const Title = styled.div`  
  width:182px;
  height:72px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex-shrink: 0;
  color: black;
  font-size: 24px; 
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  line-height: 32px;

`;

  export const Description = styled.div`
    display: flex;
    width: 100%;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    margin-top:10px;
    margin-bottom:20px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px; /* 160% */
  
  `;

export const CreateBadgeContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;

  .input-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 14px;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  .badge-preview {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
`;

export const BadgePanel = styled.div`
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;

export const BadgePreviewContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BadgePreviewPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 레이아웃 */
  gap: 10px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const sampleBadges = [
  'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white',
  'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white',
  'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white',
  'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white',
  'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
  'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
  'https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white',
  'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
  'https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white',
  'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
  'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
  
];
