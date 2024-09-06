import { useState, useEffect } from 'react';
import ViewCode from '../../components/Diagram/ViewCode.jsx';
import * as S from './DiagramStyle.jsx';
import axios from 'axios';
import mermaid from 'mermaid';

function SequenceDiagram({ selectedProjectId }) {
    const [codeKey, setCodeKey] = useState(0);
    const [sequenceCode, setSequenceCode] = useState(null); // 시퀀스 다이어그램 코드 담는 변수


    // Mermaid 초기화 및 다이어그램 렌더링
    useEffect(() => {
        const renderDiagram = () => {
            console.log("Rendering diagram with viewCode:", sequenceCode); // 로그 추가
            const diagramContainer = document.getElementById("diagram-container");
            if (diagramContainer && sequenceCode && sequenceCode.trim()) {
                diagramContainer.innerHTML = `<div class="mermaid">${sequenceCode}</div>`;
                try {
                    mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
                } catch (error) {
                    console.error("Mermaid rendering error:", error);
                }
            }
        };

        renderDiagram();
    }, [sequenceCode]); // viewCode가 변할 때마다 실행

    // 유저토큰
    const userToken = localStorage.getItem('token');

    // authInstance가 이미 axios 인스턴스로 정의되어 있다고 가정
    const authInstance = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
        },
    });

    // 레포지토리 gpt 분석 API 통신
    const fetchGpt = async () => {
        try {
            const requestBody = { repoId: selectedProjectId };
            const response = await authInstance.patch(`api/pnd/diagram/sequence-gpt`, requestBody);

            if (response.status === 200) {
                let data = response.data.data;
                console.log('수정되기 전 GPT 분석 결과:', data);
                // 앞쪽 백틱 두 개 제거
                if (data.startsWith('```')) {
                    data = data.substring(3);
                }

                // 뒤쪽 백틱 두 개 제거
                if (data.endsWith('```')) {
                    data = data.slice(0, -3);
                }


                // 관계와 클래스 정의를 분리하고 각 줄을 트림하여 공백을 제거합니다.
                let lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);

                // 'classDiagram' 키워드를 추가
                let formattedCode = '\n';

                // 클래스 관계와 정의를 구분하는 패턴
                const relationPattern = /(.*?) -> (.*?)/;
                const classPattern = /class (.*?) \{/;

                // 관계와 클래스 정의를 분리
                lines.forEach(line => {
                    if (relationPattern.test(line)) {
                        formattedCode += `${line}\n`;
                    } else if (classPattern.test(line)) {
                        formattedCode += `\n${line}\n`;
                    } else {
                        formattedCode += `  ${line}\n`;
                    }
                });

                console.log('수정된 GPT 분석 결과:', formattedCode);

                setSequenceCode(formattedCode);
            } else {
                console.error("HTTP error: ", response.status);
            }
        } catch (err) {
            console.log("API 통신 중 오류 발생:", err);
        }
    };

    // 선택한 레포지토리 mermaid 코드 가져오기
    const fetchSequenceMermaid = async () => {
        try {
            const response = await authInstance.get(`api/pnd/diagram/sequence`, {
                params: {
                    repoId: selectedProjectId, // 요청에 쿼리 매개변수로 repoId 전달
                },
            });
            if (response.status === 200) {
                const data = response.data.data;
                if (data) {
                    console.log('Mermaid 코드:', data);
                } else {
                    console.log('Mermaid 코드가 존재하지 않음. GPT 분석 시작...');
                    await fetchGpt(); // Mermaid 코드가 없으면 GPT 분석 시작
                }
            } else {
                console.error("HTTP error: ", response.status);
            }
        } catch (err) {
            console.log("API 통신 중 오류 발생:", err);
        }
    };

    // 컴포넌트가 마운트될 때 레포지토리 데이터를 가져옴
    useEffect(() => {
        if (selectedProjectId) {
            //fetchGpt();
            fetchSequenceMermaid();
        }
    }, [selectedProjectId]);

    return (
        <S.SequenceLayout>
            <S.SequencePageLeft>
                <S.SequenceResultBox>
                    <div id="diagram-container">
                        {/* Mermaid 다이어그램이 이곳에 렌더링됩니다 */}
                    </div>
                </S.SequenceResultBox>
                <S.GenerateAiSequenceBtn>AI 자동 생성하기</S.GenerateAiSequenceBtn>
            </S.SequencePageLeft>
            <S.SequenceCodeBox>
                {sequenceCode && (
                    <ViewCode
                        key={codeKey}
                        viewCode={sequenceCode}
                        setViewCode={setSequenceCode}
                    />
                )}
            </S.SequenceCodeBox>
        </S.SequenceLayout>
    )
}

export default SequenceDiagram;