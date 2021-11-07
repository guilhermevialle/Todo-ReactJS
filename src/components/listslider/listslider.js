import "./listslider.scss";
import { Global } from "../../App";
import { useEffect, useContext, useState } from "react";
import Tab from "../tab/tab";
import listSvg from "../currentlist/svgs/list-svg.svg";
import check from "./svgs/check-svg.svg";
import gsap, { Elastic, Circ } from "gsap";

export default () => {
    const { data, setData } = useContext(Global);
    const { listState } = data;
    const [selected, setSelected] = useState(0);

    console.log(selected);

    const sliderToRight = () => {
        gsap.to(".listSlider", {
            right: "-110%",
            ease: Circ.ease,
            duration: 0.4,
        });
    };

    return (
        <div className="listSlider">
            <Tab
                rightCb={sliderToRight}
                leftCb={sliderToRight}
                left="Novo Lembrete"
                middle="Lista"
                right=" "
            />
            <div className="results">
                {listState.map((l, index) => {
                    return (
                        <div
                            className="liststyle"
                            onClick={(e) => {
                                let all = document.querySelectorAll(
                                    ".results .liststyle .check"
                                );

                                all.forEach((c) => {
                                    c.style.display = "none";
                                });

                                e.currentTarget.querySelector(
                                    ".check"
                                ).style.display = "block";
                                setSelected(index);
                                setData({
                                    type: "selectedlist",
                                    value: index,
                                });
                            }}
                        >
                            <div>
                                <img
                                    style={{ backgroundColor: l.color }}
                                    src={listSvg}
                                />
                                <span> {l.listName} </span>
                            </div>
                            <img className="check" src={check} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
