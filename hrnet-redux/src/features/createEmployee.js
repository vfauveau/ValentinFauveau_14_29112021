import { createSlice } from "@reduxjs/toolkit";
export const createEmployeeSlice = createSlice({
    name: "employee",
    initialState: {
        formInfos: {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            startDate: "",
            adress: {
                street: "",
                city: "",
                state: "",
                zipcode: null,
            },
            department: "",
        },
    },
    reducers: {
        createEmployee: (state) => {
        },
    },
});

export const { createEmployee } = createEmployeeSlice.actions
export default createEmployeeSlice.reducer