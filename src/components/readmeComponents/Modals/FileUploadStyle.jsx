import styled from "styled-components";
export const Title = styled.div`  
  width:182px;
  height:72px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex-shrink: 0;
  color: black;
  font-size: 24px; 
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  line-height: 32px;

`;
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
export const ImageCreateButton = styled.button`
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

  export const Description = styled.div`
    display: flex;
    width: 100%;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    margin-top:10px;
    margin-bottom:20px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px; /* 160% */
  
  `;
