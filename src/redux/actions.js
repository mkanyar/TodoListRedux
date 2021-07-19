import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

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

export const visibilityFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});
