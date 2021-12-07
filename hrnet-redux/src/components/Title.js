import React from "react";
import { Link } from "react-router-dom";
function Title() {
    return (
        <header>
            <h1>HRnet</h1>
            <Link style={{ marginTop: "10px" }} to="EmployeeList">
                View Current Employees
            </Link>
            <h4 className="title-createEmployee">Create Employee</h4>
        </header>
    );
}

export default Title;
