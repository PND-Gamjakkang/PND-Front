import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { ModalContent, CloseButton, Logo, ExplainText, DownloadButton, MyPageButton } from './FileDownloadStyle';
import logo from '../../../assets/images/download-logo.png';
import { Helmet } from 'react-helmet';
import { API } from "../../../api/axios";
import mermaid from 'mermaid';

const FileDownload = ({ page, content, closeModal, selectedProjectId, userToken }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isDiagramPage, setIsDiagramPage] = useState(false);

  // `page` 값에 따라 `isDiagramPage` 상태 업데이트
  useEffect(() => {
    if (page !== 'readme') {
      setIsDiagramPage(true);
    } else {
      setIsDiagramPage(false);
    }
  }, [page]);

  useEffect(() => {
    const saveReadme = async () => {
      try {
        const requestBody = {
          repoId: selectedProjectId,
          content: content,
        };
        console.log('repoId : ', selectedProjectId);
        console.log('content : ', content);
        const response = await API.post(`api/pnd/readme`, requestBody);
        console.log('저장 성공:', response);
        setIsSaved(true);  // 파일 저장 완료로 상태 업데이트
      } catch (error) {
        console.error('Error saving README:', error);
        setIsSaved(false);  // 파일 저장 실패
      }
    };

    if (page === 'readme') {
      saveReadme();
    } else if (page === '/diagram/class') {
      setIsSaved(true);  // Ensure this is set to true
    }
  }, [page, content, selectedProjectId, userToken]);

  const downloadMD = () => {
    if (page === 'readme') {
      const element = document.createElement("a");
      const file = new Blob([content], { type: 'text/markdown' });
      element.href = URL.createObjectURL(file);
      element.download = "README.md";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          background: 'none',
          border: '2px solid',
          borderRadius: '22px',
          padding: 'none',
          position: 'static',
          width: 'auto',
          height: 'auto',
          maxWidth: '90%',
          maxHeight: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Logo src={logo} style={{ marginBottom: '20px' }} />
        <ExplainText>
          {isSaved ? '마이 페이지에 저장되었습니다.' : '저장 중입니다...'} <br />
          {isSaved && '해당 파일을 다운로드 하시겠습니까?'}
        </ExplainText>

        {!isDiagramPage && (
          <DownloadButton onClick={downloadMD} disabled={!isSaved}>다운로드 하기</DownloadButton>
        )}
        <MyPageButton disabled={!isSaved}>마이페이지로 가기</MyPageButton>
      </ModalContent>
    </Modal>
  );
};

export default FileDownload;