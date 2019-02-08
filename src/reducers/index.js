// when you make use of libraries you have to look at the doc
// and make sure whether you will need curly braces.
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I want it that way', duration: '1:45'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// now this will allow other files to access the combined
// reducers.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});