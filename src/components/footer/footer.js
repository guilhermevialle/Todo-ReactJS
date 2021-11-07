import "./footer.scss";
import PlusButton from "../plusbtn/plus";

export default ({ func, handlerNewList }) => {
    return (
        <div className="footer">
            <PlusButton
                text="Novo lembrete"
                func={func}
                handlerNewList={handlerNewList}
            />
            <span
                onClick={() => {
                    handlerNewList();
                }}
                style={{ color: "#1b41fb" }}
            >
                Adicionar lista
            </span>
        </div>
    );
};
