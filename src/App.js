import "./App.scss";
import { useReducer, createContext } from "react";
import Interface from "./components/interface/interface";
import NewReminder from "./components/newreminder/newreminder";

export const Global = createContext();

function App() {
    const Reduce = (state, action) => {
        switch (action.type) {
            case "addlist":
                return {
                    ...state,
                    lists: action.value,
                };

            default:
                return state;
        }
    };

    const ReduceInitalValue = {
        lists: [
            {
                listName: "domingo",
                color: "greenyellow",
                todos: [
                    {
                        title: "descansar",
                        desc: "ver uns filme, serie e afins",
                    },
                    {
                        title: "beber agua",
                        desc: "beber bastante agua pra n dar pedra no rim",
                    },
                    {
                        title: "comer salgado",
                        desc: "nesse dia minha mae compra muitos salgados",
                    },
                    {
                        title: "dogs",
                        desc: "dar ração pros cachorros",
                    },
                ],
            },
            {
                listName: "segunda-feira",
                color: "blue",
                todos: [
                    {
                        title: "jogar bola",
                        desc: "jogar uma pelada hoje vai ser massa",
                    },
                    {
                        title: "ir para academia",
                        desc: "treino de peito hoje",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "red",
                todos: [
                    {
                        title: "estudar",
                        desc: "prova de quimica chegando",
                    },
                    {
                        title: "ir na padaria",
                        desc: "o dia q eu mais como pao",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "green",
                todos: [
                    {
                        title: "jogos",
                        desc: "dia de jogar o dia todo comendo chocolate",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "green",
                todos: [
                    {
                        title: "jogos",
                        desc: "dia de jogar o dia todo comendo chocolate",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "green",
                todos: [
                    {
                        title: "jogos",
                        desc: "dia de jogar o dia todo comendo chocolate",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "green",
                todos: [
                    {
                        title: "jogos",
                        desc: "dia de jogar o dia todo comendo chocolate",
                    },
                ],
            },
            {
                listName: "terca-feira",
                color: "green",
                todos: [
                    {
                        title: "jogos",
                        desc: "dia de jogar o dia todo comendo chocolate",
                    },
                ],
            },
        ],
    };

    const [data, setData] = useReducer(Reduce, ReduceInitalValue);

    return (
        <div className="App">
            <Global.Provider value={{ data, setData }}>
                <Interface />
                <NewReminder />
            </Global.Provider>
        </div>
    );
}

export default App;
