import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: white;
  text-align: center;
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
