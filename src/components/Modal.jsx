import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';

const Modal = () => {
  const { openModal, setOpenModal } = useGlobalContext();
  return (
    <div className={openModal ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => setOpenModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
