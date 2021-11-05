import "./interface.scss";
import InputComponent from "../input/input";
import PreSection from "../presection/presection";
import LastSection from "../lastsection/lastsection";
import List from "../list/list";
import Results from "../results/results";
import Footer from "../footer/footer";
import { useEffect } from "react";

export default () => {
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
            <List />
            <Results />
            <Footer />
        </div>
    );
};
