import * as S from './styles/SelectedRepoModalStyle';
import './styles/calendar-style.css';
import { useState, useRef } from 'react';
import Calendar from "react-calendar";
import moment from "moment";
// image
import UploadIcon from '../../assets/upload-img-icon.png';

function InputRepoInfo({ onClickCreateBtn, onTitleChange, onImageChange, onDateChange }) {
    const [modalOpen, setModalOpen] = useState(true);
    const [imgPath, setImgPath] = useState(""); // 이미지 경로를 문자열로 저장하는 변수
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState(null); // 프로젝트 시작 날짜
    const [endDate, setEndDate] = useState(null); // 프로젝트 끝 날짜
    const imgRef = useRef(null);
    const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2; // 사진의 크기를 제한

    const [isClickSettingDate, setIsClickSettingDate] = useState(false);
    const handleCancleBtn = () => {
        setModalOpen(!modalOpen);
    };

    const handleCreateButton = () => {
        onClickCreateBtn();
    }

    const previewImage = () => {
        if (imgRef.current && imgRef.current.files) {
            const img = imgRef.current.files[0];
            if (img.size > MAX_IMAGE_SIZE_BYTES) {
                alert("최대 2MB까지 업로드 가능합니다.");
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                const imgElement = new Image();
                imgElement.src = reader.result;

                imgElement.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const MAX_WIDTH = 400;
                    const MAX_HEIGHT = 250;
                    let width = imgElement.width;
                    let height = imgElement.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(imgElement, 0, 0, width, height);

                    const resizedImageUrl = canvas.toDataURL('image/png');
                    setImgPath(resizedImageUrl);
                    onImageChange(resizedImageUrl); // 이미지 변경 시 부모 컴포넌트에 전달
                };
            };
        }
    };

    const changeDate = (dates) => {
        const [start, end] = dates;

        if (start && end) {
            setStartDate(start);
            setEndDate(end);
            setIsClickSettingDate(false); // 날짜가 선택되면 달력을 닫습니다.
            onDateChange(start, end); // 날짜 변경 시 부모 컴포넌트에 전달
        }
    };

    const handleOpenCalendar = () => {
        setIsClickSettingDate(true); // 달력을 열도록 설정
    };

    // 제목
    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        onTitleChange(newTitle); // 제목 변경 시 부모 컴포넌트에 전달
    };


    return (
        <>
            <S.ModalTitle>레포지토리<br />기본정보</S.ModalTitle>
            <S.ModalCloseBtn
                src={require("../../assets/images/close-modal-icon.png")}
                onClick={handleCancleBtn}
            />
            <S.ReposContainer>
                <S.InputRepoInfoContainer>
                    <S.SettingRepoInfo>
                        <S.SettingTitleText>제목 설정</S.SettingTitleText>
                        <S.InputTitle
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </S.SettingRepoInfo>
                    <S.SettingRepoInfo>
                        <S.SettingTitleText>썸네일 설정</S.SettingTitleText>
                        <S.InputThumnail>
                            <label htmlFor='photo'>
                                <img
                                    className='dd'
                                    src={imgPath ? imgPath : UploadIcon}
                                    alt='이미지 업로드'
                                />
                            </label>

                            <input
                                type='file'
                                id='photo'
                                name='photo'
                                accept='.png, .jpeg, .jpg'
                                onChange={previewImage}
                                ref={imgRef}
                            />
                        </S.InputThumnail>
                    </S.SettingRepoInfo>
                    <S.SettingRepoInfo>
                        <S.SettingTitleText>기간 설정</S.SettingTitleText>
                        <S.InputDate>
                            {isClickSettingDate ? (
                                <Calendar
                                    onChange={changeDate}
                                    selectRange={true}
                                    formatDay={(locale, date) => moment(date).format("DD")}
                                />
                            ) : startDate && endDate ? (
                                <span>{`${moment(startDate).format('YYYY/MM/DD')} - ${moment(endDate).format('YYYY/MM/DD')}`}</span>
                            ) : (
                                <span onClick={handleOpenCalendar}>날짜를 선택하세요</span>
                            )}
                        </S.InputDate>
                    </S.SettingRepoInfo>
                    <S.CreateButton onClick={handleCreateButton}>생성하기</S.CreateButton>
                </S.InputRepoInfoContainer>
            </S.ReposContainer>
        </>
    );
}

export default InputRepoInfo;
