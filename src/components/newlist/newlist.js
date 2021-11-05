import "./newlist.scss";
import Tab from "../tab/tab";
import listSvg from "../currentlist/svgs/list-svg.svg";
import { useState, useEffect } from "react";

export default () => {
    const [listObject, setListObject] = useState({
        color: "#00c7bd",
    });

    const colorScheme = [
        "#ff3a30",
        "#ff9500",
        "#ffcc00",
        "#34c759",
        "#00c7bd",
        "#af52de",
        "#a2855e",
    ];

    const eventHandler = (evt) => {
        const target = evt.currentTarget;
        const value = target.value;

        if (evt.keyCode == "13") {
            setListObject((prev) => {
                prev.listName = value;
                return prev;
            });
        }
    };

    return (
        <div className="newlist">
            <Tab left="Cancelar" middle="Nova Lista" right="OK" />
            <div className="iconarea">
                <div
                    style={{ backgroundColor: listObject.color }}
                    className="icon-select"
                >
                    <img src={listSvg} />
                </div>
            </div>
            <div className="inparea">
                <input
                    style={{ color: listObject.color }}
                    type="text"
                    onKeyUp={(e) => {
                        eventHandler(e);
                    }}
                />
            </div>
            <div className="colorselect">
                {colorScheme.map((c) => {
                    return (
                        <div
                            style={{ backgroundColor: c }}
                            className="colorTemplate"
                            onClick={() => {
                                console.log(listObject);

                                setListObject((prev) => {
                                    prev.color = c;
                                    return prev;
                                });
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};
