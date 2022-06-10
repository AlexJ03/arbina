import { FormGroup, InputGroup } from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@blueprintjs/core";

const App = () => {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [tabsId, setTabsId] = useState("firstName");

    useEffect(() => {
        fetch("http://fakeapi.jsonparseronline.com/users")
            .then((response) => response.json())
            .then((json) => {
                setData(
                    inputText
                        ? [...json].filter(
                              (item) =>
                                  item[tabsId]
                                      .toLowerCase()
                                      .indexOf(inputText.toLowerCase(), 0) === 0
                          )
                        : [...json]
                );
            });
    }, [inputText]);

    const firstNameCell = (rowIndex) => (
        <Cell>
            {data.length > 0 ? data[rowIndex]?.firstName : "Загрузка..."}
        </Cell>
    );

    const lastNameCell = (rowIndex) => (
        <Cell>
            {data.length > 0 ? data[rowIndex]?.lastName : "Загрузка..."}
        </Cell>
    );

    const userNameCell = (rowIndex) => (
        <Cell>
            {data.length > 0 ? data[rowIndex]?.username : "Загрузка..."}
        </Cell>
    );

    const handleChange = (e) => {
        setTabsId(e);
    };

    return (
        <>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <FormGroup label="Фильтровать по: " inline>
                    <Tabs id="TabsExample" onChange={handleChange}>
                        <Tab id="firstName" title="Имени" />
                        <Tab id="lastName" title="Фамилии" />
                        <Tab id="username" title="Никнейме" />
                        <Tabs.Expander />
                    </Tabs>
                </FormGroup>

                <InputGroup
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Сортировка по имени"
                    value={inputText}
                />

                <Table
                    numRows={data.length}
                    defaultRowHeight={30}
                    defaultColumnWidth={400}
                >
                    <Column name="Имя" cellRenderer={firstNameCell} />
                    <Column name="Фамилия" cellRenderer={lastNameCell} />
                    <Column name="Никнейм" cellRenderer={userNameCell} />
                </Table>
            </div>
        </>
    );
};

export default App;
