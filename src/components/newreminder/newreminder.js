import "./newreminder.scss";
import Tab from "../tab/tab";
import { Global } from "../../App";
import { useContext, useState } from "react";
export default () => {
    const { data, setData } = useContext(Global);
    const { listState } = data;

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);

    return (
        <div className="newreminder">
            <Tab left="Cancelar" middle="Novo Lembrete" right="Adicionar" />
            <div className="aroundInps">
                <div className="inps">
                    <input type="text" placeholder="Título" />
                </div>
                <div className="inps">
                    <input type="text" placeholder="Notas" />
                </div>
            </div>
            <div className="details">
                <span>Detalhes</span>
            </div>
            <div className="select">
                <span>Lista</span>
            </div>
        </div>
    );
};
