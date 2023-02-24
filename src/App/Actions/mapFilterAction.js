import { SET_MAP_FILTER_DATA } from "../Types";
// filter data save function with reducer
export const setMapFilterData = (payload) => async (dispatch) => {
  dispatch({ type: SET_MAP_FILTER_DATA, payload });
};
