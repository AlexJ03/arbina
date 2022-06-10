import React from "react";
import InputComponent from "./components/InputComponent";
import Tabs from "./components/TabsComponent";
import TableComponent from "./components/TableComponent";
import { root } from "./styles/style";

const App = () => {
    return (
        <div style={root}>
            <Tabs />
            <InputComponent />
            <TableComponent />
        </div>
    );
};

export default App;
