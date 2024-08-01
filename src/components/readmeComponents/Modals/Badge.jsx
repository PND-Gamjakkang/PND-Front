import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateBadge from './CreateBadge';
import Button from '../Button';
import {ModalCloseButton,ModalContent,CreateBadgeContainer,BadgePanel,BadgePreviewPanel,sampleBadges} from './BadgeStyle';



const Badge = ({ onBadgeAdd }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSampleClick = (badgeUrl) => {
    const markdown = `![Badge](${badgeUrl})`;
    onBadgeAdd(markdown);
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal}>Badge</Button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <ModalContent>
          <CreateBadgeContainer>
            <h2>Create Badge</h2>
            <CreateBadge onBadgeCreate={onBadgeAdd} closeModal={closeModal} /> 
            <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
          </CreateBadgeContainer>
          <BadgePanel>
            <h4>Sample Badges</h4>
            <BadgePreviewPanel>
              {sampleBadges.map((badgeUrl, index) => (
                <img
                  key={index}
                  src={badgeUrl}
                  alt={`Sample Badge ${index}`}
                  onClick={() => handleSampleClick(badgeUrl)}
                />
              ))}
            </BadgePreviewPanel>
          </BadgePanel>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Badge;
