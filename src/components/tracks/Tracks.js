import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTracks } from "../../actions/tracks";
import Track from "./Track";
import Spinner from "../spinner/Spinner";

const Tracks = ({
  tracks: { trackList, fetching, fetched, heading },
  getTracks
}) => {
  useEffect(() => {
    const fetchTracks = async () => {
      await getTracks();
    };

    fetchTracks();
  }, [getTracks]);


  return (
    <>
      {fetching ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-center mb-5">{heading}</h3>
          <div className="row">
            {trackList.map((track, i) => (
              <Track key={track.track.track_id} track={track.track} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ tracks }) => {
  return {
    tracks
  };
};

export default connect(
  mapStateToProps,
  { getTracks }
)(Tracks);
