import styled from "styled-components"

export const CreateBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-right: 2rem;
  font-size: 1.25rem;
  display: flex;
  width: 6.5rem;
  height: 2rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 2rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.3125rem;
`;

export const BadgeCreateButton = styled.button`
  width: 27.75rem;
  height: 4.5rem;
  flex-shrink: 0;
  background-color: #5b59fc;
  border: 1px solid #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  color : #fff;
  &:hover {
    background-color: #6f6df8;
    border-color: #e0e0ff;
  }

  display: block;
  margin: auto;
  margin-bottom: 4.875rem;
`;

export const BadgePreview = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 1rem;
  
  img {
    width: 12.5rem;
    height: 3.125rem;
  }
`;

export const PreviewTitle = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SubmitButton = styled.button`
  display: none;
`;
