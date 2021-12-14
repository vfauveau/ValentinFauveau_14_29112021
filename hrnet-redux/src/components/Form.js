import React from "react";
import StateSelector from "./StateSelector";
import Example from "./Datepickers";
import { showModal } from "./Modal";
// Form component 
function Form() {
    // form treatment
    function saveEmployee() {
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const dateOfBirth = document.getElementById("date-of-birth");
        const startDate = document.getElementById("start-date");
        const department = document.getElementById("department");
        const street = document.getElementById("street");
        const city = document.getElementById("city");
        const state = document.getElementById("state");
        const zipCode = document.getElementById("zip-code");

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value,
        };
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
        showModal();
    }
    return (
        <div className="container">
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <Example id={"date-of-birth"} startDate={new Date(2000,0,1)}/>

                <label htmlFor="start-date">Start Date</label>
                <Example id={"start-date"} startDate={new Date()}/>

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
