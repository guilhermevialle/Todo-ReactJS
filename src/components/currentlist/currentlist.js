import "./currentlist.scss";
import listSvg from "./svgs/list-svg.svg";
import rightSvg from "./svgs/right-svg.svg";
import gsap, { Elastic } from "gsap";
import { Global } from "../../App";
import { useContext } from "react";

export default ({ list, index }) => {
    const { data, setData } = useContext(Global);
    const { listState } = data;
    const target = listState[index];

    const sliderToRight = () => {
        gsap.to(".list", {
            right: 0,
            ease: Elastic.ease,
            duration: 0.6,
        });
    };

    return (
        <div
            className="currentlist"
            onClick={() => {
                sliderToRight();
                setData({
                    type: "changecurrentList",
                    value: target,
                });
                setData({
                    type: "selectedlist",
                    value: index,
                });
                setData({
                    type: "newReminderInsideList",
                    value: true,
                });
            }}
        >
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
