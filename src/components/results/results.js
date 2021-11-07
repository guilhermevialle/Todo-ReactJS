import "./results.scss";

import { useContext, useEffect, useState } from "react";
import CurrentList from "../currentlist/currentlist";
import { Global } from "../../App";

export default () => {
    let { data } = useContext(Global);
    const { listState, searchinp } = data;
    const [x, setX] = useState(null);

    useEffect(() => {
        setX(listState.filter((l) => l.listName.includes(searchinp) != -1));
    }, [searchinp]);

    return x ? (
        <div className="results">
            {listState.map((list, index) => {
                return <CurrentList list={list} index={index} />;
            })}
        </div>
    ) : (
        ""
    );
};
