import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./Contaxt/Contaxt";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoMsg, setTodoMsg] = useState("");
  const addTodo = () => {
    setTodo((prev) => [
      { id: Date.now(), todoMsg: todoMsg, completed: false },
      ...prev,
    ]);
    setTodoMsg("");
  };
  const removeTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };
  const completedTodo = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateTodo = (id, todo) => {
    console.log(todo);
    setTodo((prev) =>
      prev.map((prevtodo) => (prevtodo.id == id ? todo : prevtodo))
    );
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));

    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{ todo, addTodo, removeTodo, completedTodo, updateTodo }}
    >
      <>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todo
            </h1>
            <div className="flex justify-center w-full mt-[2rem]">
              <input
                type="text"
                value={todoMsg}
                placeholder="Write Todo..."
                onChange={(e) => setTodoMsg(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              />
              <button
                onClick={addTodo}
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap flex-col mt-3 gap-y-3">
              {todo.map((todo) => (
                <TodoList key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </>
    </TodoProvider>
  );
}

export default App;
