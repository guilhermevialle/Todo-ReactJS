import "./lastsection.scss";
import stackSvg from "./svgs/stack-svg.svg";
import Box from "../box/box";
import { Global } from "../../App";
import { useContext, useEffect } from "react";
import gsap, { Elastic } from "gsap";

export default () => {
    let { data } = useContext(Global);
    const { listState } = data;
    const allCounts = listState.length;

    return (
        <div className="lastsection">
            <Box
                iconProps={{ img: stackSvg, bgColor: "#666" }}
                title="Todos"
                style={{ width: "100%" }}
                counts={allCounts}
            />
        </div>
    );
};
