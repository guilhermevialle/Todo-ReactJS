import "./newreminder.scss";
import Tab from "../tab/tab";
import { Global } from "../../App";
import { useContext, useEffect, useState } from "react";
import rightSvg from "../currentlist/svgs/right-svg.svg";
import ListSlider from "../listslider/listslider";
import gsap, { Elastic } from "gsap";

export default () => {
    const { data, setData } = useContext(Global);
    const { listState, listIndex } = data;

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [to, setTo] = useState(listIndex);

    const sliderToLeft = () => {
        gsap.to(".listSlider", {
            right: 0,
            ease: Elastic.ease,
            duration: 0.6,
        });
    };

    useEffect(() => {
        setTo(listIndex);
    }, [listIndex]);

    const close = () => {
        gsap.to(".newreminder", {
            right: "-110%",
            ease: Elastic.ease,
            duration: 0.6,
        });
    };

    return (
        <div className="newreminder">
            <ListSlider />
            <Tab
                leftCb={() => {
                    close();
                }}
                rightCb={() => {
                    if (
                        title != null &&
                        title != "" &&
                        desc != null &&
                        desc != ""
                    ) {
                        listState[to].todos.push({
                            title,
                            desc,
                        });

                        setData({
                            type: "addreminder",
                            value: listState,
                        });

                        close();
                    } else {
                        return;
                    }
                }}
                left="Cancelar"
                middle="Novo Lembrete"
                right="Adicionar"
            />
            <div className="aroundInps">
                <div className="inps">
                    <input
                        type="text"
                        placeholder="Título"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            setTitle(val);
                        }}
                    />
                </div>
                <div className="inps">
                    <input
                        type="text"
                        placeholder="Notas"
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            setDesc(val);
                        }}
                    />
                </div>
            </div>

            <div
                className="select"
                onClick={() => {
                    sliderToLeft();
                }}
            >
                <span>Lista</span>
                <div>
                    <div
                        className="circ"
                        style={{ backgroundColor: listState[to].color }}
                    ></div>
                    <span>{listState[to].listName}</span>
                    <img src={rightSvg} />
                </div>
            </div>
        </div>
    );
};
