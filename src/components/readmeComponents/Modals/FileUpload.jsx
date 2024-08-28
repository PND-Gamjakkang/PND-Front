import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {PreviewLabel,
  HiddenFileInput,
  Icon,
  PreviewMessage,
  PreviewDescription,
  PreviewInfo,
  PreviewImage,
  AddImageButton} from './FileUploadDNDStyle';
import {Title, Description, ModalCloseButton,Logo} from './FileUploadStyle';
import logo from '../../../assets/images/image-logo.png';

const FileInfo = ({ uploadedInfo }) => (
  <PreviewInfo>
    <PreviewImage src={uploadedInfo.imageUrl} alt={uploadedInfo.name} />
  </PreviewInfo>
);


const UploadBox = ({ onImageAdd }) => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const setFileInfo = (file) => {
    const { name, type } = file;
    const isImage = type.includes('image');
    const size = (file.size / (1024 * 1024)).toFixed(2) + 'MB';

    if (!isImage) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedInfo({ name, size, type, imageUrl: String(reader.result) });
    };
    reader.readAsDataURL(file);
  };

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = ({ target }) => {
    const file = target.files[0];
    setFileInfo(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileInfo(file);
    setActive(false);
  };

  const handleAddImage = () => {
    // if (uploadedInfo) {
    //   const markdown = `![forTest](${uploadedInfo.imageUrl})`;
    //   console.log('uploadedInfo : ', uploadedInfo);
    //   console.log('image : ', markdown);
    //   onImageAdd(markdown);
    // }
      // 테스트를 위한 기본 URL
      const url = '![Sample Image](https://picsum.photos/200/300)';
      console.log('Using default URL:', url);
      onImageAdd(url);
    
  };

  return (
    <>
      <PreviewLabel
        className={isActive ? 'active' : ''}
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <HiddenFileInput type="file" onChange={handleUpload} />
        <Logo src={logo} style={{ marginBottom: '20px' }} />
        <PreviewMessage>클릭 혹은 파일을 이곳에 드롭하세요.</PreviewMessage>
        <PreviewDescription>파일당 최대 3MB</PreviewDescription>
      </PreviewLabel>
      {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
      {uploadedInfo && (
        <AddImageButton onClick={handleAddImage}>
          생성하기
        </AddImageButton>
      )}
    </>
  );
};

const FileUpload = ({ onImageAdd, closeModal }) => {
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
      background: 'white',
      border: 'none',
      borderRadius: '2.04vh', /* 22px out of 1080px */
      padding: '1.85vh', /* 20px out of 1080px */
      position: 'relative',
      width: '33.33vw', /* 약 640px out of 1920px */
      height: '64.81vh', /* 약 700px out of 1080px */
      maxWidth: '90%', /* Adjust max width to make it more responsive */
      maxHeight: '90%', /* Adjust max height to make it more responsive */
      display: 'flex',
      flexDirection: 'column',
    },
  }}
>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <Title>이미지 추가하기</Title>
      <Description>원하는 이미지를 추가할 수 있습니다.</Description>
      <div>
        <UploadBox onImageAdd={onImageAdd} />
      </div>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
    </Modal>
  );
};

export default FileUpload;