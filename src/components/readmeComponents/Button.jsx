import styled from 'styled-components';

const Button = styled.button`
  background: rgb(20, 20, 20);
  background: linear-gradient(0deg, rgba(20, 20, 20, 1) 0%, rgba(50, 50, 50, 1) 100%);
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;

  &:hover {
    background: rgb(40, 40, 40);
    background: linear-gradient(0deg, rgba(40, 40, 40, 1) 0%, rgba(60, 60, 60, 1) 100%);
  }
`;

export default Button;
