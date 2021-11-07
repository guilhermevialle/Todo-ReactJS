import "./App.scss";
import { useReducer, createContext } from "react";
import Interface from "./components/interface/interface";
import NewReminder from "./components/newreminder/newreminder";
import NewList from "./components/newlist/newlist";

export const Global = createContext();

function App() {
    const Reduce = (state, action) => {
        switch (action.type) {
            case "selectedlist":
                return {
                    ...state,
                    listIndex: action.value,
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
        listIndex: 0,
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
    };

    const [data, setData] = useReducer(Reduce, ReduceInitalValue);

    return (
        <div className="App">
            <Global.Provider value={{ data, setData }}>
                <NewList />
                <Interface />
                <NewReminder />
            </Global.Provider>
        </div>
    );
}

export default App;
