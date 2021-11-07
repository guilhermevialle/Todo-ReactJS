import "./results.scss";

import { useContext, useEffect, useState } from "react";
import CurrentList from "../currentlist/currentlist";
import { Global } from "../../App";
import listslider from "../listslider/listslider";

export default () => {
    let { data, setData } = useContext(Global);
    const { listState, searchinp } = data;

    useEffect(() => {
        const res = document.querySelectorAll(
            ".results .currentlist .lside span"
        );

        for (let x = 0; x < res.length; x++) {
            let txtValue = res[x].innerText || res[x].textContent;

            if (txtValue.toUpperCase().indexOf(searchinp) > -1) {
                document.querySelectorAll(".results .currentlist")[
                    x
                ].style.display = "";
            } else {
                document.querySelectorAll(".results .currentlist")[
                    x
                ].style.display = "none";
            }
        }
    }, [searchinp]);

    return listState ? (
        <div className="results">
            {listState.map((list, index) => {
                return <CurrentList list={list} index={index} />;
            })}
        </div>
    ) : (
        ""
    );
};
