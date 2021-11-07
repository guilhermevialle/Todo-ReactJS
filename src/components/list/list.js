import "./list.scss";
import { useContext, useEffect, useState } from "react";
import TodoTemplate from "../todotemplate/todotemplate";
import { Global } from "../../App";
import Tab from "../tab/tab";
import gsap, { Circ } from "gsap";

export default () => {
    const { data } = useContext(Global);
    const { currentList } = data;
    const [thisObj, setThisObj] = useState(currentList);

    useEffect(() => {
        setThisObj(currentList);
    }, [currentList]);

    return thisObj ? (
        <div className="list">
            <Tab
                leftCb={() => {
                    gsap.to(".list", {
                        right: "-110%",
                        ease: Circ.ease,
                        duration: 0.4,
                    });
                }}
                left="￩ Listas"
                middle=" "
                right=" "
            />
            <h2> </h2>
            {currentList.todos.map((obj) => {
                return <TodoTemplate data={obj} />;
            })}
        </div>
    ) : (
        ""
    );
};
