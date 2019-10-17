import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLyric } from "../../actions/lyric";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

const Lyrics = ({ match, getLyric, lyrics: { lyrics, fetching, fetched } }) => {
  useEffect(() => {
    const fetchLyric = async () => {
      await getLyric(match.params.id);
    };

    fetchLyric();
  }, [getLyric]);

  console.log(fetching);
  console.log(fetched);

  console.log(lyrics);

  return (
    <>
      {fetching ? (
        <Spinner />
      ) : (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go back
          </Link>
          <div className="card">
            <div className="card body">
              <p className="card-text p-4">{lyrics.lyrics_body}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ lyrics }) => {
  return {
    lyrics
  };
};

export default connect(
  mapStateToProps,
  { getLyric }
)(Lyrics);
