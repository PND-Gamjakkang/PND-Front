import * as S from './DiagramStyle'
import { useEffect, useState } from 'react';

function ViewCode({ viewCode, setViewCode, onSave }) {
    const [editedCode, setEditedCode] = useState(viewCode);

    // textarea 값 변경 핸들러
    const handleTextareaChange = (e) => {
        setEditedCode(e.target.value);
    };

    // 수정완료 버튼 클릭 핸들러
    const handleSave = () => {
        setViewCode(editedCode);
        if (onSave) {
            onSave(); // 상위 컴포넌트에 "수정완료" 버튼이 눌렸음을 알림
        }
    };

    useEffect(() => {
        console.log("editedCode: " + editedCode);
    }, [editedCode]);

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
