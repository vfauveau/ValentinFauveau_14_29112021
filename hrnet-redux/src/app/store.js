import { configureStore } from "@reduxjs/toolkit";
import createEmployee from "../features/createEmployee";
import modalToggle from "../features/modalControl"
export default configureStore({
    reducer: { createEmployee, modalToggle },
});
