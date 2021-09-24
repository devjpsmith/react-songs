/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    // eslint-disable-next-line react/prop-types
    return this.props.songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">
          {song.title}
          {this.renderFavorite(song)}
        </div>
      </div>
    ));
  }

  renderFavorite(song) {
    if (song.title === this.props.favoriteTitle) { return <i className="fa fa-heart icon-favorite" />; }
    return null;
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => ({
  songs: state.songsReducer,
  favoriteTitle: state.favoriteSongReducer,
});

export default connect(mapStateToProps, { selectSong })(SongList);
