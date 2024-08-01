import React, { useState } from 'react';
import Modal from 'react-modal';
import FileUploadDND from './FileUploadDND';
import Button from '../Button';

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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
            <div>
            <FileUploadDND onImageAdd={handleImageAdd} />
                <button onClick={closeModal}>Close</button>
            </div>
        </Modal>
        </div>
 )
};

export default FileUpload;