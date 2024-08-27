import styled from "styled-components";

const PreviewLabel = styled.label`
  width: 22.24vw; /* 427px out of 1920px */
  height: 24.26vh; /* 262px out of 1080px */
  margin: auto;
  margin-top: 4.54vh; /* 49px out of 1080px */
  background-color: #ededed;
  border-radius: 0.46vh; /* 5px out of 1080px */
  border: 0.28vh dashed #eee; /* 3px out of 1080px */
  padding: 1.85vh; /* 20px out of 1080px */
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
  width: 5.21vw; /* 100px out of 1920px */
  height: 9.26vh; /* 100px out of 1080px */
  pointer-events: none;
`;

const PreviewMessage = styled.p`
  font-weight: 500;
  font-size: 1.67vh; /* 18px out of 1080px */
  margin: 1.85vh 0 0.93vh; /* 20px and 10px out of 1080px */
`;

const PreviewDescription = styled.p`
  margin: 0;
  font-size: 1.3vh; /* 14px out of 1080px */
`;

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.85vh; /* 20px out of 1080px */
  margin-bottom: 1.85vh; /* 20px out of 1080px */
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 13.89vh; /* 150px out of 1080px */
  border-radius: 0.46vh; /* 5px out of 1080px */
  margin-top: 0.93vh; /* 10px out of 1080px */
`;

const AddImageButton = styled.button`
  width: 23.13vw; /* 444px out of 1920px */
  height: 6.67vh; /* 72px out of 1080px */
  flex-shrink: 0;
  background-color: #B8B8B8;
  border: 0.09vh solid #FFF; /* 1px out of 1080px */
  font-family: 'Inter', sans-serif;
  font-size: 2.22vh; /* 24px out of 1080px */
  font-style: normal;
  font-weight: 600;
  line-height: 3.33vh; /* 36px out of 1080px */
  border-radius: 1.85vh; /* 20px out of 1080px */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A8A8A8;
  }

  display: block;
  margin: auto;
  margin-bottom: 7.22vh; /* 78px out of 1080px */
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
