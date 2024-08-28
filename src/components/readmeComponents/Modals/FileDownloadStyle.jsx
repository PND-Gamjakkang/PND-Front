import styled from "styled-components";

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #FFFFFF;
  width: 80vw;
  max-width: 40rem;
  padding: 2rem 1rem;
  text-align: center;
  border-radius: 0.625rem;
  box-shadow: 0 0.125rem 0.1875rem 0 rgba(34, 36, 38, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DownloadButton = styled.button`
  width: 18.75rem; /* 약 300px */
  height: 3.75rem; /* 약 60px */
  flex-shrink: 0;
  background-color: #5B59FC;
  color: #FFF;
  border: none;
  border-radius: 0.5rem; /* 버튼에 라운드 처리 */
  font-family: 'Inter', sans-serif;
  font-size: 1rem; /* 약 16px */
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin-bottom : 0.8125rem;
  &:hover {
    background-color: #4A49D1; /* 호버 시 색상 변경 */
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */
  }
`;
export const MyPageButton = styled.button`
  width: 18.75rem; /* 약 300px */
  height: 3.75rem; /* 약 60px */
  flex-shrink: 0;
  background-color: #FFF;
  color: #5B59FC;
  border-radius: 0.5rem; /* 버튼에 라운드 처리 */
  font-family: 'Inter', sans-serif;
  font-size: 1rem; /* 약 16px */
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: 2px solid #5B59FC; /* 테두리 추가 */

  &:hover {
    background-color: #E0E0FF; /* 호버 시 배경색 변경 */
    color: #4A49D1; /* 호버 시 텍스트 색상 변경 */
  }
  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */
  }
`;
export const Logo = styled.img`
  margin-top: 9.1875vh; /* 위로 147px */
  margin-left: 13.875vw; /* 좌로 222px */
  margin-right: 12vw; /* 우로 192px */
  margin-bottom: 24.25vh; /* 아래로 388px */
  width: 40%;
  max-width: 15rem;
`;
export const CloseButton = styled.button`
  background-color: transparent;
  color: #aaa;
  font-size: 1.25rem;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export const Link = styled.a`
  color: #007BFF;
  text-decoration: underline;
  font-size: 1rem;

  &:hover {
    color: #0056b3;
  }
`;

export const ExplainText = styled.div`
  display: flex;
  width: 26.25rem; /* 약 420px */
  height: 3.625rem; /* 약 58px */
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  margin-top: 3.1875rem; /* 약 51px */
  margin-bottom: 5.875rem; /* 약 94px */
  color: #000;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem; /* 약 20px */
  font-style: normal;
  font-weight: 500;
  line-height: 1.6; /* 160% */
  `;
