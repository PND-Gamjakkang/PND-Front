import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 5px 10px;
  color: black;
  font-family: 'Inter', sans-serif; /* 폰트 스타일 적용 */
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  font-style: italic;

  &:hover {
    background-color: transparent; /* 배경색을 투명하게 유지 */
    border: 2px solid #5B59FC; /* 테두리를 설정 */
  }
  `;


export default Button;
