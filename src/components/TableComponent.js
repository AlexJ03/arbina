import { Cell, Column, Table } from "@blueprintjs/table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableComponent = () => {
    const [data, setData] = useState([]);

    const inputText = useSelector((state) => state.input.value);
    const tabsId = useSelector((state) => state.tabs.value);

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

    return (
        <Table
            style={{ minHeight: "100vh" }}
            numRows={data.length}
            defaultRowHeight={30}
            defaultColumnWidth={400}
        >
            <Column name="Имя" cellRenderer={firstNameCell} />
            <Column name="Фамилия" cellRenderer={lastNameCell} />
            <Column name="Никнейм" cellRenderer={userNameCell} />
        </Table>
    );
};

export default TableComponent;
