import React from 'react';
import '../style/modal.css';
import ClosingButton from '../style/ClosingButton';

const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="modal-container" className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
      <ClosingButton onClick={() => closeModal()}>Exit View</ClosingButton>
    </div>
  );
};
export {Modal};
