import React from "react";
import "../styles/modal.css";
import "../styles/datepicker.css";

// modal component
// props : color - will change the font color
function Modal(props) {
    // the modal will hide if you click on the close button or anywhere on the background
    function hideModal() {
        const modal = document.querySelector(".modal");
        const modalwrapper = document.querySelector(".modal-page-wrapper");
        modalwrapper.classList.remove("modal-toggle");
        modal.classList.remove("modal-toggle2");
    }
    return (
        <React.Fragment>
            <div onClick={hideModal} className="modal-page-wrapper"></div>
            <div className="modal">
                <p style={{ color: props.fontcolor }} className="modal-message">
                    Employee Created
                </p>
                <button onClick={hideModal} className="modal-close"></button>
            </div>
        </React.Fragment>
    );
}

export default Modal;
