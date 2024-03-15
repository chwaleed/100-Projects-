import { useContext, useState } from "react";
import React from "react";
import { todoContaxt } from "../Contaxt/Contaxt";

function TodoList({ todo }) {
  const { removeTodo, completedTodo, updateTodo } = useContext(todoContaxt);
  const [newTodomsg, setNewTodomsg] = useState(todo.todoMsg);
  const [todoEditable, setTodoEditable] = useState(false);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todoMsg: newTodomsg });
    setTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completedTodo(todo.id)}
      />
      <input
        onChange={(e) => setNewTodomsg(e.target.value)}
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          todoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={newTodomsg}
        readOnly={!todoEditable}
      />
      <div className="flex gap-3">
        <button
          onClick={() => {
            if (todo.completed) return;
            if (todoEditable) {
              editTodo();
            } else setTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        >
          {todoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => removeTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoList;
