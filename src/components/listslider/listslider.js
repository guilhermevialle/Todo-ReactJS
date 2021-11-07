import "./listslider.scss";
import { Global } from "../../App";
import { useContext } from "react";
import Tab from "../tab/tab";

export default () => {
    const { data } = useContext(Global);
    const { listState } = data;

    console.log(listState, "At listSlider component ");

    return (
        <div className="listSlider">
            <Tab left="Novo Lembrete" middle="Lista" right=" " />
        </div>
    );
};
