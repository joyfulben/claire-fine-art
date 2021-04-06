import React from 'react';
import '../style/modal.css';


const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={() => closeModal()}>
          Close
        </button>
      </section>
    </div>
  );
};
export {Modal};
