import Modal from 'react-modal';
import { useEffect, useState } from 'react';
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

function RepoSettingModal({ closeModal, onSelectProject, onSelectedProjectId }) {
  // const [user, setUser] = useState([]); // 사용자 정보
  // const [repos, setRepos] = useState([]);

  const [modalOpen, setModalOpen] = useState(true);
  const [isBaseInfoSet, setIsBaseInfoSet] = useState(false); // 마이프로젝트에 이미 있는 항목을 선택했는지 안했는지의 상태

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

  useEffect(() => {
    console.log("isBaseInfoset: " + isBaseInfoSet);
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
        direction="horizontal"
        slidesPerView='auto' // Show one component at a time
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
           onIsBaseInfoSet={() => setIsBaseInfoSet(true)}
          />
        </SwiperSlide>
        {!isBaseInfoSet ? (
          <SwiperSlide>
            <InputRepoInfo />
          </SwiperSlide>
        ) : (
          null
        )}

      </Swiper>
    </Modal>
  );
}

export default RepoSettingModal;
