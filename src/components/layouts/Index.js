import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getTracks, setSearchField, searchTracks } from "../../actions/tracks";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = ({
  tracks,
  getTracks,
  onSearchChange,
  search: { searchField },
  searchTracks
}) => {
  useEffect(() => {
    const fetchTracks = async () => {
      await getTracks();
    };

    fetchTracks();
  }, [getTracks]);

  const findTracks = e => {
    e.preventDefault();
    searchTracks(searchField);
  };

  return (
    <Fragment>
      <Search handleChange={onSearchChange} findTracks={findTracks} />
      <Tracks tracks={tracks} />
    </Fragment>
  );
};

const mapStateToProps = ({ tracks, search }) => {
  return {
    tracks,
    search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTracks: () => dispatch(getTracks()),
    searchTracks: trackName => dispatch(searchTracks(trackName)),
    onSearchChange: value => dispatch(setSearchField(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
