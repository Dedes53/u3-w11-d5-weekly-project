export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const STOP_SONG = 'STOP_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';


export const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song,
});


export const togglePlay = () => ({
    type: TOGGLE_PLAY,
});


export const playSong = () => ({
    type: PLAY_SONG,
});


export const pauseSong = () => ({
    type: PAUSE_SONG,
});


export const stopSong = () => ({
    type: STOP_SONG,
});