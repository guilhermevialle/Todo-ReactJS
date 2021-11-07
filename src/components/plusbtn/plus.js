import "./plus.scss";
import plusSvg from "./plus-svg.svg";

export default ({ text, func }) => {
    return (
        <div
            className="plusbtn"
            onClick={() => {
                func();
            }}
        >
            <img src={plusSvg} />
            <span>{text}</span>
        </div>
    );
};
