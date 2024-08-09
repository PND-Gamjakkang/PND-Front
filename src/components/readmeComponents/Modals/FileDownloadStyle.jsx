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
  width: 637px;
  height: 694px;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:white;
  font-weight:bold;
  font-size:20px;
`;

export const StyledButton = styled.button`
  background-color: #07061F;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;

  border: 2px solid #FFFFFF; 
  border-radius:22px;
  font-weight:bold;
  font-size:20px;

  width:444px;
  height:72px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 87px; 
  height:33px;
  `;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #aaa;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
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
