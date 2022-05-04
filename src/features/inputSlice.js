import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialValue: "Table",
    nextValue: "",
};

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        addInputText: (state, action) => {
            state.nextValue = action.payload;
        },
        showText: (state) => {
            state.initialValue = state.nextValue;
            state.nextValue = "";
        },
    },
});

export const { addInputText, showText } = inputSlice.actions;

export default inputSlice.reducer;
