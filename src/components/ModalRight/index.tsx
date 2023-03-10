import React, { useState } from 'react';
import './ModalRight.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalRight: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalRight;
