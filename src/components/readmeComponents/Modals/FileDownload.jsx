import React, { useState } from "react";
import Modal from 'react-modal';
import Button from "../Button";
import { ModalContent, StyledButton, CloseButton, Link, Logo } from './FileDownloadStyle';
import logo from '../../../assets/images/modal-logo.png';

const FileDownload = ({ content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    // console.log("다운로드");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const downloadMD = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); 
  };

  const Explain = () => (
    <div style={{marginTop:'30px',marginBottom:'160px'}}>
      마이 페이지에 저장되었습니다.<br /><br/>
      해당 파일을 <Link href="#" onClick={downloadMD} style={{ color: '#FFFFFF' }}>다운로드</Link> 하시겠습니까?<br />
    </div>
  );

  return (
    <div>
      <Button onClick={openModal}>Download md</Button>
      <Modal
        isOpen={modalIsOpen}
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
            width: 'auto', // 기본 너비 설정
            height: 'auto', // 기본 높이 설정
            maxWidth: '90%', // 최대 너비 제한
            maxHeight: '90%', // 최대 높이 제한
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          },
        }}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Logo src={logo} style={{ marginBottom: '20px' }} />
          <Explain />
          <StyledButton onClick={downloadMD}>다운로드 하기</StyledButton>
          <StyledButton>해당 프로젝트 회고하러 가기</StyledButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FileDownload;
