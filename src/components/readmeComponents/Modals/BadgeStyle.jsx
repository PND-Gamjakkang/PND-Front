import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  width: auto;
  height: auto;
  background: white;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 90vh;
  overflow: hidden;
  margin: auto;
`;

export const CreateBadgeContainer = styled.div`
  flex: 1;
  padding-right: 50px;

  .input-group {
    margin-bottom: 30px;

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 30px;
    }

    input {
      width: 100%;
      padding: 15px;
      font-size: 30px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  .badge-preview {
    margin-top: 40px;

    img {
      max-width: 100%;
      height: auto;
      width: 400px;
      height: 100px;
    }
  }
`;

export const BadgePanel = styled.div`
  flex: 1;
  padding-left: 40px;

  h4 {
    margin-bottom: 30px;
    font-size: 30px;
  }

  img {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 275px;
    height: 100px;
  }
`;

export const ModalCloseButton = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BadgePreviewPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 80vh;
  overflow-y: auto;

  img {
    flex: 1 1 150px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 100%;
    height: auto;
  }
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
    'https://img.shields.io/github/license/{username}/{repo-name}.svg',
    'https://img.shields.io/github/commits-since/{username}/{repo-name}/{version}.svg',
  ];