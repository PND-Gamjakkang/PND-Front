import styled from "styled-components";

const PreviewLabel = styled.label`
  width: 30.2vw; /* 약 580px out of 1920px */
  height: 44.4vh; /* 약 480px out of 1080px */
  margin: auto;
  margin-top: 3vh; /* 약 49px */
  background-color: #f8f8ff; /* 기본 배경색 */
  border-radius: 0.3125rem; /* 약 5px */
  border: 0.1875rem dashed #eee; /* 약 3px */
  padding: 1.25rem; /* 약 20px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.active {
    background-color: #e0e0f8; /* 활성화 시 어울리는 연한 파란색 */
    border-color: #5b59fc; /* 활성화 시 테두리 색상 */
  }

  &:hover {
    border-color: #5b59fc; /* 호버 시 어울리는 색상 */
    background-color: #f0f0ff; /* 호버 시 약간 더 강조된 배경색 */
  }
`;


const HiddenFileInput = styled.input`
  display: none;
`;

const Icon = styled.svg`
  width: 5.2vw; /* 약 100px out of 1920px */
  height: 5.2vw; /* 약 100px out of 1920px */
  pointer-events: none;
`;

const PreviewMessage = styled.p`
  font-weight: 500;
  font-size: 1.125rem; /* 약 18px */
  margin: 1.25rem 0 0.625rem; /* 약 20px 0 10px */
`;

const PreviewDescription = styled.p`
  margin: 0;
  font-size: 0.875rem; /* 약 14px */
`;

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem; /* 약 20px */
  margin-bottom: 1.25rem; /* 약 20px */
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 8.75rem; /* 약 140px */
  border-radius: 0.3125rem; /* 약 5px */
  margin-top: 0.625rem; /* 약 10px */
`;

const AddImageButton = styled.button`
  width: 23.13vw; /* 약 444px out of 1920px */
  height: 6.67vh; /* 약 72px out of 1080px */
  flex-shrink: 0;
  color: #FFF;
  background-color: #5B59FC;
  border: 0.0625rem solid #fff; /* 약 1px */
  font-family: 'Inter', sans-serif;
  font-size: 1.0rem; /* 약 24px */
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem; /* 약 36px */
  border-radius: 1.25rem; /* 약 20px */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4A47D1; /* 어울리는 어두운 파란색 */
  }

  display: block;
  margin: auto;
  margin-bottom: 7.2vh; /* 약 78px */
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
