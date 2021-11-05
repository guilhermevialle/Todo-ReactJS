import "./presection.scss";
import calendarSvg from "./svgs/calendar-svg.svg";
import calendar2Svg from "./svgs/calendar2-svg.svg";
import Box from "../box/box";

export default () => {
    return (
        <div className="presection">
            <Box
                iconProps={{ img: calendarSvg, bgColor: "#3498db" }}
                title="Hoje"
                style={{ width: "47%" }}
            />
            <Box
                iconProps={{ img: calendar2Svg, bgColor: "#ff5f15" }}
                title="Programados"
                style={{ width: "47%" }}
            />
        </div>
    );
};
