import React from "react";
import { Button, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { showText } from "../features/inputSlice";
import { addBtn } from "../styles/stylesJs";

const AddButtonComponent = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Button style={addBtn} onClick={() => dispatch(showText())}>
                <Icon icon="plus" color="black" />
            </Button>
        </>
    );
};

export default AddButtonComponent;
