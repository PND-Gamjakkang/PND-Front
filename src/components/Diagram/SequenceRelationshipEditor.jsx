import * as S from './DiagramStyle'
import { useState } from 'react';

// 이미지
import relationIcon1 from '../../assets/images/dependency-icon.png'
import relationshipInfoImg from '../../assets/images/relationship-info.png'

function SequenceRelationshipEditor({ onAddRelation }) {
    const [selectedRelation, setSelectedRelation] = useState('연관'); // 현재 선택된 관계 상태
    const [classA, setClassA] = useState('');
    const [classB, setClassB] = useState('');
    const [message, setMessage] = useState('');

    const handleRelationClick = (relation) => {
        setSelectedRelation(relation);
    };

    const handleAddRelation = () => {
        onAddRelation({
            classA,
            classB,
            relation: selectedRelation,
            message
        });
    };

    // 관계에 따른 아이콘 매핑
    const relationIcons = {
        '연관': relationIcon1,
        //'일반화': relationIcon2,
        // ... 추가적인 관계와 아이콘 매핑
    }

    // 관계에 따른 Mermaid 문법 매핑
    const relationMermaidSyntax = {
        '요청': '->',
        '응답': '-->>',
    };

    return (
        <S.RelationshipEditorContainer>
            <S.EditorTitleText>+ Add Relationship</S.EditorTitleText>
            <S.ClassAddButtonBox>
                <S.AddRelationButton onClick={handleAddRelation}>추가</S.AddRelationButton>
            </S.ClassAddButtonBox>
            <S.RelationshipButtons>
                {/* 관계 버튼들 */}
                <S.RelationshipBtn onClick={() => handleRelationClick('요청')}>요청</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('응답')}>응답</S.RelationshipBtn>
            </S.RelationshipButtons>
            <S.SettingRelationship>
                <S.SettingRelationshipContainer>
                    <S.InputClassLeft
                        placeholder="ClassA"
                        value={classA}
                        onChange={(e) => setClassA(e.target.value)}
                    >

                    </S.InputClassLeft>
                    <S.RelationshipType>
                        {relationMermaidSyntax[selectedRelation]} {/* 선택된 관계의 Mermaid 문법 표시 */}
                    </S.RelationshipType>
                    <S.InputClassRight
                        placeholder="ClassB"
                        value={classB}
                        onChange={(e) => setClassB(e.target.value)}
                    >

                    </S.InputClassRight>
                    <S.InputMessage
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </S.SettingRelationshipContainer>
            </S.SettingRelationship>
        </S.RelationshipEditorContainer>
    )
}

export default SequenceRelationshipEditor;