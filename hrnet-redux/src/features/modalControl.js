import { createSlice } from "@reduxjs/toolkit";

export const isModalShownSlice = createSlice({
    name: "modal",
    initialState: {
        modalVisible: false,
    },
    reducers: {
        toggleModalTrue: (state) => {
            state.modalVisible = true
        },
        toggleModalFalse: (state) => {
            state.modalVisible = false
        }
    },
});

export const { toggleModalTrue, toggleModalFalse } = isModalShownSlice.actions
export default isModalShownSlice.reducer