import "./interface.scss";
import InputComponent from "../input/input";
import PreSection from "../presection/presection";
import LastSection from "../lastsection/lastsection";
import List from "../list/list";
import Results from "../results/results";
import Footer from "../footer/footer";
import gsap, { Circ } from "gsap";
import { useContext } from "react";
import { Global } from "../../App";

//tabs
import NewReminder from "../../components/newreminder/newreminder";
import NewList from "../../components/newlist/newlist";

export default () => {
    const { data, setData } = useContext(Global);

    return (
        <div className="interface">
            <InputComponent placeholder="Buscar" />
            <PreSection />
            <LastSection />
            <h1
                style={{
                    margin: "20px 0 10px 0",
                    color: "#fff",
                    fontWeight: 500,
                }}
            >
                Minhas listas
            </h1>
            <Results />
            <Footer
                handlerNewList={() => {
                    gsap.to(".newlist", {
                        right: 0,
                        ease: Circ.ease,
                        duration: 0.4,
                    });
                }}
                func={() => {
                    setData({
                        type: "newReminderInsideList",
                        value: null,
                    });

                    gsap.to(".newreminder", {
                        right: 0,
                        ease: Circ.ease,
                        duration: 0.4,
                    });
                }}
            />
            <NewList />
            <NewReminder />
            <List />
        </div>
    );
};
