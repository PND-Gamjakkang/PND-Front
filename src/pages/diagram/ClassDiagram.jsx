import * as S from './DiagramStyle.jsx';
import { useEffect, useState } from 'react';

// component
import ClassEditor from '../../components/Diagram/ClassEditor.jsx';
import RelationshipEditor from '../../components/Diagram/RelationshipEditor.jsx';
import ViewCode from '../../components/Diagram/ViewCode.jsx';

function ClassDiagram() {
    const [className, setClassName] = useState('');
    const [variables, setVariables] = useState('');
    const [methods, setMethods] = useState('');
    const [isClickAddButton, setIsClickAddButton] = useState(false);
    const [viewCode, setViewCode] = useState(null);  // 초기값을 null로 설정

    const handleAddButton = () => {
        setViewCode(null); // 계속해서 갱신될 수 있도록 일시적으로 null로 설정
        setTimeout(() => {
            setViewCode({
                className,
                variables,
                methods,
            });
        }, 0);
    };

    useEffect(() => {
        console.log("클래스네임 변경");
    }, [className])

    useEffect(() => {
        console.log("추가 버튼 누름");
    },[viewCode])

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
                    <S.ClassAddButtonBox>
                        <S.AddButton onClick={handleAddButton}>추가</S.AddButton>
                    </S.ClassAddButtonBox>
                    <ClassEditor
                        className={className}
                        setClassName={setClassName}
                        variables={variables}
                        setVariables={setVariables}
                        methods={methods}
                        setMethods={setMethods}
                    />
                    <RelationshipEditor/>
                    <S.RelationshipAddButtonBox>
                        <S.AddButton onClick={handleAddButton}>추가</S.AddButton>
                    </S.RelationshipAddButtonBox>

                    

                </S.EditDiagramContainer>


            </S.ClassMid>
            <S.ClassRight>
                <S.ClassTitleText>VIEW CODE</S.ClassTitleText>
                <S.ClassRightContainer>
                    {/* viewCode 상태가 있을 때만 ViewCode를 렌더링 */}
                    {viewCode && (
                        <ViewCode
                            className={viewCode.className}
                            variables={viewCode.variables}
                            methods={viewCode.methods}
                        />
                    )}                   
                    {/* Template */}
                </S.ClassRightContainer>

            </S.ClassRight>
        </S.ClassLayout>
    )
}

export default ClassDiagram;