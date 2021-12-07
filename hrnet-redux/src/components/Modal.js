import React from "react";
import "../styles/modal.css";
import { useDispatch } from "react-redux";
import { toggleModalFalse } from "../features/modalControl";
function Modal() {
    const dispatch = useDispatch()
    function hideModal() {
        dispatch(toggleModalFalse());
        const modal = document.getElementById("modal")
        modal.style.display = "none"
    }
    return (
        <div id="modal" className="modal">
            <p className="modal-message">Employee Created</p>
            <button onClick={hideModal} className="modal-close"></button>
        </div>
    );
}

export default Modal;
