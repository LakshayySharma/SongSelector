import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Billie Jean', artist: 'Michael Jackson'},
        {title: 'Human Nature', artist: 'Michael Jackson'},
        {title: 'Bad', artist: 'Michael Jackson'},
        {title: 'Thriller', artist: 'Michael Jackson'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})