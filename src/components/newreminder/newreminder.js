import "./newreminder.scss";
import Tab from "../tab/tab";
import { Global } from "../../App";
import { useContext, useState } from "react";
import rightSvg from "../currentlist/svgs/right-svg.svg";
import ListSlider from "../listslider/listslider";

export default () => {
    const { data, setData } = useContext(Global);
    const { listState } = data;

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [to, setTo] = useState(0);

    return (
        <div className="newreminder">
            <ListSlider />
            <Tab left="Cancelar" middle="Novo Lembrete" right="Adicionar" />
            <div className="aroundInps">
                <div className="inps">
                    <input type="text" placeholder="Título" />
                </div>
                <div className="inps">
                    <input type="text" placeholder="Notas" />
                </div>
            </div>

            <div className="select">
                <span>Lista</span>
                <div>
                    <div
                        className="circ"
                        style={{ backgroundColor: listState[to].color }}
                    ></div>
                    <span>{listState[to].listName}</span>
                    <img src={rightSvg} />
                </div>
            </div>
        </div>
    );
};
