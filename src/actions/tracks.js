import { GET_TRACKS_FULFILLED, GET_TRACKS_PENDING } from "./types";
import axios from "axios";

const fetchTracks = payload => ({
  type: GET_TRACKS_FULFILLED,
  payload
});

export const getTracks = () => dispatch => {
  dispatch({ type: GET_TRACKS_PENDING });
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      dispatch(fetchTracks(res.data.message.body.track_list));
      console.log(res.data.message.body.track_list);
    })
    .catch(err => console.log(err));
};
