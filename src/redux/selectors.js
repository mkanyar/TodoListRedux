export const getAllIds = (state) => (state.todos ? state.todos.allIds : []);

export const getByIds = (state) => {
  return state.todos.byId;
};

export const getById = (state) => {
  return getAllIds(state).map((id) => getByIds(state)[id]);
};
