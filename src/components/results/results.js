import "./results.scss";

import { useContext, useEffect, useReducer, useState } from "react";
import CurrentList from "../currentlist/currentlist";
import { Global } from "../../App";

export default () => {
    const { data } = useContext(Global);
    const [arr, setArr] = useState(null);

    useEffect(() => {
        setArr(data);
    }, [data]);

    return arr ? (
        <div className="results">
            {arr.map((list) => {
                return <CurrentList list={list} />;
            })}
        </div>
    ) : (
        ""
    );
};
