import * as S from './styles/SelectedRepoModalStyle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../api/axios';

// 컴포넌트
import UserRepo from '../retro/UserRepo';

function SelectRepo({ onCancelBtn, onSelectProject, onClickCreateBtn, onIsBaseInfoSet, onNextSlide }) {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCancleBtn = () => {
    setModalOpen(!modalOpen);
    //closeModal();
  };
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [pendingRepo, setPendingRepo] = useState(null); // 임시로 선택된 레포지토리 ID
  const [user, setUser] = useState([]); // 사용자 정보
  const [repos, setRepos] = useState([]);
  const [isBaseInfoSet, setIsBaseInfoSet] = useState(false); // 기본 정보 저장 유무

  const handleProjectSelection = (repoId, repoName) => {
    // console.log("handleProjectSelect에서 선택한 repoId: ", repoId);
    setSelectedRepo(repoId); // 선택된 레포지토리 ID 설정
    onSelectProject(repoId); // 선택된 레포지토리 ID를 RepoSettingModal로 전달
  };

  const handleIsSwiper = () => {
    onIsBaseInfoSet(true);
  }

  // 유저토큰
  const userToken = localStorage.getItem('token');

  // 통신 - 로그인 사용자 확인
  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo'); // 문자열로 저장되어 있음
    if (userInfo) {
      // 문자열로 저장된 userInfo를 객체로 변환
      const parsedUserInfo = JSON.parse(userInfo);
      setUser(parsedUserInfo);
      console.log('User Info:', parsedUserInfo); // 객체로 출력
    }
  }, []);

  // API 통신
  const fetchRepository = async () => {
    try {
      const response = await API.get(`/api/pnd/repo`);

      if (response.status === 200) {
        const data = response.data.data;
        const newRepos = Array.isArray(data) ? data : [data];
        setRepos(newRepos);
        // console.log("레포지토리: " + JSON.stringify(newRepos, null, 2));
      } else {
        // console.error("HTTP error: ", response.status, response.statusText);
      }
    } catch (err) {
      // console.log("repository error", err);
    }
  };

  // 컴포넌트가 마운트될 때 레포지토리 데이터를 가져옴
  useEffect(() => {
    fetchRepository();
  }, []);

  // 레포지토리 클릭했을 때 메소드
  const handleRepoClick = (repoId, repoName, baseInfoSet) => {
    if (selectedRepo === repoId) {
      // setSelectedRepo(null); // 이미 선택된 경우, 선택 해제
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // handleProjectSelection(repoId, repoName);
      // console.log("선택한 레포의 baseInfoSet의 값: " + baseInfoSet);
    } else if (selectedRepo === null) { // 처음 눌렀을 때, 다른 거 눌렀을 때
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // setSelectedRepo(repoId); // 새로운 항목 선택
      // handleProjectSelection(repoId, repoName);
      if (baseInfoSet === true) {
        handleIsSwiper();
        setIsBaseInfoSet(true);
      } else {
        setIsBaseInfoSet(false);
        onIsBaseInfoSet(false);

      }
    } else {
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // setSelectedRepo(repoId); // 다른 레포 선택된 경우, 선택 해제
      // handleProjectSelection(repoId, repoName);
    }
  };

  // 생성하기 버튼 눌렀을 때
  // 생성하기 버튼 눌렀을 때
  const handleConfirmSelection = () => {
    console.log('pending Repo : ', pendingRepo);
    console.log('isBaseInfoSet : ', isBaseInfoSet);
    if (pendingRepo && !isBaseInfoSet) { // 레포 선택했고, 기본 정보가 저장되어 있지 않으면 다음 모달페이지로 이동
      handleProjectSelection(pendingRepo);
      onNextSlide(); // 선택 완료 시 다음 슬라이드로 이동

    } else if (pendingRepo && isBaseInfoSet) { // 레포 선택했고, 이미 기본 정보가 저장되어 있는 레포면 생성하기 버튼 클릭 true상태로 바꾸고 해당 다이어그램 페이지로 이동
      handleProjectSelection(pendingRepo);
      onClickCreateBtn();
    }

  };
  return (
    <>
      <S.ModalTitle>레포지토리를<br />선택해주세요.</S.ModalTitle>
      <S.ModalCloseBtn
        src={require("../../assets/images/close-modal-icon.png")}
        onClick={onCancelBtn()}
      />
      <S.ReposContainer style={{ overflow: 'hidden' }}>
        <div style={{ height: '92%', overflowY: 'auto' }}>

          {repos.map((repo, index) => (
            <UserRepo
              key={repo.id}  // Added key prop for better rendering
              repoId={repo.id}
              userImg={user.image}
              userName={user.name}
              repoName={repo.repoName}
              repoDescription={repo.repoDescription}
              repoStars={repo.repoStars}
              repoLanguage={repo.repoLanguage}
              repoForks={repo.repoForksCount}
              repoOpenIssues={repo.repoOpenIssues}
              repoWatchers={repo.repoWatcher}
              repoCreatedAt={repo.createdAt}
              repoDisclosure={repo.repoDisclosure}
              isSelected={pendingRepo === repo.id}
              onClick={() => handleRepoClick(repo.id, repo.repoName, repo.baseInfoSet)}
            />
          ))}
        </div>

        <S.CreateButtonBox>
          <S.CreateButton onClick={handleConfirmSelection}>생성하기</S.CreateButton>
        </S.CreateButtonBox>
      </S.ReposContainer>
    </>
  )
}

export default SelectRepo;