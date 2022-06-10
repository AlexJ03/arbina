import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./features/tabsSlice";
import inputReducer from "./features/inputSlice";

export const store = configureStore({
    reducer: {
        tabs: tabsReducer,
        input: inputReducer,
    },
});
