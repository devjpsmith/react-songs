import { combineReducers } from 'redux';

const songsReducer = () => [
  { title: 'No Scrubs', duration: '4:05' },
  { title: 'Macarena', duration: '2:03' },
  { title: 'All Star', duration: '3:15' },
  { title: 'I Want It That Way', duration: '3:48' },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

const favoriteSongReducer = (favoriteSong = 'All Star', action) => {
  if (action.type === 'FAVORITE_SELECTED') { return action.payload; }
  return favoriteSong;
};

export default combineReducers(
  {
    songsReducer,
    selectedSongReducer,
    favoriteSongReducer,
  },
);
