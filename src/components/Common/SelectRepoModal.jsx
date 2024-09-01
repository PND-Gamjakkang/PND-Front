import Modal from 'react-modal';
import { useState } from 'react';
import * as S from './SelectedRepoModalStyle'

import UserRepo from '../retro/UserRepo';

function SelectRepoModal({ closeModal, onSelectProject}) {
  const [repos, setRepos] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);


  const handleCancleBtn = () => {
    setModalOpen(!modalOpen);
    closeModal(); 
  }
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
            <S.ModalTitle>레포지토리를<br/>선택해주세요.</S.ModalTitle>
            <S.ModalCloseBtn 
              src={require("../../assets/images/close-modal-icon.png")}
              onClick={handleCancleBtn}
            />
            <S.ReposContainer>
              {/* 레포지토리 개수만큼 불러오기 */}
              <UserRepo 
                    key={"index"}
                    repoId={0}
                    userName={"user.name"}
                    userImg={"i"}
                    repoName={"user.repo"}
                    repoDescription={"user.description"}
                    repoStars={"s"}
                    repoLanguage={"none"}
                    repoForks={"fork"}
                    repoOpenIssues={"i"}
                    repoWatchers={"q"}
                    repoCreatedAt={"c"}
                    onClick={onSelectProject}
                    // repoUrl={repo.repoUrl}
                    // isSelected={selectedRepo === "repo.id"}
                    // onClick={() => handleRepoClick(repo.id, repo.name)}
                />

            </S.ReposContainer>
        
    </Modal>
    )
}

export default SelectRepoModal;