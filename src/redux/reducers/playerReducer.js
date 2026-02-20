import {
    SET_CURRENT_SONG,
    TOGGLE_PLAY,
    STOP_SONG,
    PLAY_SONG,
    PAUSE_SONG,
} from '../actions/playerActions';


const initialState = {
    currentSong: null,
    isPlaying: false,
    volume: 50,
    currentTime: 0,
    duration: 0,
};


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.payload,
                isPlaying: true,
                currentTime: 0,
                duration: action.payload.duration || 0,
            };

        case TOGGLE_PLAY:
            return {
                ...state,
                isPlaying: !state.isPlaying,
            };

        case PLAY_SONG:
            return {
                ...state,
                isPlaying: true,
            };

        case PAUSE_SONG:
            return {
                ...state,
                isPlaying: false,
            };

        case STOP_SONG:
            return {
                ...state,
                isPlaying: false,
                currentSong: null,
                currentTime: 0,
                duration: 0,
            };

        default:
            return state;
    }
};

export default playerReducer;