import { createContext, useContext } from "react";

export const todoContaxt = createContext({
  todo: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  updateTodo: (todo, id) => {},
  completedTodo: (id) => {},
});
export const TodoProvider = todoContaxt.Provider;
