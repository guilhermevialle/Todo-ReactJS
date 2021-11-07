import "./results.scss";

import { useContext, useEffect, useReducer, useState } from "react";
import CurrentList from "../currentlist/currentlist";
import { Global } from "../../App";

export default () => {
    let { data } = useContext(Global);
    data = data.listState;

    return data ? (
        <div className="results">
            {data.map((list, index) => {
                return <CurrentList list={list} index={index} />;
            })}
        </div>
    ) : (
        ""
    );
};
