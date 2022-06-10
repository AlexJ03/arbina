import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        assignInputText: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { assignInputText } = inputSlice.actions;

export default inputSlice.reducer;
