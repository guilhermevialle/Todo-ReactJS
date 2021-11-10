import "./presection.scss";
import calendarSvg from "./svgs/calendar-svg.svg";
import calendar2Svg from "./svgs/calendar2-svg.svg";
import Box from "../box/box";
import { Global } from "../../App";
import { useContext } from "react";
import gsap, { Elastic } from "gsap";

export default () => {
    const { data, setData } = useContext(Global);
    const { listState } = data;

    const sliderToRight = () => {
        gsap.to(".list", {
            right: 0,
            ease: Elastic.ease,
            duration: 0.6,
        });
    };

    return (
        <div
            className="presection"
            onClick={() => {
                setData({
                    type: "changecurrentList",
                    value: {
                        listName: "Todos os lembretes",
                        color: "#ff3a30",
                        todos: listState.map((l) => l.todos).flat(),
                    },
                });
                sliderToRight();
            }}
        >
            <Box
                iconProps={{ img: calendar2Svg, bgColor: "#ff3a30" }}
                title="Programados"
                style={{ width: "100%" }}
                counts={listState.map((l) => l.todos).flat().length}
            />
        </div>
    );
};
