import "./list.scss";
import { useContext } from "react";
import TodoTemplate from "../todotemplate/todotemplate";
import { Global } from "../../App";

export default () => {
    let { data } = useContext(Global);
    data = data.listState;

    return <div className="list"></div>;
};
