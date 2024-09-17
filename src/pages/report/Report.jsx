import * as S from './ReportStyle.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../../api/axios.js';

// 컴포넌트
import SaveBtn from '../../components/Common/SaveButton.jsx';
import RepoSettingModal from '../../components/Common/RepoSettingModal.jsx';
import profileSvg from '../../assets/profile-south-season.svg';



function Report() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelectedProject, setIsSelectedProject] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isBaseInfoSet, setIsBaseInfoSet] = useState(null); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태

    // 각 이미지 상태 추가
    const [imageGreen, setImageGreen] = useState(null);
    const [imageSeason, setImageSeason] = useState(null);
    const [imageSouthSeason, setImageSouthSeason] = useState(null);
    const [imageNightView, setImageNightView] = useState(null);
    const [imageNightGreen, setImageNightGreen] = useState(null);
    const [imageNightRainbow, setImageNightRainbow] = useState(null);
    const [imageGitblock, setImageGitblock] = useState(null);
    const [createdAt, setCreatedAt] = useState(null); // 생성일자
    const [title, setTitle] = useState(''); // 제목


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
    }
    const postReport = async () => {
        try {
            const response = await API.post(`api/pnd/report/${selectedProjectId}`);
            console.log('selection pr id : ', selectedProjectId);
            console.log('data:', response);

            if (response.status === 201) {
                console.log('서버 응답:', response.data);
                const reportData = response.data.data
                console.log(reportData);

                saveRepoData(reportData);


            } else {
                console.error("HTTP error: ", response.status);
            }
            //return AIReadmeContent;
        }
        catch (error) {
            console.log(error);
        }
    };

    const getReport = async () => {
        try {
            const response = await API.get(`api/pnd/report/${selectedProjectId}`);

            if (response.status === 200) {
                console.log('서버 응답:', response.data);
                const reportData = response.data.data

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
    };

    useEffect(() => {

        if (isClickCreateBtn && isBaseInfoSet) {
            // postReport();
            getReport();
        }
    }, [isClickCreateBtn]);

    function setStateBaseInfo() {
        setIsBaseInfoSet(true);
    }

    return (
        <>
            <S.Report>
                <S.ReportLayout style={{ filter: isModalOpen ? 'blur(5px)' : 'none' }}>
                    <S.ReportTopBarContainer>
                        <S.ReportTitleText>GITHUB  COLLABORATION REPORT</S.ReportTitleText>
                        <SaveBtn />
                    </S.ReportTopBarContainer>
                    <S.ReportContainer>
                        <S.ReportLeft>
                            <S.Github3D>
                                {isClickCreateBtn && (
                                    <>
                                        <S.Github3DImg
                                            src={imageGreen}
                                            alt="3D GitHub Contribution Chart"
                                        />
                                        <S.Github3DImg
                                            src={imageSeason}
                                            alt="3D GitHub Contribution Chart"
                                        />
                                        <S.Github3DImg
                                            src={imageSouthSeason}
                                            alt="3D GitHub Contribution Chart"
                                        />
                                        <S.Github3DImg
                                            src={imageNightView}
                                            alt="3D GitHub Contribution Chart"
                                        />
                                    </>
                                )}
                            </S.Github3D>
                        </S.ReportLeft>
                        <S.ReportRight>
                            <S.ReportInfo>
                                <S.RepoTitle>{title}</S.RepoTitle>
                                <S.RepoDate>{startDate}</S.RepoDate>
                                <S.ReportCreateAt>{createdAt}</S.ReportCreateAt>
                            </S.ReportInfo>

                        </S.ReportRight>

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
        </>
    )
}

export default Report;