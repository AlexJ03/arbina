import { Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import React from "react";
import AddButtonComponent from "./AddButton";
import SearchInputComponent from "./SearchInput";
import {
    root,
    wrapperContent,
    wrapperNavbar,
    wrapperText,
} from "../styles/stylesJs";

const NavigationBarComponent = () => {
    return (
        <Navbar style={root}>
            <div style={wrapperContent}>
                <div style={wrapperNavbar}>
                    <NavbarGroup align="Alignment.LEFT">
                        <NavbarHeading style={{ marginRight: "10px" }}>
                            <SearchInputComponent />
                        </NavbarHeading>
                        <AddButtonComponent />
                    </NavbarGroup>
                </div>
                <div style={wrapperText}>
                    <p>NavigationBar</p>
                </div>
            </div>
        </Navbar>
    );
};

export default NavigationBarComponent;
