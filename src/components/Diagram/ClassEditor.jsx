import * as S from './DiagramStyle'
import { useState } from 'react';


function ClassEditor({ className, setClassName, variables, setVariables, methods, setMethods }) {

    return (
        <S.ClassEditorContainer>
            <S.EditorTitleText>+ Add Class</S.EditorTitleText>
            <S.AddButton>추가</S.AddButton>
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
                        <S.InputTitleText>method</S.InputTitleText>
                        <S.InputMethod 
                            type="text" 
                            placeholder="method" 
                            value={methods} 
                            onChange={(e) => setMethods(e.target.value)} 
                        />
                    </S.InputMethodBox>
                </S.ClassNameAndMethod>
                <S.InputVariableBox>
                    <S.InputTitleText>variable</S.InputTitleText>
                    <S.InputClassName 
                            type="text" 
                            placeholder="variable" 
                            value={variables}
                            onChange={(e) => setVariables(e.target.value)} 
                        />

                </S.InputVariableBox>
            </S.InputSection>
        </S.ClassEditorContainer>
    )
}

export default ClassEditor;