import ViewCode from '../../components/Diagram/ViewCode.jsx';
import * as S from './DiagramStyle.jsx';

function SequenceDiagram({selectedProjectId}) {
    return (
        <S.SequenceLayout>
            <S.SequenceResultBox>

            </S.SequenceResultBox>
            <S.SequenceCodeBox>
                <ViewCode
                />

            </S.SequenceCodeBox>
        </S.SequenceLayout>
    )
}

export default SequenceDiagram;