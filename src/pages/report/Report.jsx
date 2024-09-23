import * as S from './ReportStyle.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../../api/axios.js';
import { MultipartApi } from '../../api/axios.js';

// 컴포넌트
import SaveBtn from '../../components/Common/SaveButton.jsx';
import RepoSettingModal from '../../components/Common/RepoSettingModal.jsx';
import profileSvg from '../../assets/profile-south-season.svg';
import FileDownload from '../../components/readmeComponents/Modals/FileDownload.jsx';
import Loader from '../../components/Diagram/Loader.jsx';

function Report() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelectedProject, setIsSelectedProject] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isBaseInfoSet, setIsBaseInfoSet] = useState(null); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태
    const [isClickSaveBtn, setIsClickSaveBtn] = useState(false); // 저장하기 버튼 상태 저장 변수
    const [showFileDownload, setShowFileDownload] = useState(false);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    // 각 이미지 상태 추가
    const [imageGreen, setImageGreen] = useState(null);
    const [imageSeason, setImageSeason] = useState(null);
    const [imageNorthSeason, setImageNorthSeason] = useState(null);
    const [imageSouthSeason, setImageSouthSeason] = useState(null);
    const [imageNightView, setImageNightView] = useState(null);
    const [imageNightGreen, setImageNightGreen] = useState(null);
    const [imageNightRainbow, setImageNightRainbow] = useState(null);
    const [imageGitblock, setImageGitblock] = useState(null);
    const [createdAt, setCreatedAt] = useState(null); // 생성일자
    const [title, setTitle] = useState(''); // 제목
    const [reportType, setReportType] = useState(null); // 리포트타입 저장 변수(기본 리포트를 imageGreen으로 설정)

    const saveRepoData = (reportData) => {
        // 각 값을 상태로 설정
        setImageGreen(reportData.imageGreen);
        setImageSeason(reportData.imageSeason);
        setImageSouthSeason(reportData.imageSouthSeason);
        setImageNightView(reportData.imageNightView);
        setImageNightGreen(reportData.imageNightGreen);
        setImageNightRainbow(reportData.imageNightRainbow);
        setImageGitblock(reportData.imageGitblock);
        setCreatedAt(reportData.createdAt);
        setTitle(reportData.repoTitle);

        // 이미지 Green을 기본 리포트 타입으로 설정
        setReportType(reportData.imageGreen);
    }

    const putRepoInfo = async () => {
        try {
            const formData = new FormData();

            // JSON 데이터 추가
            const jsonData = {
                title: title,
                period: `${startDate} ~ ${endDate}`,
            };
            formData.append('data', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

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
                postReport();
            } else {
                console.error("HTTP error: ", response.status);
            }
        } catch (err) {
            console.log("API 통신 중 오류 발생:", err);
        }
    };

    const postReport = async () => {
        setLoading(true); // 로딩 시작
        try {
            const response = await API.post(`api/pnd/report/${selectedProjectId}`);
            console.log('selection pr id : ', selectedProjectId);
            if (response.status === 201) {
                const reportData = response.data.data
                const successMessage = response.data.message;
                console.log(successMessage);
                console.log(reportData);

                saveRepoData(reportData);
                getReport();
            } else {
                console.error("HTTP error: ", response.status);
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            // 2초 후 로딩 상태를 false로 설정
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    };

    const getReport = async () => {
        try {
            const response = await API.get(`api/pnd/report/${selectedProjectId}`);

            if (response.status === 200) {
                const reportData = response.data.data
                const successMessage = response.data.message;
                console.log(successMessage);
                console.log(reportData);


                saveRepoData(reportData);

            } else {
                console.error("HTTP error: ", response.status);
                postReport();
            }
            //return AIReadmeContent;
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleCreateBtn = () => {
        setIsClickCreateBtn(true);
        console.log("생성하기 버튼 누름");
    };

    // useEffect(() => {

    //     if (isClickCreateBtn && isBaseInfoSet) {
    //         //getReport();
    //         getReport(); // 기본 정보 세팅이 이미 되어 있는 레포지토리는 get만 하도록 하기
    //     }
    // }, [isClickCreateBtn]);

    function setStateBaseInfo() {
        setIsBaseInfoSet(true);
    }

    // 저장하기 버튼 클릭 메소드
    const handleSaveButtonClick = () => {
        if (selectedProjectId) {

            setShowFileDownload(!showFileDownload);
        }
    };

    // 저장하기 버튼 클릭 핸들러
    function stateSaveBtn() {
        setIsClickSaveBtn(!isClickSaveBtn);
        handleSaveButtonClick();
    }

    // 레포 기본 정보 저장하는 api 호출
    useEffect(() => {
        if (isClickCreateBtn && !isBaseInfoSet) { // 기본 정보가 저장되어있지 않은 상태 && 기본 정보가 이미 저장되어있다면 기본 정보를 저장한다
            putRepoInfo();
        } else if (isClickCreateBtn && isBaseInfoSet) {
            console.log("이미 기본 정보가 저장된 레포지토리입니다.");
            //postReport();
            getReport();
        }
    }, [isClickCreateBtn, isBaseInfoSet]);

    useEffect(() => {
        console.log(image);
    }, [image])

    // 리포트 종류 배열
    const reportTypesArray = [
        { type: 'Green', value: imageGreen },
        { type: 'Season', value: imageSeason },
        { type: 'SouthSeason', value: imageSouthSeason },
        { type: 'NightView', value: imageNightView },
        { type: 'NightGreen', value: imageNightGreen },
        { type: 'NightRainbow', value: imageNightRainbow },
        { type: 'GitBlock', value: imageGitblock }
    ];

    const handleReportType = (type) => {
        setReportType(type);
    };

    useEffect(() => {
        console.log("선택한 리포트타입: " + reportType);
    }, [reportType])

    return (
        <>
            <S.Report>
                <S.ReportLayout style={{ filter: isModalOpen ? 'blur(5px)' : 'none' }}>
                    {loading && <Loader />}
                    <S.ReportTopBarContainer>
                        <S.ReportTitleText>GITHUB  COLLABORATION REPORT</S.ReportTitleText>
                        <SaveBtn onClick={stateSaveBtn} />
                    </S.ReportTopBarContainer>
                    <S.ReportContainer>
                        <S.ReportInfo>
                            <h3>{title}</h3>
                            <div>레포트 생성 일자 : {createdAt}</div>
                        </S.ReportInfo>
                        <S.ReportTypeContainer>
                            {reportTypesArray.map((data, index) => (
                                <S.ReportTypeBtn
                                key={index}
                                onClick={() => handleReportType(data.value)}
                                isActive={reportType === data.value}
                                >
                                    {data.type}
                                </S.ReportTypeBtn>
                            ))}
                        </S.ReportTypeContainer>
                        <S.Github3D>
                            {isClickCreateBtn && reportType && (
                                <>
                                    <S.Github3DImg
                                        src={reportType}
                                        alt="reportType"
                                    />
                                </>
                            )}
                        </S.Github3D>
                    </S.ReportContainer>
                </S.ReportLayout>
            </S.Report>
            {/* 모달 렌더링 */}
            {
                !isClickCreateBtn && (
                    <RepoSettingModal
                        closeModal={() => setIsModalOpen(false)}
                        onSelectProject={() => setIsSelectedProject(true)} // 상태 업데이트 핸들러 전달
                        onSelectedProjectId={(id) => setSelectedProjectId(id)}
                        onClickCreateBtn={handleCreateBtn}
                        onTitleChange={(newTitle) => setTitle(newTitle)}
                        onImageChange={(newImage) => setImage(newImage)}
                        onDateChange={(start, end) => { setStartDate(start); setEndDate(end); }}
                        stateBaseInfo={setStateBaseInfo}
                    />
                )
            }
            {showFileDownload && (
                <FileDownload
                    page={'/report'}
                    //closeModal={closeDownloadModal}
                    selectedProjectId={selectedProjectId}
                />
            )}
        </>
    )
}

export default Report;