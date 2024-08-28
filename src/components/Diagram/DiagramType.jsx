import * as S from './DiagramStyle'

function DiagramType({typeName, typeDescription, typeIcon, typeImage}) {
    return (
        <S.DiagramTypeLayout>
            <S.DiagramTypeIconBox src={typeIcon}></S.DiagramTypeIconBox> 
            <S.DiagramTypeNameBox>{typeName}</S.DiagramTypeNameBox>  
            <S.DiagramTypeDescriptionBox>{typeDescription}</S.DiagramTypeDescriptionBox> 
            <S.DiagramTypeImageBox src={typeImage}></S.DiagramTypeImageBox>
        </S.DiagramTypeLayout>
    )
}

export default DiagramType;