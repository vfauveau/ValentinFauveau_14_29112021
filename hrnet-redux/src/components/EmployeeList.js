import React from 'react'
import {Link } from "react-router-dom"
function EmployeeList() {
    return (
        <header>
            <h1>Current Employees</h1>
            <Link to="/">Home</Link>
        </header>
    )
}

export default EmployeeList
