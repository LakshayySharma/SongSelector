import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h1>Details for: </h1>
            <h3>Title: {song.title}</h3>
            <h3>Artist: {song.artist}</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);