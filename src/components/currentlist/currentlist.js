import "./currentlist.scss";
import listSvg from "./svgs/list-svg.svg";
import rightSvg from "./svgs/right-svg.svg";

export default ({ list }) => {
    return (
        <div className="currentlist">
            <div>
                <img src={listSvg} />
                <span>{list.listName}</span>
            </div>
            <div>
                <span>{list.todos.length}</span>
                <img src={rightSvg} />
            </div>
        </div>
    );
};
