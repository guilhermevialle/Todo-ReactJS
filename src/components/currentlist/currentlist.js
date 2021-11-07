import "./currentlist.scss";
import listSvg from "./svgs/list-svg.svg";
import rightSvg from "./svgs/right-svg.svg";

export default ({ list }) => {
    console.log(list, "At current list");

    return (
        <div className="currentlist">
            <div className="lside">
                <img style={{ backgroundColor: list.color }} src={listSvg} />
                <span>{list.listName}</span>
            </div>
            <div className="rside">
                <span>{list.todos.length}</span>
                <img src={rightSvg} />
            </div>
        </div>
    );
};
