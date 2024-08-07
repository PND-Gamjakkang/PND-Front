import * as S from './styles/RetroStyle.jsx';
import { useState } from 'react';

export default function SelectPart() {
    const [selectedPart, setSelectedPart] = useState('');

    const handleClick = (part) => {
        setSelectedPart(part);
        console.log(`Selected part: ${part}`);
    };


    return (
        <S.SelectPartContainer>
            <S.OptionParagraph>파트 선택</S.OptionParagraph>
            <S.PartButtons>
                <S.PartButton onClick={() => handleClick('프론트엔드')} isSelected={selectedPart === '프론트엔드'}>프론트엔드</S.PartButton>
                <S.PartButton onClick={() => handleClick('백엔드')} isSelected={selectedPart === '백엔드'}>백엔드</S.PartButton>
                <S.PartButton onClick={() => handleClick('프론트엔드/백엔드')} isSelected={selectedPart === '프론트엔드/백엔드'}>프론트엔드/백엔드</S.PartButton>
            </S.PartButtons>
            <S.CreateButton>생성하기</S.CreateButton>
        </S.SelectPartContainer>
    )
}