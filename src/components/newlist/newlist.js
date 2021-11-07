import "./newlist.scss";
import Tab from "../tab/tab";
import listSvg from "../currentlist/svgs/list-svg.svg";
import { useState, useEffect, useContext } from "react";
import { Global } from "../../App";

export default () => {
    let { data, setData } = useContext(Global);
    data = data.listState;

    const [color, setColor] = useState("#00c7bd");
    const [title, setTitle] = useState(null);

    const colorScheme = [
        "#ff3a30",
        "#ff9500",
        "#ffcc00",
        "#34c759",
        "#00c7bd",
        "#af52de",
        "#a2855e",
    ];

    return (
        <div className="newlist">
            <Tab
                rightCb={() => {
                    if (title) {
                        setData({
                            type: "addlist",
                            value: {
                                listName: title,
                                color: color,
                                todos: [],
                            },
                        });
                    } else {
                        return;
                    }
                }}
                left="Cancelar"
                middle="Nova Lista"
                right="OK"
            />
            <div className="iconarea">
                <div style={{ backgroundColor: color }} className="icon-select">
                    <img src={listSvg} />
                </div>
            </div>
            <div className="inparea">
                <input
                    style={{ color: color }}
                    type="text"
                    onChange={(e) => {
                        const target = e.currentTarget;
                        var value = target.value;
                        value = value.trim();

                        if (value == "") {
                            setTitle(null);
                            return;
                        } else {
                            setTitle(value);
                        }
                    }}
                />
            </div>
            <div className="colorselect">
                {colorScheme.map((c) => {
                    return (
                        <button
                            style={{ backgroundColor: c }}
                            className="colorTemplate"
                            onClick={() => {
                                setColor(c);
                            }}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
};
