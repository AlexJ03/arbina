import { InputGroup } from "@blueprintjs/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addInputText } from "../features/inputSlice";
import { searchInput } from "../styles/stylesJs";

const SearchInputComponent = () => {
    const nextValue = useSelector((state) => state.input.nextValue);
    const dispatch = useDispatch();

    return (
        <>
            <InputGroup
                placeholder="SearchInput"
                round={false}
                style={searchInput}
                value={nextValue}
                onChange={(e) => dispatch(addInputText(e.target.value))}
            />
        </>
    );
};

export default SearchInputComponent;
