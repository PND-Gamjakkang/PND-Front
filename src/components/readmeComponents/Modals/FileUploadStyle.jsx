import styled from "styled-components";

export const Title = styled.div`  
  width: 9.48vw; /* 182px out of 1920px */
  height: 6.67vh; /* 72px out of 1080px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: black;
  font-size: 2.22vh; /* 24px out of 1080px */
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  line-height: 2.96vh; /* 32px out of 1080px */
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

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: 2.87vh; /* 31px out of 1080px */
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  margin-top: 0.93vh; /* 10px out of 1080px */
  margin-bottom: 1.85vh; /* 20px out of 1080px */
  font-family: 'Inter', sans-serif;
  font-size: 1.85vh; /* 20px out of 1080px */
  font-style: normal;
  font-weight: 900;
  line-height: 2.96vh; /* 32px out of 1080px */
`;
