import styled from "styled-components";
const PreviewLabel = styled.label`
  width: 300px;
  height: 150px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.active {
    background-color: #efeef3;
    border-color: #111;
  }

  &:hover {
    border-color: #111;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Icon = styled.svg`
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

const PreviewMessage = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 10px;
`;

const PreviewDescription = styled.p`
  margin: 0;
  font-size: 14px;
`;

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 150px;
  border-radius: 5px;
  margin-top: 10px;
`;

const AddImageButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
    PreviewLabel,
    HiddenFileInput,
    Icon,
    PreviewMessage,
    PreviewDescription,
    PreviewInfo,
    PreviewImage,
    AddImageButton
};