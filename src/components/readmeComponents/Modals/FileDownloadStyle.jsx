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
  background: #07061F;
  width: 33.18vw; /* 637px out of 1920px */
  height: 64.26vh; /* 694px out of 1080px */
  padding: 3.7vh; /* 40px out of 1080px */
  text-align: center;
  border-radius: 1.04vh;
  box-shadow: 0 0.19vh 0.28vh 0 rgba(34, 36, 38, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.85vh;
`;

export const StyledButton = styled.button`
  background-color: #07061F;
  color: white;
  padding: 1.04vh 2.08vh;
  margin: 1.04vh;
  border-radius: 1.04vh;
  cursor: pointer;

  border: 0.2vh solid #FFFFFF;
  font-weight: bold;
  font-size: 1.85vh;

  width: 23.13vw; /* 444px out of 1920px */
  height: 6.67vh; /* 72px out of 1080px */

  &:hover {
    background-color: #0056b3;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 1.85vh; /* 20px out of 1080px */
  left: 1.85vh; /* 20px out of 1920px */
  width: 4.53vw; /* 87px out of 1920px */
  height: 3.06vh; /* 33px out of 1080px */
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #aaa;
  font-size: 1.85vh;
  position: absolute;
  top: 0.93vh; /* 10px out of 1080px */
  right: 0.93vh; /* 10px out of 1920px */
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Link = styled.a`
  color: #007BFF;
  text-decoration: underline; 
  &:hover {
    color: #0056b3;
  }
`;
