import styled from "styled-components";
const PreviewLabel = styled.label`
  width: 427px;
  height: 262px;
  margin: auto;
  margin-top:49px;
  background-color: #ededed;
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
  margin-bottom:20px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 150px;
  border-radius: 5px;
  margin-top: 10px;
`;



const AddImageButton = styled.button`
width: 444px;
height: 72px;
flex-shrink: 0;
background-color: #B8B8B8;
border: 1px solid #FFF;
font-family: 'Inter', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 36px;
border-radius: 20px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
    background-color: #A8A8A8;
}

display: block;
margin: auto; 

margin-bottom:78px;

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