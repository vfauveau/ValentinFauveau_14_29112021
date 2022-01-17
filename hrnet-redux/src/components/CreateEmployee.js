import React, { useRef } from "react";
import Modal from "basic-modal-component1";
import Form from "./Form";
import Title from "./Title";
function CreateEmployee(props) {
    let modalRef = useRef();
    return (
        <div>
            <Title></Title>
            <Form modalRef={modalRef}></Form>
            <Modal message="This is a template message" ref={modalRef}></Modal>
        </div>
    );
}

export default CreateEmployee;
