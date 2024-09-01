import * as S from './DiagramStyle'


function ViewCode({ className, variables, methods }) {
    const generateCode = () => {
        return `
            class ${className} {
                ${variables ? variables.split(',').map(variable => `let ${variable};`).join('\n    ') : ''}
                ${methods ? methods.split(',').map(method => `${method}() {}`).join('\n    ') : ''}
            }
                    `;
    };

    return (
        <S.ViewCodeContainer>
            <S.CodeTextArea>
                {generateCode()}
            </S.CodeTextArea>

        </S.ViewCodeContainer>
    )
}

export default ViewCode;