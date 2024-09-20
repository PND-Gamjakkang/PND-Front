import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between; /* 가로로 나란히 배치 */
  padding: 2.1vh;
  width: 100%;
  height: 100%; /* 부모 요소의 전체 높이를 채움 */
  background: white;
  align-items: flex-start;
  border-radius: 1.04vh;
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  margin-bottom: 3.2vh;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  text-align: left;
  margin-bottom: 3.2vh;
  margin-left: 2.1vh;
`;

export const Title = styled.div`  
  width: 9.48vw;
  height: 6.67vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: black;
  font-size: 2.22vh; 
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  line-height: 3.33vh;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: 2.87vh;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  margin-top: 1.04vh;
  margin-bottom: 2.1vh;
  font-family: 'Inter', sans-serif;
  font-size: 2.08vh;
  font-style: normal;
  font-weight: 900;
  line-height: 3.33vh; /* 160% */
`;

export const CreateBadgeContainer = styled.div`
  flex: 1;
  margin-right: 2.1vh;
  display: flex;
  flex-direction: column;

  .input-group {
    margin-bottom: 1.56vh;

    label {
      display: block;
      margin-bottom: 0.52vh;
      font-weight: bold;
      font-size: 1.46vh;
    }

    input {
      width: 100%;
      padding: 0.83vh;
      font-size: 1.46vh;
      border: 1px solid #ccc;
      border-radius: 0.52vh;
    }
  }

  .badge-preview {
    margin-top: 1.04vh;
    padding: 1.04vh;
    border: 1px solid #ccc;
    border-radius: 0.52vh;
    text-align: center;
  }
`;

export const BadgePanel = styled.div`
  flex: 1;
  padding-left: 2.1vh;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 1.56vh;
    font-size: 1.87vh;
  }
`;

export const BadgePreviewContainer = styled.div`
  flex: 1;
  overflow-y: hidden;
  overflow-x:hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 1.04vh;
`;

export const BadgePreviewPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 레이아웃 */
  gap: 1.04vh;
  overflow-y:hidden;
  overflow-x:hidden;

`;
export const BadgeImage = styled.img`
  width: 7vw; /* Adjust as needed for responsiveness */
  height: 4vh;
  max-width: 100%;
  max-height: 10vh; /* Ensures the images scale properly */
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); 
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.04vh;
  right: 1.04vh;
  background: transparent;
  border: none;
  font-size: 2.5vh;
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
