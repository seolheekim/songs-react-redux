import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song) {
    return <div> <h1> Select a Song </h1> </div>
  }
  return (
    <div>
      <h3> Detail of the Song: </h3>
      <p> Title: {song.title} </p>
      <p> Duration: {song.duration} </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);