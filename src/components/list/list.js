import "./list.scss";
import { useContext, useEffect, useState } from "react";
import TodoTemplate from "../todotemplate/todotemplate";
import { Global } from "../../App";
import Tab from "../tab/tab";
import gsap, { Circ } from "gsap";
import PlustBtn from "../plusbtn/plus";

export default () => {
    const { data } = useContext(Global);
    const { currentList } = data;
    const [thisObj, setThisObj] = useState(currentList);

    const sliderToRight = () => {
        gsap.to(".list", {
            right: "-110%",
            ease: Circ.ease,
            duration: 0.4,
        });
    };

    useEffect(() => {
        setThisObj(currentList);
    }, [currentList]);

    return thisObj ? (
        <div className="list">
            <Tab leftCb={sliderToRight} left="￩ Listas" middle=" " right=" " />
            <h2>{thisObj.listName}</h2>

            {thisObj.todos.map((obj) => {
                return <TodoTemplate data={obj} />;
            })}

            <PlustBtn
                func={() => {
                    gsap.to(".newreminder", {
                        right: 0,
                    });
                }}
                text="Novo Lembrete"
            />
        </div>
    ) : (
        ""
    );
};
