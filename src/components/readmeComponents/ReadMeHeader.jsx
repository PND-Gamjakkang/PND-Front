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

const Title = styled.h1`
  margin-bottom: 0;
  color : black;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>📝README Editor📝</Title>
    </HeaderContainer>
  );
};

export default Header;
