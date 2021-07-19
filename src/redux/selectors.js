import { COMPLETED, INCOMPLETE } from "../constants";

export const getAllIds = (state) => (state.todos ? state.todos.allIds : []);

export const getByIds = (state) => {
  return state.todos.byId;
};

export const getById = (state) => {
  return getAllIds(state).map((id) => getByIds(state)[id]);
};

export const getTodosByVisibilityFIlters = (state, visibilityFilter) => {
  switch (visibilityFilter) {
    case COMPLETED: {
      return getById(state).filter((todo) => todo.completed);
    }
    case INCOMPLETE: {
      return getById(state).filter((todo) => !todo.completed);
    }
    default:
      return getById(state);
  }
};
