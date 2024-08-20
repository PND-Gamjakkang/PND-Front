import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  text-align: center;
  height:60px;
  display:flex;
  align-items:center;
  justify-content : center;
  border:2px solid #FFFFFF;
  border-radius:22px;
  `;
  

  const Title = styled.div`

    width:100%;
    height:100%;
    text-align:center;
    color: black;
    font-size: 32px; 
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-weight: 900;
    line-height: 64px; 
    word-wrap: break-word;
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>README EDITOR</Title>
    
    </HeaderContainer>
  );
};

export default Header;
