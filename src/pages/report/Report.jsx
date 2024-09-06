import * as S from './ReportStyle.jsx';
import { useEffect, useState } from 'react';

// 컴포넌트
import SaveBtn from '../../components/Common/SaveButton.jsx';
import RepoSettingModal from '../../components/Common/RepoSettingModal.jsx';


function Report() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelectedProject, setIsSelectedProject] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [isClickCreateBtn, setIsClickCreateBtn] = useState(false);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleCreateBtn = () => {
        setIsClickCreateBtn(true);
    };

    useEffect(() => {
        console.log('Title:', title);
        console.log('Image:', image);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);

    },[isClickCreateBtn]);

    return (
        <>
            <S.Report>
                <S.ReportLayout style={{ filter: isModalOpen ? 'blur(5px)' : 'none' }}>
                    <S.ReportTopBarContainer>
                        <S.ReportTitleText>GITHUB  COLLABORATION REPORT</S.ReportTitleText>
                        <SaveBtn />
                    </S.ReportTopBarContainer>
                    <S.ReportContainer>


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
    
                    />
                )
            }
        </>
    )

}

export default Report;