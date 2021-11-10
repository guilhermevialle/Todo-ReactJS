import "./results.scss";

import { useContext, useEffect, useState } from "react";
import CurrentList from "../currentlist/currentlist";
import { Global } from "../../App";
import listslider from "../listslider/listslider";

export default () => {
    let { data, setData } = useContext(Global);
    const { listState, searchinp } = data;

    useEffect(() => {
        const upcase = searchinp.toUpperCase();

        const res = document.querySelectorAll(
            ".results .currentlist .lside span"
        );

        res.forEach((x, index) => {
            var txtValue = x.textContent || x.innerText;

            if (txtValue.toUpperCase().indexOf(upcase) > -1) {
                document.querySelectorAll(".results .currentlist")[
                    index
                ].style.display = "";
            } else {
                document.querySelectorAll(".results .currentlist")[
                    index
                ].style.display = "none";
            }
        });
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
