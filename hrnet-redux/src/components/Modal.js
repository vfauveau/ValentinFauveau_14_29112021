import React from "react";
import "../styles/modal.css";
import "../styles/datepicker.css";

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
        <React.Fragment>
            <div onClick={hideModal} className="modal-page-wrapper"></div>
            <div className="modal">
                <p className="modal-message">
                    Employee Created
                </p>
                <button onClick={hideModal} className="modal-close"></button>
            </div>
        </React.Fragment>
    );
}

export default Modal;
