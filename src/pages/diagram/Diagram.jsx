import { useState } from 'react';
import * as S from './DiagramStyle.jsx';
import DiagramType from '../../components/Diagram/DiagramType.jsx';

// image
import diagramClassIcon from '../../assets/images/diagram-class-icon.png'
import diagramClassImage from '../../assets/images/diagram-class-image.png'
import diagramSequenceIcon from '../../assets/images/diagram-sequence-icon.png'
import diagramErdIcon from '../../assets/images/diagram-erd-icon.png'
import diagramSequenceImage from '../../assets/images/diagram-sequence-image.png'
import diagramErdImage from '../../assets/images/diagram-erd-image.png'

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
                    <DiagramType 
                        typeIcon={diagramClassIcon}
                        typeName="CLASS DIAGRAM"
                        typeDescription={
                            <>
                            클래스간의 관계를 시각적으로 표현한 다이어그램입니다.<br/>
                            객체 지향 설계에서 상요되며 클래스의 속성, 메소드, 관계를 보여줍니다.
                            </>
                        }
                        typeImage={diagramClassImage}
                    />
                    <DiagramType 
                        typeIcon={diagramSequenceIcon}
                        typeName="SEQUENCE DIAGRAM"
                        typeDescription={
                            <>
                            객체 간의 상호 작용을 시간 순서에 따라 표현한 다이어그램입니다.<br/>
                            사용자의 액션과 시스템의 반응을 순차적으로 보여줍니다.
                            </>
                        }
                        typeImage={diagramSequenceImage}
                    />

                    <DiagramType 
                        typeIcon={diagramErdIcon}
                        typeName={
                            <>
                            ENTITY RELATIONSHIP DIAGRAM <br/> (ERD)
                            </>
                        }
                        typeDescription={
                            <>
                            데이터베이스의 구조를 시각적으로 나타내는 다이어그램입니다.<br/>
                            엔터티와 그들 간의 관계를 표현하며 데이터 모델링에 사용됩니다.
                            </>
                        }
                        typeImage={diagramErdImage}
                    />

                </S.DiagramContainer>
            </S.DiagramLayout>
            </S.Diagram>
        )}
        </>
    )
}
export default Diagram;