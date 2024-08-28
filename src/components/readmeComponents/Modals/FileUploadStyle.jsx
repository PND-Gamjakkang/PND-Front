import styled from "styled-components";

export const Title = styled.div`
  padding: 1rem 2rem; /* 내부 여백을 추가하여 텍스트 위치 조정 */
  width: 100%; /* Modal 내부에 맞추어 너비 조정 */
  max-width: 33.33vw; /* 약 640px */
  height: auto; /* 높이는 콘텐츠에 따라 자동 조정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text, #07061F);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem; /* 약 24px */
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 약 32px, 133.333% */

`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.93vh; /* 10px out of 1080px */
  right: 0.93vh; /* 10px out of 1920px */
  background: transparent;
  border: none;
  font-size: 2.22vh; /* 24px out of 1080px */
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 4.32vw; /* 약 83px out of 1920px */
  height: 7.69vh; /* 약 83px out of 1080px */
  flex-shrink: 0;
  object-fit: contain; /* 이미지 비율 유지 */
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: 2.87vh; /* 약 31px out of 1080px */
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding: 1rem 2rem; /* 내부 여백을 추가하여 텍스트 위치 조정 */
  color: var(--text, #07061F);
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem; /* 약 12px */
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 약 32px, 266.667% */
`;
