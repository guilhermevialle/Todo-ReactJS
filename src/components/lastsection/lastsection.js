import "./lastsection.scss";
import stackSvg from "./svgs/stack-svg.svg";
import Box from "../box/box";
import { Global } from "../../App";
import { useContext, useState } from "react";

export default () => {
    let { data } = useContext(Global);
    const { listState } = data;
    const allCounts = listState.length;
    const [alltodos, setAlltodos] = useState(listState.map((arr) => arr.todos));

    console.log(alltodos, "At lastsection");

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
