import {
  CHANGE_SEARCH_FIELD,
  SEARCHED_TRACKS_PENDING,
  SEARCHED_TRACKS_FULFILLED
} from "../actions/types";

export const initialState = {
  searchField: "",
  heading: "",
  fetching: true,
  fetched: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCHED_TRACKS_PENDING:
      return {
        ...state,
        fetching: true
      };
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload
      };
    case SEARCHED_TRACKS_FULFILLED:
      return {
        ...state,
        heading: "Search results"
      };
    default:
      return state;
  }
}
