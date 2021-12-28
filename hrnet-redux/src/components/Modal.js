import React from "react";
import "../styles/modal.css";

export function showModal() {
    const modal = document.querySelector(".modal");
    const modalwrapper = document.querySelector(".modal-page-wrapper");
    modalwrapper.classList.add("modal-toggle");
    modal.classList.add("modal-toggle2");
}
// the modal will hide if you click on the close button or anywhere on the background
export function hideModal() {
    const modal = document.querySelector(".modal");
    const modalwrapper = document.querySelector(".modal-page-wrapper");
    modalwrapper.classList.remove("modal-toggle");
    modal.classList.remove("modal-toggle2");
}
// modal component
// props : color - will change the font color
function Modal() {
    return (
        <div style={{height:"100%"}}>
            <div onClick={hideModal} className="modal-page-wrapper"></div>
            <div className="modal">
                <p className="modal-message">Employee Created</p>
                <button onClick={hideModal} className="modal-close"></button>
            </div>
        </div>
    );
}

export default Modal;
