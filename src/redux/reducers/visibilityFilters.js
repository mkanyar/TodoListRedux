import { SET_FILTER } from "../actionTypes";
import { ALL } from "../../constants";

const initialState = {
  filter: ALL,
};

export const visibilityFilters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return { filter: action.payload.filter };
    }

    default: {
      return state;
    }
  }
};
