import {
    FETCH_SONGS_REQUEST,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE,
    CLEAR_ERROR,
} from '../actions/musicActions';


const initialState = {
    songs: [],
    loading: false,
    error: null,
};


const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SONGS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: action.payload,
                error: null,
            };

        case FETCH_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                songs: [],
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export default musicReducer;