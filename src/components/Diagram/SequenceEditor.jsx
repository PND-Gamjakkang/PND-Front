import * as S from './DiagramStyle'
import { useState } from 'react';

import AddButtonIcon from '../../assets/images/diagram-add-btn.png';

function SequenceEditor({ className1, setClassName1, className2, setClassName2 }) {
    // Method 및 Variable을 관리하는 배열 상태
    const [methodFields, setMethodFields] = useState(['']);
    const [variableFields, setVariableFields] = useState(['']);

    return (
        <S.SequenceEditorContainer>
            <S.EditorTitleText>+ Add Class</S.EditorTitleText>
            {/* <S.ClassAddButtonBox>
                <S.AddClassButton onClick={handleAddButton}>추가</S.AddClassButton>
            </S.ClassAddButtonBox> */}
            <S.InputSection>
                <S.ClassNameAndMethod>
                    <S.InputClassNameBox>
                        <S.InputTitleText>class name 1</S.InputTitleText>
                        <S.InputClassName
                            type="text"
                            placeholder="class name"
                            value={className1}
                            onChange={(e) => setClassName1(e.target.value)}
                        />

                    </S.InputClassNameBox>
                    
                </S.ClassNameAndMethod>
                <S.InputClassNameBox>
                        <S.InputTitleText>class name 2</S.InputTitleText>
                        <S.InputClassName
                            type="text"
                            placeholder="class name"
                            value={className2}
                            onChange={(e) => setClassName2(e.target.value)}
                        />
                    </S.InputClassNameBox>

            </S.InputSection>
        </S.SequenceEditorContainer>
    )
}

export default SequenceEditor;