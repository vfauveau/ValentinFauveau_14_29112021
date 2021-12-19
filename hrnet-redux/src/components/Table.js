import React from "react";
import DataTable from "react-data-table-component";

const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.firstName.toLowerCase();
    const b = rowB.firstName.toLowerCase();

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};

//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    table:{
        style: {
            display : "flex",
            width : "fit-content",
            margin: "0 auto"
        },
    },
};
// column setup
const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
        sortable: true,
        sortFunction: caseInsensitiveSort,
        responsive : true,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
        sortable: true,
        responsive : true,
    },
    {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
        responsive : true,
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        responsive : true,
    },
    {
        name: "Date Of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
        responsive : true,
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        responsive : true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
        responsive : true,
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        responsive : true,
        width : "8%"
    },
    {
        name: "ZipCode",
        selector: (row) => row.zipCode,
        sortable: true,
        responsive : true,
        width : "10%"
    },
];

var data = JSON.parse(localStorage.getItem("employees"));

function Table() {
    return <DataTable striped={true} columns={columns} data={data} defaultSortFieldId={1} dense customStyles={customStyles} responsive={true} />;
}

export default Table;
