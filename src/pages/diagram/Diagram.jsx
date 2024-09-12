import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './DiagramStyle.jsx';
import DiagramType from '../../components/Diagram/DiagramType.jsx';
import { API } from '../../api/axios.js';
import { MultipartApi } from '../../api/axios.js';
import axios from 'axios';

// image
import diagramClassIcon from '../../assets/images/diagram-class-icon.png';
import diagramClassImage from '../../assets/images/diagram-class-image.png';
import diagramSequenceIcon from '../../assets/images/diagram-sequence-icon.png';
import diagramErdIcon from '../../assets/images/diagram-erd-icon.png';
import diagramSequenceImage from '../../assets/images/diagram-sequence-image.png';
import diagramErdImage from '../../assets/images/diagram-erd-image.png';
import RepoSettingModal from '../../components/Common/RepoSettingModal.jsx';

// diagram type page
import ClassDiagram from './ClassDiagram.jsx';
import SequenceDiagram from './SequenceDiagram.jsx';
import ErdDiagram from './ErdDiagram.jsx';
import SaveBtn from '../../components/Common/SaveButton.jsx';

function Diagram() {
    const [diagramType, setDiagramType] = useState(''); // 다이어그램 종류 담는 변수
    const [isSelectedProject, setIsSelectedProject] = useState(false); // 다이어그램 생성할 프로젝트 담는 변수
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 열림/닫힘 상태
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isBaseInfoSet, setIsBaseInfoSet] = useState(null); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태

    const navigate = useNavigate(); // 선택한 다이어그램에 따라 페이지 다르게 이동하도록 하기 위한 네비게이션
    const location = useLocation();

    const putRepoInfo = async () => {
        try {
            const formData = new FormData();

            // JSON 데이터 추가
            const jsonData = {
                title: title,
                period: `${startDate} ~ ${endDate}`,
            };
            formData.append('data', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

            // 제목과 기간 추가
            // formData.append('repoId', selectedProjectId);
            // formData.append('title', title);
            // formData.append('period', `${startDate} ~ ${endDate}`);

            // 이미지 파일 추가 (이미지 파일이 존재하는 경우에만 추가)
            if (image) {
                formData.append('image', image); // 이미지 파일을 추가
            } else {
                formData.append('image', null); // 이미지가 없을 때 null로 설정
            }

            // 서버로 요청 보내기
            const response = await MultipartApi.put(`api/pnd/repo/${selectedProjectId}`, formData);

            if (response.status === 200) {
                console.log('서버 응답:', response.data);
            } else {
                console.error("HTTP error: ", response.status);
            }
        } catch (err) {
            console.log("API 통신 중 오류 발생:", err);
        }
    };


    // 다이어그램 종류 선택 시
    function handleDiagramTypeClick(type) {
        setDiagramType(type);
        console.log(type + " 다이어그램 선택");
        setIsModalOpen(true); // 모달 열기

        // 다이어그램 타입에 따라 페이지 이동
        if (type === "CLASS DIAGRAM") {
            navigate('/diagram/class');
        } else if (type === "SEQUENCE DIAGRAM") {
            navigate('/diagram/sequence');
        } else if (type === "ERD") {
            navigate('/diagram/erd');
        }
    }

    function setStateBaseInfo() {
        setIsBaseInfoSet(true);
    }

    // 선택한 프로젝트 아이디 담겼는지 확인
    useEffect(() => {
        console.log("선택한 프로젝트 아이디: " + selectedProjectId);
    }, [selectedProjectId]);

    // 생성하러가기 버튼 클릭 유무 확인
    useEffect(() => {
        console.log("생성하러가기 버튼 클릭 유무: " + isClickCreateBtn);
        setIsModalOpen(false);
    }, [isClickCreateBtn]);

    // 레포 기본 정보 저장하는 api 호출
    useEffect(() => {
        if (isClickCreateBtn && !isBaseInfoSet) { // 기본 정보가 저장되어있지 않은 상태 && 기본 정보가 이미 저장되어있다면 기본 정보를 저장한다
            putRepoInfo();
        }
    }, [isClickCreateBtn]);


    return (
        <>
            <S.Diagram>
                <S.DiagramLayout style={{ filter: isModalOpen ? 'blur(5px)' : 'none' }}>
                    <S.DiagramTopBarContainer>
                        {diagramType && isSelectedProject ? ( // 다이어그램 선택 && 프로젝트까지 선택
                            <>
                                <S.DiagramNavBar>
                                    <Link to='/diagram/class'>
                                        <S.DiagramNavLink isActive={location.pathname === '/diagram/class'}>클래스</S.DiagramNavLink>
                                    </Link>
                                    <S.Divider />
                                    <Link to='/diagram/sequence'>
                                        <S.DiagramNavLink isActive={location.pathname === '/diagram/sequence'}>시퀀스</S.DiagramNavLink>
                                    </Link>
                                    <S.Divider />
                                    <Link to='/diagram/erd'>
                                        <S.DiagramNavLink isActive={location.pathname === '/diagram/erd'}>ERD</S.DiagramNavLink>
                                    </Link>
                                </S.DiagramNavBar>
                                <SaveBtn>저장하기</SaveBtn>
                            </>
                        ) : (
                            <S.DiagramPickerParagraph>생성할 다이어그램을 선택해주세요</S.DiagramPickerParagraph>
                        )}
                    </S.DiagramTopBarContainer>
                    <S.DiagramContainer>
                        {diagramType && isClickCreateBtn ? (
                            <>
                                {location.pathname === '/diagram/class' && (
                                    <ClassDiagram
                                        selectedProjectId={selectedProjectId}
                                        onClickCreateBtn={isClickCreateBtn}
                                    />
                                )}
                                {location.pathname === '/diagram/sequence' && (
                                    <SequenceDiagram selectedProjectId={selectedProjectId} />
                                )}
                                {location.pathname === '/diagram/erd' && (
                                    <ErdDiagram selectedProjectId={selectedProjectId} />
                                )}
                            </>
                        ) : (
                            <>
                                <S.DiagramsContainer>
                                    <DiagramType
                                        typeIcon={diagramClassIcon}
                                        typeName="CLASS DIAGRAM"
                                        typeDescription={
                                            <>
                                                클래스간의 관계를 시각적으로 표현한 다이어그램입니다.<br />
                                                객체 지향 설계에서 사용되며 클래스의 속성, 메소드, 관계를 보여줍니다.
                                            </>
                                        }
                                        typeImage={diagramClassImage}
                                        onClick={() => handleDiagramTypeClick("CLASS DIAGRAM")}
                                    />
                                    <DiagramType
                                        typeIcon={diagramSequenceIcon}
                                        typeName="SEQUENCE DIAGRAM"
                                        typeDescription={
                                            <>
                                                객체 간의 상호 작용을 시간 순서에 따라 표현한 다이어그램입니다.<br />
                                                사용자의 액션과 시스템의 반응을 순차적으로 보여줍니다.
                                            </>
                                        }
                                        typeImage={diagramSequenceImage}
                                        onClick={() => handleDiagramTypeClick("SEQUENCE DIAGRAM")}
                                    />
                                    <DiagramType
                                        typeIcon={diagramErdIcon}
                                        typeName={
                                            <>
                                                ENTITY RELATIONSHIP DIAGRAM <br /> (ERD)
                                            </>
                                        }
                                        typeDescription={
                                            <>
                                                데이터베이스의 구조를 시각적으로 나타내는 다이어그램입니다.<br />
                                                엔터티와 그들 간의 관계를 표현하며 데이터 모델링에 사용됩니다.
                                            </>
                                        }
                                        typeImage={diagramErdImage}
                                        onClick={() => handleDiagramTypeClick("ERD")}
                                    />

                                </S.DiagramsContainer>
                            </>
                        )}
                    </S.DiagramContainer>
                </S.DiagramLayout>
            </S.Diagram>

            {/* 모달 렌더링 */}
            {isModalOpen && (
                <RepoSettingModal
                    closeModal={() => setIsModalOpen(false)} // 모달창 닫는 명령어 전달
                    onSelectProject={() => setIsSelectedProject(true)} // 상태 업데이트 핸들러 전달
                    onSelectedProjectId={(id) => setSelectedProjectId(id)} // 선택한 프로젝트 아이디 전달
                    onClickCreateBtn={() => setIsClickCreateBtn(true)} // 생성하기 버튼 클릭된 상태 전달
                    onTitleChange={(newTitle) => setTitle(newTitle)}
                    onImageChange={(newImage) => setImage(newImage)}
                    onDateChange={(start, end) => { setStartDate(start); setEndDate(end); }}
                    stateBaseInfo={setStateBaseInfo}
                />
            )}
        </>
    );
}

export default Diagram;