import { configureStore } from "@reduxjs/toolkit";
import createEmployee from "../features/createEmployee";

export default configureStore({
    reducer: { createEmployee },
});
