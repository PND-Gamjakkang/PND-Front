import Modal from 'react-modal';
import { useEffect, useState, useRef } from 'react';
import * as S from './SelectedRepoModalStyle'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

// 컴포넌트
import UserRepo from '../retro/UserRepo';

function SelectRepoModal({ closeModal, onSelectProject }) {
  const [user, setUser] = useState([]); // 사용자 정보
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [repos, setRepos] = useState([]);

  const [modalOpen, setModalOpen] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef(null);

  // 유저토큰
  const userToken = localStorage.getItem('token');

  const handleCancleBtn = () => {
    setModalOpen(!modalOpen);
    closeModal();
  }
    // 3개씩 나눠서 슬라이드로 표시하기 위한 작업
    const slides = [];
    for (let i = 0; i < repos.length; i += 3) {
      slides.push(repos.slice(i, i + 3));
    }
  
    // 통신 - 로그인 사용자 확인
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          axios({
              method: "GET",
              url: `http://localhost:8080/api/pnd/user/profile`,
              headers: {
                  'Authorization': `Bearer ${token}`
              }

          }).then((res) => {
              setUser(res.data.data);
              console.log("사용자: " + res.data);

          }).catch((err) => {
              console.log("error");
          })
      }
  }, []);

  // API 통신
  const fetchRepository = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/api/pnd/repo`,
        headers: {
          'Authorization': `Bearer ${userToken}`, // Authorization 헤더에 토큰을 포함
          'Content-Type': 'application/json' // JSON 형식의 요청 본문
        }
      });

      if (response.status === 200) {
        const data = response.data.data;
        const newRepos = Array.isArray(data) ? data : [data];
        response.data.data.forEach((repo, index) => {
          console.log(`레포 ${index + 1}:`, repo);
        });
        setRepos(newRepos);
      } else {
        console.error("HTTP error: ", response.status, response.statusText);
      }
    } catch (err) {
      console.log("repository error", err);
    }
  };

  // 컴포넌트가 마운트될 때 레포지토리 데이터를 가져옴
  useEffect(() => {
    fetchRepository();
  }, []);

  return (
    <Modal
      isOpen={modalOpen}
      //onRequestClose={handleCancleBtn}
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
          width: '37%', // 기본 너비 설정
          height: '600px', // 기본 높이 설정
          maxWidth: '100%', // 최대 너비 제한
          maxHeight: '100%', // 최대 높이 제한
          display: 'flex',
          flexDirection: 'column',
          top: '10%',
          left: '33%',
          overflow: 'hidden', // 스크롤 제거

        },
      }}
    >
      <S.ModalTitle>레포지토리를<br />선택해주세요.</S.ModalTitle>
      <S.ModalCloseBtn
        src={require("../../assets/images/close-modal-icon.png")}
        onClick={handleCancleBtn}
      />
      <S.ReposContainer style={{ height: '100%' }}>
        {/* 레포지토리 개수만큼 불러오기 */}
        <Swiper
          direction="horizontal" // 슬라이드를 세로로 배치
          slidesPerView='auto' // 한 번에 3개의 슬라이드를 표시
          spaceBetween={15} // 슬라이드 간의 간격 설정
          pagination={{
            clickable: true, // 페이지네이션을 클릭할 수 있게 설정
          }}
          modules={[Pagination]} // Pagination 모듈 사용
          style={{ height: '100%' }}
        >
     {slides.map((slideRepos, slideIndex) => (
            <SwiperSlide key={slideIndex} style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
              {slideRepos.map((repo, index) => (
                <UserRepo
                  key={index}
                  repoId={repo.id}
                  userImg={user.image}
                  userName={user.name}
                  repoName={repo.repoName}
                  repoDescription={repo.repoDescription }
                  repoStars={repo.repoStars}
                  repoLanguage={repo.repoLanguage}
                  repoForks={repo.repoForksCount}
                  repoOpenIssues={repo.repoOpenIssues}
                  repoWatchers={repo.repoWatcher}
                  repoCreatedAt={repo.createdAt}
                  onClick={() => onSelectProject(repo)}
                />
              ))}
            </SwiperSlide>
          ))}        
        </Swiper>
      </S.ReposContainer>

    </Modal>
  )
}

export default SelectRepoModal;