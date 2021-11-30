import React, { useEffect, useCallback } from "react";
import "../styles/modal.css";

function Modal() {

    return (
        <div id="modal" className="modal">
            <p className="modal-message">Employee Created</p>
            <button className="modal-close"></button>
        </div>
    );
}

export default Modal;
