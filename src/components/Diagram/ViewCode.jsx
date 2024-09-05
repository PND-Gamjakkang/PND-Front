import * as S from './DiagramStyle'
import { useState } from 'react';

function ViewCode({ viewCode, setViewCode }) {
    const [editedCode, setEditedCode] = useState(viewCode);

    // textarea 값 변경 핸들러
    const handleTextareaChange = (e) => {
        setEditedCode(e.target.value);
    };

    // 수정완료 버튼 클릭 핸들러
    const handleSave = () => {
        setViewCode(editedCode);
    };

    return (
        <S.ViewCodeContainer>
            <S.CodeTextArea
                value={editedCode}
                onChange={handleTextareaChange}
            />
            <S.SaveButton onClick={handleSave}>수정완료</S.SaveButton>
        </S.ViewCodeContainer>
    )
}

export default ViewCode;
