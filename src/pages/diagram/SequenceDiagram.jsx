import { useState, useEffect, useRef } from 'react';
import ViewCode from '../../components/Diagram/ViewCode.jsx';
import * as S from './DiagramStyle.jsx';
import axios from 'axios';
import mermaid from 'mermaid';
import { API } from '../../api/axios.js';
import SequenceEditor from '../../components/Diagram/SequenceEditor.jsx';
import SequenceRelationshipEditor from '../../components/Diagram/SequenceRelationshipEditor.jsx';
import ThemeTemplate from '../../components/Diagram/ThemeTemplate.jsx';
import Loader from '../../components/Diagram/Loader.jsx';

function SequenceDiagram({ selectedProjectId, onClickCreateBtn, viewCode, setViewCode }) {
    const [codeKey, setCodeKey] = useState(0);
    const [sequenceCode, setSequenceCode] = useState(null); // 시퀀스 다이어그램 코드 담는 변수
    const [className1, setClassName1] = useState('');
    const [className2, setClassName2] = useState('');
    const [selectedTheme, setSeletedTheme] = useState(null); // 선택한 테마
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    const [isClickGenerateAiBtn, setIsClickGetnerateAiBtn] = useState(false); // AI 자동생성 버튼 클릭 상태


    // viewCode가 변할 때마다 실행 -> Mermaid 초기화 및 다이어그램 렌더링
    useEffect(() => {
        mermaid.initialize({ startOnLoad: false });
        const renderDiagram = async () => {
            console.log("Rendering diagram with viewCode:", viewCode);
            const diagramContainer = document.getElementById("diagram-container");
            if (diagramContainer && viewCode !== null) {
                if (viewCode.trim() === '') {
                    diagramContainer.innerHTML = ''; // 전체 삭제 시 다이어그램 초기화
                } else {
                    // Mermaid의 render를 사용하여 수동 렌더링
                    try {
                        const { svg } = await mermaid.render('generatedDiagram', viewCode);
                        diagramContainer.innerHTML = svg;
                            const svgElement = diagramContainer.querySelector('svg');
                            if (svgElement) {
                                try {
                                    const rect = svgElement.getBBox();
                                    console.log("BoundingClientRect:", rect);
                                } catch (error) {
                                    console.warn("getBBox() error ignored:", error);
                                }
                            }
    
                    } catch (error) {
                        console.error("Mermaid rendering error:", error);
                    }
                }
            }
        };

        if (!loading && viewCode) {
            setTimeout(renderDiagram, 100);
        }

    }, [viewCode, loading]);

    // viewCode가 수정될 때 호출되는 함수
    const handleViewCodeSave = () => {
        console.log("ViewCode가 수정되었습니다!\n" + viewCode);
        //fetchEditClassCode(viewCode); // 코드 수정 API 호출
    };

    // 추가 버튼 핸들러
    const handleAddButton = () => {
        if (className1 && className2) {
            const newSequenceCode = `
            participant ${className1} as ${className2}
            `;
            setViewCode(prevCode => prevCode + newSequenceCode);
            setCodeKey(prevKey => prevKey + 1);
        } else {
            console.log("두 클래스 이름을 모두 입력해야 합니다.");
        }
    };
    // 관계 추가 핸들러
    const handleAddRelation = ({ classA, classB, relation, message }) => {
        const relationMermaidSyntax = {
            '요청': '->',
            '응답': '-->>',
        };
        const newRelationCode = `
                ${classA} ${relationMermaidSyntax[relation]} ${classB} : "${message}"
            `;
        setViewCode(prevCode => prevCode + newRelationCode);
        setCodeKey(prevKey => prevKey + 1);
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
        setLoading(true); // 로딩 시작
        try {
            const requestBody = { repoId: selectedProjectId };
            const response = await API.patch(`api/pnd/diagram/sequence-gpt`, requestBody);

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
    const getSequenceMermaid = async () => {
        try {
            const response = await API.get(`api/pnd/diagram/sequence`, {
                params: {
                    repoId: selectedProjectId, // 요청에 쿼리 매개변수로 repoId 전달
                },
            });
            if (response.status === 200) {
                const data = response.data.data;
                if (data) {
                    console.log('Sequence 코드:', data);
                    setViewCode(data);
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

    // 전체 삭제 핸들러 함수
    const handleDeleteAllBtn = () => {
        setViewCode(' '); // viewCode를 빈 문자열로 설정하여 모든 다이어그램 요소 삭제
        setCodeKey(prevKey => prevKey + 1); // 코드 키 업데이트
    }

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


    // 컴포넌트가 마운트될 때 레포지토리 데이터를 가져옴
    useEffect(() => {
        if (selectedProjectId && onClickCreateBtn) {
            //fetchGpt();
            getSequenceMermaid();
        }
    }, [selectedProjectId]);


    return (
        <S.SequenceLayout>
            {loading && <Loader />}
            <S.SequencePageLeft>
                <S.ClassTitleTextBox>
                    <S.DiagramTypeTitleText>SEQUENCE DIAGRAM</S.DiagramTypeTitleText>
                </S.ClassTitleTextBox>
                <S.ClassEditButtons>
                    <S.DeleteAllBtn onClick={handleDeleteAllBtn}>전체 삭제</S.DeleteAllBtn>
                    <S.Divider />
                    <S.GenerateAiBtn onClick={handleGenerateAi}>AI 자동생성</S.GenerateAiBtn>
                </S.ClassEditButtons>

                <S.SequenceResultBox>
                    <div id="diagram-container">
                        {/* Mermaid 다이어그램이 이곳에 렌더링됩니다 */}
                    </div>
                </S.SequenceResultBox>
                <S.ClassTitleTextBox>
                    <S.DiagramTypeTitleText>EDIT DIAGRAM</S.DiagramTypeTitleText>
                </S.ClassTitleTextBox>
                <S.EditDiagramContainer>
                    <S.ClassAddButtonBox>
                        <S.AddButton onClick={handleAddButton}>추가</S.AddButton>
                    </S.ClassAddButtonBox>
                    <SequenceEditor
                        className1={className1}
                        setClassName1={setClassName1}
                        className2={className2}
                        setClassName2={setClassName2}
                    />
                    <SequenceRelationshipEditor onAddRelation={handleAddRelation} />

                </S.EditDiagramContainer>
            </S.SequencePageLeft>
            {/* <S.ClassMid>
                <S.ClassTitleTextBox>
                    <S.DiagramTypeTitleText>EDIT DIAGRAM</S.DiagramTypeTitleText>
                </S.ClassTitleTextBox>
                <S.EditDiagramContainer>
                    <S.ClassAddButtonBox>
                        <S.AddButton onClick={handleAddButton}>추가</S.AddButton>
                    </S.ClassAddButtonBox>
                    <SequenceEditor
                        className1={className1}
                        setClassName1={setClassName1}
                        className2={className2}
                        setClassName2={setClassName2}
                    />
                    <SequenceRelationshipEditor onAddRelation={handleAddRelation} />

                </S.EditDiagramContainer>
            </S.ClassMid> */}

            <S.SequencePageRight>
                <S.ClassTitleTextBox>
                    <S.DiagramTypeTitleText>VIEW CODE</S.DiagramTypeTitleText>
                </S.ClassTitleTextBox>
                <S.SequenceCodeBox>
                    {viewCode && (
                        <ViewCode
                            key={codeKey}
                            viewCode={viewCode}
                            setViewCode={setViewCode}
                            onSave={handleViewCodeSave}
                        />
                    )}
                </S.SequenceCodeBox>
                <ThemeTemplate
                    onSaveTheme={saveSelectedTheme}
                />

            </S.SequencePageRight>
        </S.SequenceLayout>
    )
}

export default SequenceDiagram;