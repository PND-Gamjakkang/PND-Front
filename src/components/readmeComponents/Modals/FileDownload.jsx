import React, { useState,useEffect } from "react";
import Modal from 'react-modal';
import { ModalContent, StyledButton, CloseButton, Link, Logo,ExplainText, DownloadButton,MyPageButton } from './FileDownloadStyle';
import logo from '../../../assets/images/download-logo.png';
import {Helmet} from 'react-helmet';

const FileDownload = ({ content,closeModal }) => {
  const downloadMD = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); 
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
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>

        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Logo src={logo} style={{ marginBottom: '20px' }} />
          <ExplainText>
            마이 페이지에 저장되었습니다. <br></br>
            해당 파일을 다운로드 하시겠습니까?
          </ExplainText>
          <DownloadButton onClick={downloadMD}>다운로드 하기</DownloadButton>
          <MyPageButton>마이 페이지로 가기</MyPageButton>
        </ModalContent>
      </Modal>
    
  );
};

export default FileDownload;
