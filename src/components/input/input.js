import "./input.scss";
import searchSvg from "./svgs/search-svg.svg";
import { useState } from "react";

export default ({ placeholder }) => {
    const [value, setValue] = useState(null);

    const eventHandler = (value) => {
        setValue(value);
        return;
    };

    return (
        <div className="input">
            <img src={searchSvg} />
            <input
                onChange={(e) => {
                    eventHandler(e.currentTarget.value);
                }}
                className="inp"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
