import { ADD_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byId: {},
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { content, id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            content,
          },
        },
      };
    default:
      return state;
  }
};
