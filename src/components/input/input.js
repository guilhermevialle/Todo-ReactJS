import "./input.scss";
import searchSvg from "./svgs/search-svg.svg";
import { useContext, useState } from "react";
import { Global } from "../../App";
import listslider from "../listslider/listslider";

export default ({ placeholder }) => {
    const { data, setData } = useContext(Global);
    const { listState } = data;

    const eventHandler = (value) => {
        setData({
            type: "searchinp",
            value: value,
        });
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
                type="search"
                placeholder={placeholder}
            />
        </div>
    );
};
