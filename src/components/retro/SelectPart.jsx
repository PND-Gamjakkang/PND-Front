import * as S from './styles/RetroStyle.jsx';
import { useState } from 'react';

export default function SelectPart({onSelectPartChange, onClickCreateBtn}) {
    const [selectedPart, setSelectedPart] = useState('');

    const handlePartClick = (part) => {
        setSelectedPart(part);
        onSelectPartChange(part);
    };
    const handleBtnClick = (click) => {
        onClickCreateBtn(click);
    }

    return (
        <S.SelectPartContainer>
            <S.OptionParagraph>파트 선택</S.OptionParagraph>
            <S.PartButtons>
                <S.PartButton onClick={() => handlePartClick('프론트엔드')} isSelected={selectedPart === '프론트엔드'}>프론트엔드</S.PartButton>
                <S.PartButton onClick={() => handlePartClick('백엔드')} isSelected={selectedPart === '백엔드'}>백엔드</S.PartButton>
                <S.PartButton onClick={() => handlePartClick('프론트엔드/백엔드')} isSelected={selectedPart === '프론트엔드/백엔드'}>프론트엔드/백엔드</S.PartButton>
            </S.PartButtons>
            <S.CreateButton onClick={() => handleBtnClick(true)}> 프로젝트 생성하기</S.CreateButton>
        </S.SelectPartContainer>
    )
}