import { ADD_TODO } from "../actionTypes";

export const todos = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return null;
  }
};
