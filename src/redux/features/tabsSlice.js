import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "firstName",
};

export const tabsSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        assignValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { assignValue } = tabsSlice.actions;

export default tabsSlice.reducer;
