import React from "react";
import StateSelector from "./StateSelector";
import Example from "./Datepickers";

// Form component 
function Form() {
    // form treatment
    function saveEmployee() {
        const form = document.getElementById("create-employee");
        [...form.elements].forEach((item) => {
            console.log(item.value);
            console.log(item)
        });
        showmodal();
    }
    // toggle the modal
    function showmodal() {
        const modal = document.querySelector(".modal");
        const modalwrapper = document.querySelector(".modal-page-wrapper");
        modalwrapper.classList.add("modal-toggle")
        modal.classList.add("modal-toggle2")
    }
    return (
        <div className="container">
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <Example startDate={new Date(2000,0,1)}/>

                <label htmlFor="start-date">Start Date</label>
                <Example  startDate={new Date()}/>

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
