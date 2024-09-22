import Modal from 'react-modal';
import { useEffect, useState, useRef } from 'react';
import * as S from './styles/SelectedRepoModalStyle';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/style.css';

// import required modules
import { Pagination } from 'swiper/modules';

// 컴포넌트
import UserRepo from '../retro/UserRepo';
import SelectRepo from './SelectRepo';
import InputRepoInfo from './InputRepoInfo';

function RepoSettingModal({ closeModal, onSelectProject, onSelectedProjectId, onClickCreateBtn, onTitleChange, onImageChange, onDateChange, stateBaseInfo  }) {
  // const [user, setUser] = useState([]); // 사용자 정보
  // const [repos, setRepos] = useState([]);

  const [modalOpen, setModalOpen] = useState(true);
  const [isBaseInfoSet, setIsBaseInfoSet] = useState(false); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const swiperRef = useRef(null); // Swiper 인스턴스 참조용

  const handleCancleBtn = () => {
    setModalOpen(!modalOpen);
    closeModal();
  };

  const handleProjectSelect = (projectId) => {
    console.log("handleProjectSelect에서 선택한 projectId: ", projectId);
    onSelectProject();
    onSelectedProjectId(projectId);
    //setIsBaseInfoSet(true);
  };

  const handleClickCreateBtn = () => {
    onClickCreateBtn();
  }

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // 다음 슬라이드로 이동
    }
  };

  useEffect(() => {
    if(isBaseInfoSet) {
      // console.log("isBaseInfoset: " + isBaseInfoSet);
      stateBaseInfo();
    }
  },[isBaseInfoSet]);

  return (
    <Modal
      isOpen={modalOpen}
      ariaHideApp={false}
      parentSelector={() => document.body}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: "100%",
          height: "100vh",
          zIndex: "1000",
          position: "fixed",
          top: "0",
          left: "0",

        },
        content: {
          background: 'white',
          border: '2px solid',
          borderRadius: '22px',
          padding: 'none',
          zIndex: "1100",
          position: "absolute",
          width: '40%',
          height: '80vh', // Modal의 높이를 적절히 조정
          display: 'flex',
          flexDirection: 'column',
          top: '10%',
          left: '33%',
          overflow: 'hidden',
        },
      }}
    >
      <Swiper
        ref={swiperRef} // Swiper 인스턴스에 대한 참조
        direction="horizontal"
        slidesPerView='auto'
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        style={{ height: '100%', position: 'relative' }}
      >
        <SwiperSlide>
          <SelectRepo
           onCancelBtn={() => handleCancleBtn}
           onSelectProject={handleProjectSelect} 
           onClickCreateBtn={onClickCreateBtn}
           onIsBaseInfoSet={(baseInfoSet) => setIsBaseInfoSet(baseInfoSet)}
           onNextSlide={handleSlideNext}
          />
        </SwiperSlide>
        {!isBaseInfoSet ? (
          <SwiperSlide>
            <InputRepoInfo 
             onCancelBtn={() => handleCancleBtn}
             onClickCreateBtn={onClickCreateBtn}
             onTitleChange={onTitleChange}
             onImageChange={onImageChange}
             onDateChange={onDateChange}
            />
          </SwiperSlide>
        ) : (
          null
        )}

      </Swiper>
    </Modal>
  );
}

export default RepoSettingModal;