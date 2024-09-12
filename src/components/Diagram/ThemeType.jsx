import * as S from './DiagramStyle'

function ThemeType({typeIcon, typeName, onClick}) {
    return (
        <S.ThemeTypeBox onClick={onClick}>
            <S.ThemeTypeIcon>{typeIcon}</S.ThemeTypeIcon>
            <S.ThemeTypeName>{typeName}</S.ThemeTypeName>
        </S.ThemeTypeBox>
    )
}

export default ThemeType;