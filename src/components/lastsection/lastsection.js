import "./lastsection.scss";
import stackSvg from "./svgs/stack-svg.svg";
import Box from "../box/box";
import { Global } from "../../App";
import { useContext } from "react";

export default () => {
    const { data } = useContext(Global);
    const allCounts = data.lists.length;

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
