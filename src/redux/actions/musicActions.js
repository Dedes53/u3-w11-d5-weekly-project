export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';



export const clearError = () => ({
    type: CLEAR_ERROR,
});

// chiamata API 
const API_BASE_URL = 'https://striveschool-api.herokuapp.com/api/deezer/search';

export const fetchSongs = (query = 'queen') => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SONGS_REQUEST,
        });

        fetch(`${API_BASE_URL}?q=${query}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Errore HTTP: ${res.status}`);
                }
            })
            .then((data) => {
                if (!data.data || data.data.length === 0) {
                    throw new Error('Nessuna canzone trovata');
                }

                dispatch({
                    type: FETCH_SONGS_SUCCESS,
                    payload: data.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_SONGS_FAILURE,
                    payload: error.message,
                });
            });
    };
};


