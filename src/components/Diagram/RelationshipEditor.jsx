import * as S from './DiagramStyle'
import { useState } from 'react';

// 이미지
import relationIcon1 from '../../assets/images/dependency-icon.png'
import relationshipInfoImg from '../../assets/images/relationship-info.png'

function RelationshipEditor({onAddRelation}) {
    const [selectedRelation, setSelectedRelation] = useState('연관'); // 현재 선택된 관계 상태
    const [classA, setClassA] = useState('');
    const [classB, setClassB] = useState('');

    const handleRelationClick = (relation) => {
        setSelectedRelation(relation);
    };

    const handleAddRelation = () => {
        onAddRelation({
            classA,
            classB,
            relation: selectedRelation
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
        '연관': '--',
        '일반화': '<|--',
        '실체화': '<|..',
        '의존': '-->',
        '인터페이스 의존': '..|>',
        '합성': '*--',
        '집합': 'o--',
    };

    return (
        <S.RelationshipEditorContainer>
            <S.EditorTitleText>+ Add Relationship</S.EditorTitleText>
            <S.ClassAddButtonBox>
                <S.AddRelationButton onClick={handleAddRelation}>추가</S.AddRelationButton>
            </S.ClassAddButtonBox>
            <S.RelationshipButtons>
                {/* 관계 버튼들 */}
                <S.RelationshipBtn onClick={() => handleRelationClick('연관')}>연관</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('일반화')}>일반화</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('실체화')}>실체화</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('의존')}>의존</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('인터페이스 의존')}>인터페이스 의존</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('합성')}>합성</S.RelationshipBtn>
                <S.RelationshipBtn onClick={() => handleRelationClick('집합')}>집합</S.RelationshipBtn>
            </S.RelationshipButtons>
            <S.RelationshipInfoImg src={relationshipInfoImg} />
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
                </S.SettingRelationshipContainer>
            </S.SettingRelationship>
        </S.RelationshipEditorContainer>
    )
}

export default RelationshipEditor;