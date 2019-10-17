import { combineReducers } from "redux";
import tracks from "./tracks";
import lyrics from "./lyrics";

export default combineReducers({
  tracks,
  lyrics
});
