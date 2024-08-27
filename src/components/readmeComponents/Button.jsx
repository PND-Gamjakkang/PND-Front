import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0.5vh 1vh;
  color: black;
  font-family: 'Inter', sans-serif; /* 폰트 스타일 적용 */
  font-size: 1.3vh;
  font-weight: 500;
  line-height: 1vh;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5vh;
  font-style: italic;

  &:hover {
    background-color: transparent; /* 배경색을 투명하게 유지 */
    border: 0.2vh solid #5B59FC; /* 테두리를 설정 */
  }
`;

export default Button;
