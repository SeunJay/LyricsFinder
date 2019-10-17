import {
  GET_LYRIC_FULFILLED,
  GET_LYRIC_PENDING,
  GET_TRACK_FULFILLED,
  GET_TRACK_PENDING
} from "./types";
import axios from "axios";

const fetchLyric = payload => ({
  type: GET_LYRIC_FULFILLED,
  payload
});

const fetchTrack = payload => ({
  type: GET_TRACK_FULFILLED,
  payload
});

export const getLyric = id => dispatch => {
  dispatch({ type: GET_LYRIC_PENDING });
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      dispatch(fetchLyric(res.data.message.body.lyrics));
      dispatch({ type: GET_TRACK_PENDING });
      return axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );
    })
    .then(res => {
      dispatch(fetchTrack(res.data.message.body.track));
    })
    .catch(err => console.log(err));
};
