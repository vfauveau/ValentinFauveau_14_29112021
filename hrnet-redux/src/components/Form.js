import React from "react";
import StateSelector from "./StateSelector";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalTrue, toggleModalFalse } from "../features/modalControl";
function Form() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.modalToggle.modalVisible);
    
    // form treatment
    function saveEmployee() {
        const form = document.getElementById("create-employee");
        [...form.elements].forEach((item) => {
            console.log(item.value);
        });
        dispatch(toggleModalTrue());
        console.log(state)
        showmodal(state)
    }
    function showmodal (state) {
        const modal = document.getElementById("modal");
        if (state === true) {
            modal.style.display = "block";
        } else if (state === false) {
            toggleModalFalse()
            modal.style.display = "none";
        }
    }
    return (
        <div className="container">
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />
                    <StateSelector />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button style={{ marginTop: "15px" }} onClick={saveEmployee}>
                Save
            </button>
        </div>
    );
}

export default Form;
