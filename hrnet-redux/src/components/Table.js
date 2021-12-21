import React, { useState, useMemo } from "react";
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
    table: {
        style: {
            display: "flex",
            width: "85%",
            margin: "0 auto",
            maxWidth: "1100px",
        },
    },
    pagination: {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    },
};

// columns setup
const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
        sortable: true,
        sortFunction: caseInsensitiveSort,
        responsive: true,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
        sortable: true,
        responsive: true,
    },
    {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
        responsive: true,
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        responsive: true,
    },
    {
        name: "Date Of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
        responsive: true,
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        responsive: true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
        responsive: true,
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        responsive: true,
        width: "8%",
    },
    {
        name: "ZipCode",
        selector: (row) => row.zipCode,
        sortable: true,
        responsive: true,
    },
];
// retrieve and format data to JSON

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <div style={{ marginBottom: "15px" }}>
        <input id="search" type="text" placeholder="Filter" aria-label="Search Input" value={filterText} onChange={onFilter} />
        <button type="button" onClick={onClear}>
            X
        </button>
    </div>
);
/* table component
 utilize the data stored in the local storage
 utilize a state to filter the content in the data table
 resetPagination button that allows to reload the data table (using useMemo)*/

function Table() {
    var data = JSON.parse(localStorage.getItem("employees"));
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    let arrayData = [];
    // let columnsName = ["firstName", "lastName", "startDate", "department", "dateOfBirth", "street", "city", "state", "zipCode"];

    const filteredItems = () => {
        if (data) {
            data.forEach((element) => {
                if (element.firstName && element.firstName.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.lastName && element.lastName.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.startDate && element.startDate.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.department && element.department.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.dateOfBirth && element.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.street && element.street.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.city && element.city.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.state && element.state.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                } else if (element.zipCode && element.zipCode.toLowerCase().includes(filterText.toLowerCase())) {
                    arrayData.push(element);
                }
            });
        }
        return arrayData;
    };
    // useMemo
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };
        return <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);
    return (
        <DataTable
            striped={true}
            columns={columns}
            data={filteredItems()}
            defaultSortFieldId={1}
            dense
            customStyles={customStyles}
            responsive
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            highlightOnHover
            pointerOnHover
        />
    );
}

export default Table;
