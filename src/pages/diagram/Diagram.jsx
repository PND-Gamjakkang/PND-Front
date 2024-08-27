import { useState } from 'react';
import * as S from './DiagramStyle.jsx';

function Diagram() {
    const [diagramType, setDiagramType] = useState(''); // 다이어그램 종류 담는 변수
    const [isSelectedProject, setIsSelectedProject] = useState(false); // 다이어그램 생성할 프로젝트 담는 변수

    return (
        <> 
        {diagramType && !isSelectedProject ? ( 
            <S.Diagram>                                                                                                         
                <S.DiagramLayout>
                    <S.DiagramTopBarContainer>
                        <S.DiagramNavBar></S.DiagramNavBar>
                    </S.DiagramTopBarContainer>
                    <S.DiagramContainer>
                    </S.DiagramContainer>
                </S.DiagramLayout>
            </S.Diagram>

        ) : ( // 다이어그램 종류 x && 프로젝트 x -> 다이어그램 종류 선택 화면
            <S.Diagram>                                                                                                         
            <S.DiagramLayout>
                <S.DiagramTopBarContainer>
                    <S.DiagramPickerParagraph>생성할 다이어그램을 선택해주세요</S.DiagramPickerParagraph>
                </S.DiagramTopBarContainer>
                <S.DiagramContainer>
                </S.DiagramContainer>
            </S.DiagramLayout>
            </S.Diagram>
        )}
        </>
    )
}
export default Diagram;