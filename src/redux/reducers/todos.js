import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byId: {},
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content, id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            content,
            completed: false,
            id,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            completed: !state.byId[id].completed,
          },
        },
      };
    }

    default:
      return state;
  }
};
