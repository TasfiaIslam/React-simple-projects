import { useState } from "react";
import "./App.css";
// Import Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Tasfia's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
