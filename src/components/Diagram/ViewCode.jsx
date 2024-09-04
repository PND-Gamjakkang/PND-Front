import * as S from './DiagramStyle'


function ViewCode({ viewCode }) {

    return (
        <S.ViewCodeContainer>
            <S.CodeBox>
                {viewCode}
            </S.CodeBox>
            {/* <S.CodeTextArea>
                {viewCode}
            </S.CodeTextArea> */}

        </S.ViewCodeContainer>
    )
}

export default ViewCode;