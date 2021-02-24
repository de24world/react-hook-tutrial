import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState(["js공부"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("새로운 내용이 렌더링되었네요", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>to 애플리케이션</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}> 할일 추가 </button>
      </form>

      <List todos={todos} />
    </div>
  );
};

export default App;
