import * as S from './DiagramStyle'

function ThemeType({typeIcon, typeName, onClick, isActive}) {
    return (
        <S.ThemeTypeBox onClick={onClick} isActive={isActive}>
            <S.ThemeTypeIcon>{typeIcon}</S.ThemeTypeIcon>
            <S.ThemeTypeName>{typeName}</S.ThemeTypeName>
        </S.ThemeTypeBox>
    )
}

export default ThemeType;