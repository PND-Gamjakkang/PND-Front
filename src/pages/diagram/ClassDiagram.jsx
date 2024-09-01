import * as S from './DiagramStyle.jsx';
import { useState } from 'react';

// component
import ClassEditor from '../../components/Diagram/ClassEditor.jsx';
import RelationshipEditor from '../../components/Diagram/RelationshipEditor.jsx';
import ViewCode from '../../components/Diagram/ViewCode.jsx';

function ClassDiagram() {
    const [className, setClassName] = useState('');
    const [variables, setVariables] = useState('');
    const [methods, setMethods] = useState('');

    return (
        <S.ClassLayout>
            <S.ClassLeft>
                <S.ClassTitleText>CLASS DIAGRAM</S.ClassTitleText>
                <S.ClassEditButtons>
                    <S.RemoveComponentBtn>컴포넌트 삭제</S.RemoveComponentBtn>
                    <S.Divider/>
                    <S.RemoveAllBtn>전체 삭제</S.RemoveAllBtn>
                    <S.Divider/>
                    <S.GenerateAiBtn>AI 자동생성</S.GenerateAiBtn>
                </S.ClassEditButtons>
                <S.ClassDiagramResultBox>
                    
                </S.ClassDiagramResultBox>

            </S.ClassLeft>
            <S.ClassMid>
                <S.ClassTitleText>EDIT DIAGRAM</S.ClassTitleText>
                <S.EditDiagramContainer>
                    <ClassEditor
                        className={className}
                        setClassName={setClassName}
                        variables={variables}
                        setVariables={setVariables}
                        methods={methods}
                        setMethods={setMethods}
                    />
                    <RelationshipEditor/>

                </S.EditDiagramContainer>


            </S.ClassMid>
            <S.ClassRight>
                <S.ClassTitleText>VIEW CODE</S.ClassTitleText>
                <S.ClassRightContainer>
                    <ViewCode
                        className={className}
                        variables={variables}
                        methods={methods}
                    />
                    {/* Template */}
                </S.ClassRightContainer>

            </S.ClassRight>
        </S.ClassLayout>
    )
}

export default ClassDiagram;