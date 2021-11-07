import "./App.scss";
import { useReducer, createContext } from "react";
import Interface from "./components/interface/interface";

export const Global = createContext();

function App() {
    const Reduce = (state, action) => {
        switch (action.type) {
            case "selectedlist":
                return {
                    ...state,
                    listIndex: action.value,
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
                listName: "hoje",
                color: "#00c7bd",
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
        ],
        listIndex: 0,
        currentList: {
            listName: "hoje",
            color: "#00c7bd",
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
