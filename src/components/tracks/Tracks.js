import React from "react";
import Track from "./Track";
import Spinner from "../spinner/Spinner";

const Tracks = ({
  tracks: { trackList, fetching, heading },
}) => {
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

export default Tracks;
