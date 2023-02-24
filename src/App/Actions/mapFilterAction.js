import { SET_MAP_FILTER_DATA } from "../Types";

export const setMapFilterData = (payload) => async (dispatch) => {
  dispatch({ type: SET_MAP_FILTER_DATA, payload });
};
