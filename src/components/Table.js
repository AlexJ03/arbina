import React from "react";
import { useSelector } from "react-redux";
import { tableRoot } from "../styles/stylesJs";

const TableComponent = () => {
    const initialValue = useSelector((state) => state.input.initialValue);

    return (
        <div style={tableRoot}>
            <h1>{initialValue}</h1>
        </div>
    );
};

export default TableComponent;
