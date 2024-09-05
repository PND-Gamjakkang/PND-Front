import * as S from './styles/SelectedRepoModalStyle';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 컴포넌트
import UserRepo from '../retro/UserRepo';

function SelectRepo({ onCancelBtn, onSelectProject, onIsBaseInfoSet }) {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCancleBtn = () => {
    setModalOpen(!modalOpen);
    //closeModal();
  };
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [pendingRepo, setPendingRepo] = useState(null); // 임시로 선택된 레포지토리 ID
  const [user, setUser] = useState([]); // 사용자 정보
  const [repos, setRepos] = useState([]);

  const handleProjectSelection = (repoId, repoName) => {
    console.log("handleProjectSelect에서 선택한 repoId: ", repoId);
    setSelectedRepo(repoId); // 선택된 레포지토리 ID 설정
    onSelectProject(repoId); // 선택된 레포지토리 ID를 RepoSettingModal로 전달
  };

  const handleIsSwiper = () => {
    onIsBaseInfoSet();
  }

  // 유저토큰
  const userToken = localStorage.getItem('token');


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
        console.log("사용자: " + res.data.data);
      }).catch((err) => {
        console.log("error");
      });
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
        setRepos(newRepos);
        console.log("레포지토리: " + JSON.stringify(newRepos, null, 2));
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

  const handleRepoClick = (repoId, repoName, baseInfoSet) => {
    if (selectedRepo === repoId) {
      // setSelectedRepo(null); // 이미 선택된 경우, 선택 해제
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // handleProjectSelection(repoId, repoName);
      console.log("선택한 레포의 baseInfoSet의 값: " + baseInfoSet);
    } else if (selectedRepo === null) { // 처음 눌렀을 때, 다른 거 눌렀을 때
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // setSelectedRepo(repoId); // 새로운 항목 선택
      // handleProjectSelection(repoId, repoName);
      if (baseInfoSet === true) {
        handleIsSwiper();
      } else {
        return;
      }
    } else {
      setPendingRepo(repoId); // 임시로 레포지토리 ID를 저장
      // setSelectedRepo(repoId); // 다른 레포 선택된 경우, 선택 해제
      // handleProjectSelection(repoId, repoName);
    }
  };
  const handleConfirmSelection = () => {
    if (pendingRepo) {
      handleProjectSelection(pendingRepo);
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
        <S.CreateButton onClick={handleConfirmSelection}>선택완료</S.CreateButton>

    
      </S.ReposContainer>


    </>
  )
}

export default SelectRepo;