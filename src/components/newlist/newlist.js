import "./newlist.scss";
import Tab from "../tab/tab";
import listSvg from "../currentlist/svgs/list-svg.svg";
import { useState, useEffect, useContext } from "react";
import { Global } from "../../App";

export default () => {
    const [listObject, setListObject] = useState({
        listName: "",
        color: "",
        todos: [],
    });
    const [color, setColor] = useState(null);
    const { data, setData } = useContext(Global);
    const [createdLists, setCreatedLists] = useState([]);

    useEffect(() => {
        const span = document.querySelectorAll(".newlist .tab span")[2];
        console.log({ listObject });
        console.log({ createdLists });

        if (createdLists.indexOf(listObject) == -1) {
            setCreatedLists((prev) => {
                return [...prev, listObject];
            });

            span.addEventListener("click", () => {
                setData({
                    type: "addlist",
                    value: [...data, listObject],
                });
            });
        }
    }, [data]);

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
        var value = target.value;
        value = value.trim();

        setListObject((prev) => {
            prev.listName = value;
            return prev;
        });
    };

    return (
        <div className="newlist">
            <Tab left="Cancelar" middle="Nova Lista" right="OK" />
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
                                setColor(c);
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
