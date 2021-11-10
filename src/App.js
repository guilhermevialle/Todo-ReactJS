import "./App.scss";
import { useEffect, useReducer, createContext } from "react";
import Interface from "./components/interface/interface";
import gsap, { Elastic } from "gsap";

export const Global = createContext();

function App() {
    useEffect(() => {
        gsap.from(".interface", {
            yPercent: -15,
            opacity: 0,
            ease: Elastic.easeOut,
            duration: 0.7,
            delay: 0.5,
        });
    }, []);

    const Reduce = (state, action) => {
        switch (action.type) {
            case "selectedlist":
                return {
                    ...state,
                    listIndex: action.value,
                };

            case "searchinp":
                return {
                    ...state,
                    searchinp: action.value,
                };

            case "newReminderInsideList":
                return {
                    ...state,
                    newReminderInsideList: action.value,
                };

            case "addreminder":
                return {
                    ...state,
                    listState: action.value,
                };

            case "changecurrentList":
                return {
                    ...state,
                    currentList: action.value,
                };

            case "addlist":
                return {
                    ...state,
                    listState: [...state.listState, action.value],
                };
            default:
                return state;
        }
    };

    const ReduceInitalValue = {
        listState: [
            {
                listName: "segunda feira",
                color: "#ff9500",
                todos: [
                    {
                        title: "academia",
                        desc: "fazer treino de costas",
                    },
                    {
                        title: "terminar app",
                        desc: "terminar reminder app baseado em iOS",
                    },
                ],
            },
            {
                listName: "quarta feira",
                color: "#34c759",
                todos: [
                    {
                        title: "jogar bola",
                        desc: "das 14 ate umas 19",
                    },
                    {
                        title: "consertar celular",
                        desc: "trocar tela de 5 celulares",
                    },
                    {
                        title: "maratonar",
                        desc: "terminar de assistir filmes da marvel",
                    },
                ],
            },
            {
                listName: "sexta feira",
                color: "#a2855e",
                todos: [
                    {
                        title: "descansar",
                        desc: "talvez sair com meus amigos a noite para comer algo",
                    },
                ],
            },
            {
                listName: "domingo",
                color: "#a2855e",
                todos: [
                    {
                        title: "dormir no minimo 10h pra descansar o corpo",
                        desc: "10h - 12h",
                    },
                    {
                        title: "programar",
                        desc: "aprender mais sobre javascript e iniciar um novo projeto",
                    },
                    {
                        title: "fazer caminhada",
                        desc: "fazer uma caminhada na parte da tarde com o cachorro ou com amigos",
                    },
                ],
            },
        ],
        searchinp: "",
        newReminderInsideList: null,
        listIndex: 0,
        currentList: {
            listName: "'hoje'",
            color: "",
            todos: [
                {
                    title: "",
                    desc: "",
                },
                {
                    title: "",
                    desc: "",
                },
            ],
        },
    };

    const [data, setData] = useReducer(Reduce, ReduceInitalValue);

    return (
        <div className="App">
            <Global.Provider value={{ data, setData }}>
                <Interface />
            </Global.Provider>
        </div>
    );
}

export default App;
