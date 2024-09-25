import { useState, useRef } from 'react';
import Calendar from "react-calendar";
import moment from "moment";

import * as S from './styles/SelectedRepoModalStyle';
import './styles/calendar-style.css';

// image
import UploadIcon from '../../assets/upload-img-icon.png';

function InputRepoInfo({ onCancelBtn, onClickCreateBtn, onTitleChange, onImageChange, onDateChange }) {
    const [modalOpen, setModalOpen] = useState(true);
    const [imgPath, setImgPath] = useState(""); // 이미지 경로를 문자열로 저장하는 변수
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState(null); // 프로젝트 시작 날짜
    const [endDate, setEndDate] = useState(null); // 프로젝트 끝 날짜
    const imgRef = useRef(null);
    const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 5; // 사진의 크기를 제한

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
                    const MAX_HEIGHT = 200;
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

                    // const resizedImageUrl = canvas.toDataURL('image/png');
                    // setImgPath(resizedImageUrl);
                    // onImageChange(resizedImageUrl); // 이미지 변경 시 부모 컴포넌트에 전달
                    // 이미지를 Blob으로 변환하여 저장
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const resizedFile = new File([blob], img.name, { type: img.type });
                            setImgPath(URL.createObjectURL(resizedFile)); // 이미지를 미리보기 위해 URL로 변환
                            onImageChange(resizedFile); // Blob이나 File 객체를 부모 컴포넌트에 전달
                        }
                    }, img.type);
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
        setIsClickSettingDate(!isClickSettingDate); // 달력을 열도록 설정
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
                onClick={onCancelBtn()}
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
                            <label htmlFor='photo' style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%', // 전체 높이로 정렬되도록 설정
                                textAlign: 'center', // 텍스트를 가운데 정렬
                                gap: '20px',
                            }}>
                                <img
                                    className='dd'
                                    src={imgPath ? imgPath : UploadIcon}
                                    alt='이미지 업로드'
                                    style={{
                                        width: imgPath ? '100%' : '100%',  // 이미지 업로드 여부에 따라 크기 조정
                                        height: imgPath ? '100%' : '50%', // 이미지 업로드 여부에 따라 크기 조정
                                        objectFit: imgPath ? 'contain' : 'none'  // 업로드 이미지에 맞추어 조정
                                    }} // 이미지가 썸네일 크기에 맞도록 설정
                                />
                                {!imgPath && ( // imgPath가 없을 때만 텍스트가 렌더링되도록 조건부 렌더링
                                    <div style={{
                                        fontSize: '0.9rem',  // 텍스트 크기 조정
                                        lineHeight: '1.2',  // 줄 간격 조정
                                    }}>
                                        파일을 선택해주세요
                                        <br />
                                        파일 당 최대 3MB
                                    </div>
                                )}
                            </label>

                            <input
                                type='file'
                                id='photo'
                                name='photo'
                                accept='.png, .jpeg, .jpg'
                                onChange={previewImage}
                                ref={imgRef}
                                style={{ display: 'none' }} // 파일 선택 input 요소를 숨김
                            />
                        </S.InputThumnail>
                    </S.SettingRepoInfo>
                    <S.SettingRepoInfo>
                        <S.SettingTitleText>기간 설정</S.SettingTitleText>
                        <S.InputDate>
                            {isClickSettingDate && (
                                <Calendar
                                    onChange={changeDate}
                                    selectRange={true}
                                    formatDay={(locale, date) => moment(date).format("DD")}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            )}
                            {!isClickSettingDate && (startDate && endDate) ? (
                                <span onClick={handleOpenCalendar}>
                                    {`${moment(startDate).format('YYYY/MM/DD')} - ${moment(endDate).format('YYYY/MM/DD')}`}
                                </span>
                            ) : (
                                <span onClick={handleOpenCalendar}>날짜를 선택하세요</span>
                            )}
                        </S.InputDate>
                    </S.SettingRepoInfo>
                </S.InputRepoInfoContainer>
                <S.CreateButtonBox>
                    <S.CreateButton onClick={handleCreateButton}>생성하기</S.CreateButton>
                </S.CreateButtonBox>
            </S.ReposContainer>
        </>
    );
}

export default InputRepoInfo;