import { GET_TRACKS_FULFILLED, GET_TRACKS_PENDING, GET_TRACKS_REJECTED } from "../actions/types";

export const initialState = {
  trackList: [],
  heading: "Top 10 tracks",
  fetching: false,
  fetched: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRACKS_PENDING:
      return {
        ...state,
        fetching: true
      };
    case GET_TRACKS_FULFILLED:
      return {
        ...state,
        trackList: payload,
        fetching: false,
        fetched: true
      };
    case GET_TRACKS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload
      };
    default:
      return state;
  }
}
