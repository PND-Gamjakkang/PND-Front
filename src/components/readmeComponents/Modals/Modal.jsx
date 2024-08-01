import { useState } from 'react';
import Badge from './Badge';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ModalComponent = ({ children }) => (
    <Badge show={showModal} handleClose={closeModal}>
      {children}
    </Badge>
  );

  return [ModalComponent, openModal, closeModal];
};
