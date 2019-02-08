//This is a Action Creator
export const selectSong = (song) => {
  // Return an Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

