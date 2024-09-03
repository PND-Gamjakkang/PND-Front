import * as S from './DiagramStyle'
import { useState } from 'react';

// 이미지
import relationIcon1 from '../../assets/images/dependency-icon.png'
import relationshipInfoImg from '../../assets/images/relationship-info.png'

function RelationshipEditor() {
    const [selectedRelation, setSelectedRelation] = useState(''); // 현재 선택된 관계 상태

    // 각 관계에 따라 상태를 업데이트하는 함수
    const handleRelationClick = (relation) => {
        setSelectedRelation(relation);
    };

    // 관계에 따른 아이콘 매핑
    const relationIcons = {
        '연관': relationIcon1,
        //'일반화': relationIcon2,
        // ... 추가적인 관계와 아이콘 매핑
    }

    return (
        <S.RelationshipEditorContainer>
            <S.EditorTitleText>+ Add Relationship</S.EditorTitleText>
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
            <S.RelationshipInfoImg src={relationshipInfoImg}/>
        </S.RelationshipEditorContainer>
    )
}

export default RelationshipEditor;