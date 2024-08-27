import styled from "styled-components"

export const CreateBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.56vh;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 1.56vh;
`;

export const Label = styled.label`
  margin-right: 3.13vh; /* label과 input 사이의 간격 */
  font-size: 2.08vh;
  
  display: flex;
  width: 5.36vw;
  height: 2.87vh;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;

  font-family: 'Inter', sans-serif;
  font-size: 2.22vh;
  font-style: normal;
  font-weight: 900;
  line-height: 3.33vh; /* 160% */
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.83vh;
  font-size: 2.22vh;
  border: 1px solid #ccc;
  border-radius: 0.52vh;
`;

export const BadgeCreateButton = styled.button`
  width: 23.13vw;
  height: 6.67vh;
  flex-shrink: 0;
  background-color: #5b59fc;
  border: 0.1vh solid #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 2.22vh;
  font-style: normal;
  color: white;
  font-weight: 600;
  line-height: 3.33vh;
  border-radius: 2.08vh;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #6f6df8; /* 기존 색상보다 약간 밝은 색상 */
    border-color: #e0e0ff; /* 테두리 색상도 변경 */
  }

  display: block;
  margin: auto; 
  margin-bottom: 8.13vh;
`;

export const BadgePreview = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 1.56vh;

  img {
    width: 10.42vw;
    height: 4.63vh;
  }
`;

export const PreviewTitle = styled.h2`
  font-size: 1.87vh;
  margin-bottom: 1.04vh;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SubmitButton = styled.button`
  display: none; /* Submit 버튼을 숨김 */
`;
