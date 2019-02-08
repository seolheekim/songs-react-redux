import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  // This method is to just take the list of songs,
  // map over them and return a big blob of JSX.
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              SELECT
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      )
    })
  };


  render() {
    return <div className="ui divided list"> {this.renderList()} </div>
  }
};

// This is saying we're going to take the state object.
// Essentially all of the data that is inside of the redux store.
// Then it is going to run some calculation on it to cause the data to eventually
// show up as props inside of the SongList component.
// 'state' contains list of all the songs and selected songs.

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

// Steps to get react-redux library to get data from the redux store into a component.

// STEP#1 : import { connect } from 'react-redux';
// STEP#2 : call connect(mapStateToProps)
// STEP#3 : then pass the component(SongList) as second function
//          connect(mapStateToProps)(SongList)
// STEP#4 : Define mapStateToProps and it is always going to get first argument of
//          state and alway return an object that is going to show up as props inside
//          the component.