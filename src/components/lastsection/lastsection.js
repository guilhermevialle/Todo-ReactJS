import "./lastsection.scss";
import stackSvg from "./svgs/stack-svg.svg";
import Box from "../box/box";

export default () => {
    return (
        <div className="lastsection">
            <Box
                iconProps={{ img: stackSvg, bgColor: "#666" }}
                title="Todos"
                style={{ width: "100%" }}
            />
        </div>
    );
};
