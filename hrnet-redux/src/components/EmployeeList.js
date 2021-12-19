import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

function EmployeeList() {
    return (
        <React.Fragment>
            <header style={{marginBottom : "20px"}}>
                <h1>Current Employees</h1>
            </header>
            <section>
                <Table />
            </section>
            <footer style={{display:"flex", justifyContent:"center"}}>
                <Link style={{ position: "center", marginBottom: "30px", marginTop: "30px" }} to="/">
                    Home
                </Link>
            </footer>
        </React.Fragment>
    );
}

export default EmployeeList;
