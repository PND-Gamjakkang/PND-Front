import * as S from './DiagramStyle.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import mermaid from 'mermaid';

// component
import ClassEditor from '../../components/Diagram/ClassEditor.jsx';
import RelationshipEditor from '../../components/Diagram/RelationshipEditor.jsx';
import ViewCode from '../../components/Diagram/ViewCode.jsx';

function ClassDiagram({ selectedProjectId }) {
    const [codeKey, setCodeKey] = useState(0);
    const [className, setClassName] = useState('');
    const [variables, setVariables] = useState('');
    const [methods, setMethods] = useState('');
    const [isClickGenerateAiBtn, setIsClickGetnerateAiBtn] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null); // 선택된 클래스 이름
    const [viewCode, setViewCode] = useState(`
        classDiagram
            class User {
                +String id
                +String name
                +String email
                +String password
                +create()
                +login()
            }
            
            class Post {
                +String id
                +String title
                +String content
                +DateTime createdAt
                +DateTime updatedAt
                +createPost()
                +editPost()
                +deletePost()
            }
            
            class Comment {
                +String id
                +String content
                +DateTime createdAt
                +DateTime updatedAt
                +createComment()
                +editComment()
                +deleteComment()
            }
        
            class AuthService {
                +login(user: User)
                +register(user: User)
                +logout()
            }
        
            class PostService {
                +createPost(post: Post)
                +editPost(post: Post)
                +deletePost(post: Post)
                +getPosts()
            }
        
            class CommentService {
                +createComment(comment: Comment)
                +editComment(comment: Comment)
                +deleteComment(comment: Comment)
                +getComments(post: Post)
            }
        
            User --> Post : "creates"
            Post --> Comment : "has"
            User --> Comment : "creates"
            AuthService --> User : "manages"
            PostService --> Post : "manages"
            CommentService --> Comment : "manages"
    `);
    // Mermaid 초기화
    // useEffect(() => {
    //     mermaid.initialize({ startOnLoad: false });
    // }, []);
    useEffect(() => {
        const renderDiagram = () => {
            const diagramContainer = document.getElementById("diagram-container");
            if (diagramContainer && viewCode.trim()) {
                diagramContainer.innerHTML = `<div class="mermaid">${viewCode}</div>`;
                try {
                    mermaid.init(undefined, diagramContainer.querySelector('.mermaid'));
                } catch (error) {
                    console.error("Mermaid rendering error:", error);
                }
            }
        };

        renderDiagram();
    }, [viewCode]);



    // 코드가 변화될때마다 실행
    useEffect(() => {
        if (isClickGenerateAiBtn) {
            setIsClickGetnerateAiBtn(false);  // 다이어그램 생성 후 상태를 다시 false로 변경
        }
    }, [isClickGenerateAiBtn]);


    // 추가 버튼 핸들러
    const handleAddButton = () => {
        const newClassCode = `
        class ${className} {
            ${variables.split('\n').map(v => `+${v}`).join('\n')}
            ${methods.split('\n').map(m => `+${m}()`).join('\n')}
        }
    `;
        setViewCode(prevCode => prevCode + newClassCode);
        setCodeKey(prevKey => prevKey + 1);
    };

    // 관계 추가 핸들러
    const handleAddRelation = ({ classA, classB, relation }) => {
        const relationMermaidSyntax = {
            '연관': '--',
            '일반화': '<|--',
            '실체화': '<|..',
            '의존': '-->',
            '인터페이스 의존': '..|>',
            '합성': '*--',
            '집합': 'o--',
        };
        const newRelationCode = `
            ${classA} ${relationMermaidSyntax[relation]} ${classB} : "${relation}"
        `;
        setViewCode(prevCode => prevCode + newRelationCode);
        setCodeKey(prevKey => prevKey + 1);
    };

    // 클래스 클릭 핸들러
    const handleClassClick = (className) => {
        setSelectedClass(className);
    };

    // 클래스 삭제 핸들러
    const handleDeleteClass = () => {
        if (selectedClass) {
            const updatedCode = viewCode.replace(new RegExp(`class ${selectedClass} {[^}]*}`, 'g'), '');
            setViewCode(updatedCode);
            setSelectedClass(null);
            setCodeKey(prevKey => prevKey + 1);
        }
    };

    // 선택된 클래스 이름 알기
    useEffect(() => {
        console.log(selectedClass);
        handleDeleteClass();
    }, [selectedClass]);

    // useEffect(() => {
    //     // `viewCode` 상태가 업데이트된 후 로그를 확인합니다.
    //     console.log("Updated viewCode:", viewCode);
    //     mermaid.initialize({ startOnLoad: true });
    //     mermaid.contentLoaded();
    // }, [viewCode]);



    // 유저토큰
    const userToken = localStorage.getItem('token');

    useEffect(() => {
        console.log("클래스네임 변경");
    }, [className]);

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
            const response = await authInstance.patch(`api/pnd/diagram/class-gpt`, requestBody);

            if (response.status === 200) {
                const data = response.data.data;
                console.log('GPT 분석 결과:', data);
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
        }
    }, [selectedProjectId]);

    // 다이어그램 생성
    const generateDiagram = () => {
        setIsClickGetnerateAiBtn(true);
    };

    return (
        <S.ClassLayout>
            <S.ClassLeft>
                <S.ClassTitleText>CLASS DIAGRAM</S.ClassTitleText>
                <S.ClassEditButtons>
                    <S.RemoveComponentBtn onClick={handleDeleteClass}>컴포넌트 삭제</S.RemoveComponentBtn>
                    <S.Divider />
                    <S.RemoveAllBtn>전체 삭제</S.RemoveAllBtn>
                    <S.Divider />
                    <S.GenerateAiBtn onClick={generateDiagram}>AI 자동생성</S.GenerateAiBtn>
                </S.ClassEditButtons>
                <S.ClassDiagramResultBox>
                    <div id="diagram-container" onClick={(e) => handleClassClick(e.target.innerText)}>
                        {/* Mermaid 다이어그램이 이곳에 렌더링됩니다 */}
                    </div>
                </S.ClassDiagramResultBox>
            </S.ClassLeft>
            <S.ClassMid>
                <S.ClassTitleText>EDIT DIAGRAM</S.ClassTitleText>
                <S.EditDiagramContainer>
                    <S.ClassAddButtonBox>
                        <S.AddButton onClick={handleAddButton}>추가</S.AddButton>
                    </S.ClassAddButtonBox>
                    <ClassEditor
                        className={className}
                        setClassName={setClassName}
                        variables={variables}
                        setVariables={setVariables}
                        methods={methods}
                        setMethods={setMethods}
                    />
                    <RelationshipEditor onAddRelation={handleAddRelation} />
                    <S.RelationshipAddButtonBox>
                        {/* <S.AddButton onClick={handleAddButton}>추가</S.AddButton> */}
                    </S.RelationshipAddButtonBox>

                </S.EditDiagramContainer>
            </S.ClassMid>
            <S.ClassRight>
                <S.ClassTitleText>VIEW CODE</S.ClassTitleText>
                <S.ClassRightContainer>
                    <S.ClassViewCode>
                        {viewCode && (
                            <ViewCode
                                key={codeKey}
                                viewCode={viewCode}
                                setViewCode={setViewCode}
                            />
                        )}
                    </S.ClassViewCode>
                </S.ClassRightContainer>
            </S.ClassRight>
        </S.ClassLayout>
    );
}

export default ClassDiagram;