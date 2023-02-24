import { SET_MAP_FILTER_DATA } from "../Types";

const initailState = {
  searchLocation: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initailState, action) => {
  switch (action.type) {
    case SET_MAP_FILTER_DATA: {
      return {
        ...state,
        searchLocation: [...state.searchLocation, action.payload]
      };
    }
    default:
      return state;
  }
};
