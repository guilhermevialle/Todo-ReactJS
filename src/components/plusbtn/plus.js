import "./plus.scss";
import plusSvg from "./plus-svg.svg";

export default ({ text }) => {
    return (
        <div className="plusbtn">
            <img src={plusSvg} />
            <span>{text}</span>
        </div>
    );
};
