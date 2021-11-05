import "./list.scss";
import { useContext } from "react";
import TodoTemplate from "../todotemplate/todotemplate";
import { Global } from "../../App";

export default () => {
    const { data } = useContext(Global);
    console.log(data, "At List.js");

    return <div className="list"></div>;
};
