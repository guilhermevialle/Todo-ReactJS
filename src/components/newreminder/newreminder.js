import "./newreminder.scss";
import Tab from "../tab/tab";

export default () => {
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
