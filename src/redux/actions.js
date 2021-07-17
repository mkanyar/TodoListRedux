import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let id = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++id,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
