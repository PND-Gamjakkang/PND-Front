import styled from "styled-components"

export const CreateBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-right: 30px; /* label과 input 사이의 간격 */
  font-size: 20px;
  
  display: flex;
  width: 103px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;

  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 32px; /* 160% */
  
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const BadgeCreateButton = styled.button`
  width: 444px;
  height: 72px;
  flex-shrink: 0;
  background-color: #5b59fc;
  border: 1px solid #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  color:white;
  font-weight: 600;
  line-height: 36px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #6f6df8; /* 기존 색상보다 약간 밝은 색상 */
    border-color: #e0e0ff; /* 테두리 색상도 변경 */
  }

  display: block;
  margin: auto; 
  margin-bottom: 78px;
`;

export const BadgePreview = styled.div`
    display: flex;
    align-items: center; 
    margin-bottom: 15px;
    img{
        width:200px;
        height:50px;
    }
    
`;

export const PreviewTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SubmitButton = styled.button`
  display: none; /* Submit 버튼을 숨김 */
`;
