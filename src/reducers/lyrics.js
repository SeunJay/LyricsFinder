import { GET_LYRIC_FULFILLED, GET_LYRIC_PENDING } from "../actions/types";

export const initialState = {
  lyrics: {},
  track: {},
  fetching: false,
  fetched: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LYRIC_PENDING:
      return {
        ...state,
        fetching: true
      };
    case GET_LYRIC_FULFILLED:
      return {
        ...state,
        lyrics: payload,
        track: payload,
        fetching: false,
        fetched: true
      };
    default:
      return state;
  }
}
