import { combineReducers } from "redux";
import tracks from "./tracks";
import lyrics from "./lyrics";
import search from "./search";

export default combineReducers({
  tracks,
  lyrics,
  search
});
