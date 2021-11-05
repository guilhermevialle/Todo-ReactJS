import "./footer.scss";
import PlusButton from "../plusbtn/plus";

export default () => {
    return (
        <div className="footer">
            <PlusButton text="Novo lembrete" />
            <span style={{ color: "#1b41fb" }}>Adicionar lista</span>
        </div>
    );
};
