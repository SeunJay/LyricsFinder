import { CHANGE_SEARCH_FIELD, SEARCHED_TRACKS_FULFILLED } from "./types";

export const setSearchField = payload => dispatch => {
  dispatch({ type: CHANGE_SEARCH_FIELD, payload });
  dispatch({ type: SEARCHED_TRACKS_FULFILLED });
};
