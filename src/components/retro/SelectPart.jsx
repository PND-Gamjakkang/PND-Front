import * as S from './styles/RetroStyle.jsx';

export default function SelectPart() {
    return (
        <S.SelectPartContainer>
            <S.OptionParagraph>파트 선택</S.OptionParagraph>
            <S.PartButtons>
                <S.PartButton>프론트엔드</S.PartButton>
                <S.PartButton>백엔드</S.PartButton>
                <S.PartButton>프론트엔드/백엔드</S.PartButton>
            </S.PartButtons>
        </S.SelectPartContainer>
    )
}