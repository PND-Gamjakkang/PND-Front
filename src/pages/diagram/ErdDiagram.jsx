import * as S from './DiagramStyle.jsx';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import mermaid from 'mermaid';
import { API } from '../../api/axios.js';

import ViewCode from '../../components/Diagram/ViewCode.jsx';
import ThemeTemplate from '../../components/Diagram/ThemeTemplate.jsx';
import Loader from '../../components/Diagram/Loader.jsx';


function ErdDiagram({ selectedProjectId, onClickCreateBtn, viewCode, setViewCode }) {
    const [codeKey, setCodeKey] = useState(0);
    // const [erdCode, setErdCode] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [selectedTheme, setSeletedTheme] = useState(null); // 선택한 테마
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    const [isClickDeleteTableBtn, setIsClickDeleteTableBtn] = useState(false); // AI 자동생성 버튼 클릭 상태
    const [isClickGenerateAiBtn, setIsClickGetnerateAiBtn] = useState(false); // AI 자동생성 버튼 클릭 상태
    const diagramContainerRef = useRef(null); // DOM 요소를 참조하기 위한 ref 사용


    // viewCode가 변할 때마다 실행 -> Mermaid 초기화 및 다이어그램 렌더링
    useEffect(() => {
        const renderDiagram = () => {
            console.log("Rendering diagram with viewCode:", viewCode);
            const diagramContainer = document.getElementById("diagram-container");
            if (diagramContainer && viewCode !== null) {
                if (viewCode.trim() === '') {
                    diagramContainer.innerHTML = ''; // 전체 삭제 시 다이어그램 초기화
                } else {
                    diagramContainer.innerHTML = `<div class="mermaid">${viewCode}</div>`;
                    // Mermaid 렌더링을 지연시킴
                    setTimeout(() => {
                        try {
                            mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
                        } catch (error) {
                            console.error("Mermaid rendering error:", error);
                        }
                    }, 100); // 필요에 따라 100ms 지연
                }
            }
        };

        if (!loading && viewCode) {
            renderDiagram();  // 로딩이 완료된 후에만 다이어그램을 렌더링
        }

    }, [viewCode, loading]);


    const handleErdClick = (event) => {
        let target = event.target;

        // 부모 요소를 탐색하면서 텍스트가 있는 요소를 찾음
        while (target && !target.textContent.trim() && target.parentNode) {
            target = target.parentNode;
        }

        // 텍스트 추출
        const textContent = target ? target.textContent.trim() : null;

        if (textContent) {
            setTableName(textContent);
        } else {
            console.log("클릭된 요소에서 테이블 이름을 찾을 수 없습니다.");
        }

    };

    const handleDeleteTable = () => {
        setIsClickDeleteTableBtn(true);
        if (tableName && viewCode && isClickDeleteTableBtn) {
            // 1. 테이블 정의를 찾고 제거하는 정규 표현식
            const tableRegex = new RegExp(`${tableName}\\s*{[^}]*}`, 'g');
            let updatedCode = viewCode.replace(tableRegex, '');

            // 2. 테이블 이름이 포함된 관계식을 찾고 제거하는 정규 표현식
            // 예: Table1 ||--o| Table2, Table1 }|--|{ Table3 등의 관계식
            const relationRegex = new RegExp(`\\b${tableName}\\b[^\\n]*`, 'g');
            updatedCode = updatedCode.replace(relationRegex, '');


            // 상태 업데이트 및 다이어그램 재렌더링
            setViewCode(updatedCode);
            setTableName(null);
            setCodeKey(prevKey => prevKey + 1);
            setIsClickDeleteTableBtn(false);
        } else {
            console.log("제거할 테이블 이름이 없거나 ERD 코드가 없습니다.");
        }

    };

    // 전체 삭제 이벤트
    const handleDeleteAllBtn = () => {
        setViewCode(' '); // viewCode를 빈 문자열로 설정하여 모든 다이어그램 요소 삭제
        setTableName(null); // 선택된 클래스 초기화
        setCodeKey(prevKey => prevKey + 1); // 코드 키 업데이트
    }

    // 선택된 클래스 이름 알기
    useEffect(() => {
        //console.log("선택한 테이블 이름: " + tableName);
        console.log("선택한 테이블 이름: ", tableName);
        if(isClickDeleteTableBtn) handleDeleteTable();
    }, [tableName, viewCode, isClickDeleteTableBtn]);

    // viewCode가 수정될 때 호출되는 함수
    const handleViewCodeSave = () => {
        console.log("ViewCode가 수정되었습니다!\n" + viewCode);
        //fetchEditClassCode(viewCode); // 코드 수정 API 호출
    };

    // 선택한 테마로 코드 적용하는 메소드
    const saveSelectedTheme = (selectedTheme) => {
        setSeletedTheme(selectedTheme);
    }
    const handleSelectedTheme = () => {
        if (selectedTheme) {
            // Mermaid 테마 설정
            mermaid.initialize({
                theme: selectedTheme.toLowerCase() // 테마 이름을 소문자로 변환하여 적용 (light, dark 등)
            });

            // 다이어그램을 다시 렌더링
            const diagramContainer = document.getElementById("diagram-container");
            if (diagramContainer && viewCode !== null) {
                diagramContainer.innerHTML = `<div class="mermaid">${viewCode}</div>`;
                try {
                    mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
                } catch (error) {
                    console.error("Mermaid rendering error:", error);
                }
            }
        }
    }
    useEffect(() => {
        console.log("선택한 테마: " + selectedTheme);
        handleSelectedTheme();
    }, [selectedTheme]);

    // 레포지토리 gpt 분석 API 통신
    const fetchGpt = async () => {
        setLoading(true); // 로딩 시작
        try {
            const requestBody = { repoId: selectedProjectId };
            const response = await API.patch(`api/pnd/diagram/er-gpt`, requestBody);

            if (response.status === 200) {
                let data = response.data.data;
                console.log('수정되기 전 GPT 분석 결과:', data);
                // 모든 백틱(```)을 제거하는 정규식
                data = data.replace(/```/g, '');

                // 모든 '.'을 '_'로 변경
                data = data.replace(/\./g, '_');

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

                setViewCode(formattedCode);
                setCodeKey(prevKey => prevKey + 1);
            } else {
                console.error("HTTP error: ", response.status);
            }
        } catch (err) {
            console.log("API 통신 중 오류 발생:", err);
        } finally {
            // 2초 후 로딩 상태를 false로 설정
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    };

    // 선택한 레포지토리 mermaid 코드 가져오기
    const getErdMermaid = async () => {
        try {
            const response = await API.get(`api/pnd/diagram/er`, {
                params: {
                    repoId: selectedProjectId, // 요청에 쿼리 매개변수로 repoId 전달
                },
            });
            if (response.status === 200) {
                const data = response.data.data;
                if (data) {
                    console.log('ERD 코드:', data);
                    setViewCode(data);
                } else {
                    console.log('Erd Mermaid 코드가 존재하지 않음. GPT 분석 시작...');
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
        if (selectedProjectId && onClickCreateBtn) {
            //fetchGpt();
            getErdMermaid();
        }
    }, [selectedProjectId]);

    // ai 자동생성 버튼 클릭 시 gpt가 분석한 다이어그램 코드 가져오기
    useEffect(() => {
        if (isClickGenerateAiBtn) {
            fetchGpt();
        }
    }, [isClickGenerateAiBtn]);

    // ai 자동생성 버튼 true로 바꾸기
    const handleGenerateAi = () => {
        setIsClickGetnerateAiBtn(!isClickGenerateAiBtn);
    };


    return (
        <S.ErdLayout>
            {loading && <Loader/>}
            <S.ErdPageLeft>
                <S.ErdPageLeftTop>
                    <S.ErdTitleTextBox>
                        <S.DiagramTypeTitleText>ERD DIAGRAM</S.DiagramTypeTitleText>
                    </S.ErdTitleTextBox>
                    <S.ErdEditButtons>
                        <S.DeleteClassBtn onClick={handleDeleteTable} isActive={isClickDeleteTableBtn}>테이블 삭제</S.DeleteClassBtn>
                        <S.Divider />
                        <S.DeleteAllBtn onClick={handleDeleteAllBtn}>전체 삭제</S.DeleteAllBtn>
                        <S.Divider />
                        <S.GenerateAiBtn onClick={handleGenerateAi}>AI 자동생성</S.GenerateAiBtn>
                    </S.ErdEditButtons>
                </S.ErdPageLeftTop>
                <S.ErdResultBox>
                    <div id="diagram-container" onClick={(e) => handleErdClick(e)}>
                        {/* Mermaid 다이어그램이 이곳에 렌더링됩니다 */}
                    </div>
                </S.ErdResultBox>

            </S.ErdPageLeft>
            <S.ErdPageRight>
                <S.ErdCodeBox>
                    {viewCode && (
                        <ViewCode
                            key={codeKey}
                            viewCode={viewCode}
                            setViewCode={setViewCode}
                            onSave={handleViewCodeSave}
                        />
                    )}
                </S.ErdCodeBox>
                <ThemeTemplate
                    onSaveTheme={saveSelectedTheme}
                />
            </S.ErdPageRight>
        </S.ErdLayout>

    )
}

export default ErdDiagram;