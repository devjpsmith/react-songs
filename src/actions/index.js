/* eslint-disable import/prefer-default-export */
export const selectSong = (song) => ({
  type: 'SONG-SELECTED',
  payload: song,
});
