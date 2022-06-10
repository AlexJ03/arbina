import { FormGroup, Tab, Tabs } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { assignValue } from "../redux/features/tabsSlice";

const TabsComponent = () => {
    const dispatch = useDispatch();

    return (
        <FormGroup label="Фильтровать по: " inline>
            <Tabs id="TabsExample" onChange={(e) => dispatch(assignValue(e))}>
                <Tab id="firstName" title="Имени" />
                <Tab id="lastName" title="Фамилии" />
                <Tab id="username" title="Никнейму" />
                <Tabs.Expander />
            </Tabs>
        </FormGroup>
    );
};

export default TabsComponent;
