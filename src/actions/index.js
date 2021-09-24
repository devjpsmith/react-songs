/* eslint-disable import/prefer-default-export */
export const selectSong = (song) => ({
  type: 'SONG_SELECTED',
  payload: song,
});

export const selectFavorite = (songTitle) => ({
  type: 'FAVORITE_SELECTED',
  payload: songTitle,
});
