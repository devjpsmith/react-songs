/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectFavorite } from '../actions';

class SongDetails extends Component {
  render() {
    if (!this.props.song) return <div>Select a this.props.song</div>;
    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {this.props.song.title}
          <br />
          Duration: {this.props.song.duration}
        </p>
        <button onClick={() => this.props.selectFavorite(this.props.song.title)}>Set as Favorite <i className="fa fa-heart" /></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  song: state.selectedSongReducer,
});

export default connect(mapStateToProps, { selectFavorite })(SongDetails);
