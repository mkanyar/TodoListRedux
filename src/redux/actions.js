import { ADD_TODO } from "./actionTypes";

let id = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++id,
    content,
  },
});
