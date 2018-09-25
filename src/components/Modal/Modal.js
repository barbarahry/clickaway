import React from "react";
import "./modal.css";
// By extending the React.Component class, Counter inherits functionality from it



const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="">
    <div className={showHideClassName} >
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>x</button> */}
      </section>
    </div>
    </div>
  );
};

export default Modal;
