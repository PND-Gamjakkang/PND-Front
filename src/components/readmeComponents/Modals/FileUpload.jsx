import React, { useState } from 'react';
import Modal from 'react-modal';
import FileUploadDND from './FileUploadDND';
import Button from '../Button';
import {Title,Description,ModalCloseButton} from './FileUploadStyle';

const FileUpload = ({onImageAdd})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
      const handleImageAdd = (markdown) => {
        onImageAdd(markdown);
        closeModal();
      };
    
    return(
        <div>
        <Button onClick={openModal}>Upload Image</Button>
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
              background: 'white',
              border: 'none',
              borderRadius: '22px', 
              padding: '20px',
              position: 'relative',
              width: '637px',
              height: '850px',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
      >

        <Title>Add<br></br>Image</Title>
        <Description>원하는 이미지를 추가할 수 있습니다.</Description>
            <div>
            <FileUploadDND onImageAdd={handleImageAdd} />
            </div>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

        </Modal>
        </div>
 )
};

export default FileUpload;