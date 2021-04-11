import React from 'react';
import '../style/modal.css';


const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div onClick={() => closeModal()} className={showHideClassName}>
      <section className="modal-main" onClick={() => !closeModal()}>
        {children}
      </section>
    </div>
  );
};
export {Modal};
