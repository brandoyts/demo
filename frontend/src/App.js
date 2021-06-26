import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await axios.get("http://188.166.190.124/api");
            setTodos(res.data.todos);
        };

        fetchTodos();

        return () => {
            setTodos(null);
        };
    }, []);

    return (
        <div className="App">
            <h1>Demo app!</h1>
            <List data={todos} />
        </div>
    );
}

function List(data) {
    const renderTodos = () => {
        return data.data.map((i, idx) => {
            return <li key={idx}>{i.title}</li>;
        });
    };
    return <ul>{renderTodos()}</ul>;
}

export default App;
