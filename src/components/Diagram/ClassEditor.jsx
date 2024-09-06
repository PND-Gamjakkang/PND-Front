import * as S from './DiagramStyle'
import { useState } from 'react';

import AddButtonIcon from '../../assets/images/diagram-add-btn.png';

function ClassEditor({ className, setClassName, variables, setVariables, methods, setMethods }) {
    // Method 및 Variable을 관리하는 배열 상태
    const [methodFields, setMethodFields] = useState(['']);
    const [variableFields, setVariableFields] = useState(['']);

    // Method input 필드 추가 핸들러
    const handleAddMethodField = () => {
        setMethodFields([...methodFields, '']);
    };

    // Variable input 필드 추가 핸들러
    const handleAddVariableField = () => {
        setVariableFields([...variableFields, '']);
    };

    // Method input 필드 변경 핸들러
    const handleMethodChange = (index, value) => {
        const updatedMethods = [...methodFields];
        updatedMethods[index] = value;
        setMethodFields(updatedMethods);
        setMethods(updatedMethods.join('\n'));
    };

    // Variable input 필드 변경 핸들러
    const handleVariableChange = (index, value) => {
        const updatedVariables = [...variableFields];
        updatedVariables[index] = value;
        setVariableFields(updatedVariables);
        setVariables(updatedVariables.join('\n'));
    };

    return (
        <S.ClassEditorContainer>
            <S.EditorTitleText>+ Add Class</S.EditorTitleText>
            {/* <S.ClassAddButtonBox>
                <S.AddClassButton onClick={handleAddButton}>추가</S.AddClassButton>
            </S.ClassAddButtonBox> */}
            <S.InputSection>
                <S.ClassNameAndMethod>
                    <S.InputClassNameBox>
                        <S.InputTitleText>class name</S.InputTitleText>
                        <S.InputClassName
                            type="text"
                            placeholder="class name"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />

                    </S.InputClassNameBox>
                    <S.InputMethodBox>
                        <S.AddElementButton src={AddButtonIcon} onClick={handleAddMethodField} />
                        <S.InputTitleText>method</S.InputTitleText>
                        {methodFields.map((method, index) => (
                            <S.InputMethod
                                key={index}
                                type="text"
                                placeholder={`method ${index + 1}`}
                                value={method}
                                onChange={(e) => handleMethodChange(index, e.target.value)}
                            />
                        ))}
                    </S.InputMethodBox>
                </S.ClassNameAndMethod>
                <S.InputVariableBox>
                    <S.AddElementButton src={AddButtonIcon} onClick={handleAddVariableField} />
                    <S.InputTitleText>variable</S.InputTitleText>
                    {variableFields.map((variable, index) => (
                        <S.InputClassName
                            key={index}
                            type="text"
                            placeholder={`variable ${index + 1}`}
                            value={variable}
                            onChange={(e) => handleVariableChange(index, e.target.value)}
                        />
                    ))}

                </S.InputVariableBox>
            </S.InputSection>
        </S.ClassEditorContainer>
    )
}

export default ClassEditor;