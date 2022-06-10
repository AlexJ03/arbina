import { InputGroup } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { assignInputText } from "../redux/features/inputSlice";

const InputComponent = () => {
    const tabValue = useSelector((state) => state.tabs.value);
    const inputText = useSelector((state) => state.input.value);

    const dispatch = useDispatch();

    return (
        <InputGroup
            onChange={(e) => dispatch(assignInputText(e.target.value))}
            placeholder={
                (tabValue === "firstName" && "Сортировка по имени") ||
                (tabValue === "lastName" && "Сортировка по фамилии") ||
                (tabValue === "username" && "Сортировка по никнейму")
            }
            value={inputText}
        />
    );
};

export default InputComponent;
