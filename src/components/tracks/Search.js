import React from "react";

const Search = ({ handleChange, findTracks }) => {
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music"></i> Search for a song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTracks}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="trackTitle"
            onChange={e => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};


export default Search;
